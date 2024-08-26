import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  //destructing the array on the fly
  const [availableRestaurat, setAvailableRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    console.log(res?.data?.cards[1]?.card?.card?.gridElements);

    setAvailableRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h2>Looks like you internet is gone. Please chekc and try agaian</h2>
    );
  }

  const RestrauntWithLabel = withPromotedLabel(RestaurantCard);

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

        <input
          type="text"
          className="border-2 border-black"
          onChange={(e) => setUserName(e.target.value)}
          value={loggedInUser}
        />
      </div>
      <div className="container">
        {filteredRestaurant.map((rest) => (
          <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
            {rest.info.isOpen ? (
              <RestrauntWithLabel restData={rest} />
            ) : (
              <RestaurantCard restData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
