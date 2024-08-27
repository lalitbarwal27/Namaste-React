import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCartData } from "../utils/cartSlice";

const RestrauntCategory = (props) => {
  const dispatch = useDispatch();
  const data =
    props.item.card.card.itemCards ?? props.item.card.card?.categories;

  const { setShowIndex, index, show } = props;

  const addToCart = (item) => {
    dispatch(addCartData(item));
  };

  return (
    <div className="w-1/3 shadow-md mx-auto bg-gray-100 m-3 p-3">
      <div className="flex justify-between" onClick={() => setShowIndex(index)}>
        <div className="">
          {props.item.card.card.title}(
          {props.item.card.card?.itemCards?.length ??
            props.item.card.card?.categories?.length}
          )
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </div>
      </div>
      {show && (
        <div className="">
          {data?.length > 0 &&
            data?.map((item) => {
              return (
                <div
                  className="flex border-b-2 pb-4"
                  onClick={() => addToCart(item)}
                >
                  {" "}
                  <img
                    className="w-20 h-16  m-2 p-2"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                  <p className="text-sm font-normal text-left">
                    {item?.card?.info?.description}
                  </p>
                </div>
              );
            })}

          {data[0]?.itemCards?.length > 0 &&
            data[0]?.itemCards?.map((item) => {
              console.log(item);
              return (
                <div className="flex border-b-2 pb-4">
                  {" "}
                  <img
                    className="w-20 h-16  m-2 p-2"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                  <p className="text-sm font-normal text-left">
                    {item?.card?.info?.description}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default RestrauntCategory;
