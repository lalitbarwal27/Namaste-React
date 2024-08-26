import { useEffect, useState } from "react";

const useRestrauntData = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId}&catalog_qa=undefined`
    );
    const res = await data.json();
    setCategories(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) =>
          item.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          item.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      )
    );
    setRestaurantData(res?.data?.cards[2]?.card?.card?.info);
  };
  return { restaurantData, categories };
};

export default useRestrauntData;
