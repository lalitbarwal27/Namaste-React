import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntData from "../utils/useRestrauntData";
import RestrauntCategory from "./RestrauntCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const { restaurantData, categories } = useRestrauntData(resId);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  return (
    <div className="font-bold text-center w-full">
      <h4>{restaurantData.name}</h4>
      <h4>{restaurantData.costForTwo / 100}</h4>
      {categories.map((item, index) => (
        <RestrauntCategory
          key={index}
          item={item}
          setShowIndex={setShowIndex}
          show={showIndex === index ? true : false}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
