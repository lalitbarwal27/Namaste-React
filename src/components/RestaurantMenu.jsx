import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId}&catalog_qa=undefined`
    );
    const res = await data.json();
    setRestaurantData(res.data.cards[2].card.card.info);
    console.log(res.data.cards[2].card.card.info);
  };

  if (restaurantData === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h4>{restaurantData.name}</h4>
      <h4>{restaurantData.avgRating}</h4>
      <h4>{restaurantData.cuisines.join(", ")}</h4>
      <h4>{restaurantData.costForTwo / 100}</h4>
    </div>
  );
};

export default RestaurantMenu;
