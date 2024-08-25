import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntData from "../utils/useRestrauntData";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantData = useRestrauntData(resId);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  console.log(restaurantData, "this is data");
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
