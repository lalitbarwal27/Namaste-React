import { useEffect, useState } from "react";

const useRestrauntData = (resId) => {
  console.log(resId, "thsi is id");
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId}&catalog_qa=undefined`
    );
    const res = await data.json();
    setRestaurantData(res?.data?.cards[2]?.card?.card?.info);
  };
  return restaurantData;
};

export default useRestrauntData;
