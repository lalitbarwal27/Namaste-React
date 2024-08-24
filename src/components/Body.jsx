import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //destructing the array on the fly
  const [availableRestaurat, setAvailableRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    setAvailableRestaurants(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestaurants(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterAbove4 = () => {
    let filtered = availableRestaurat.filter(
      (item) => item.info.avgRating > 4.4
    );
    setAvailableRestaurants(filtered);
  };

  if (availableRestaurat.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="filter">
        <div className="filter-search">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            onClick={() => {
              let filteredRestaurant = availableRestaurat.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button className="filterButton" onClick={filterAbove4}>
          Filter Restaurants
        </button>
      </div>
      <div className="container">
        {filteredRestaurant.map((rest) => (
          <RestaurantCard key={rest.info.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
