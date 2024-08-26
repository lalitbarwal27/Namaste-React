import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { info } = props.restData;
  const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } =
    info;

  return (
    <div key={info.id} className="cardContainer">
      <img className="restImage" src={CDN_URL + cloudinaryImageId} alt="" />
      <h4>{name}</h4>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute m-2 p-2 bg-black rounded-lg text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
