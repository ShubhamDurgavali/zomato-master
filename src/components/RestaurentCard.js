import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurentCard = (props) => {
  return (
    <>
      <div className="bg-white p-4 mb-4 w-full rounded-2xl hover:shadow-lg duration-700 ease-in-out md:w-1/2 lg:w-1/3">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex flex-col gap-2 items-start">
              {props.isPro && (
                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                  Pro extra {props.isProOff}% off!
                </span>
              )}
              {props.isOff && (
                <span className="bg-blue-400 text-white px-2 py-1 rounded  text-sm">
                  {`${props.isOff}`}% OFF
                </span>
              )}
            </div>
            <div>
              <span className="bg-white bg-opacity-75 rounded p-1 mr-3">
                {props.durationofdelivery} min
              </span>
            </div>
          </div>
          <img
            src={props.photos.length && props.photos[0]}
            alt="food"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-xl">{props.name}</h4>
            <span className="bg-green-800 text-white text-sm flex items-center rounded p-1 ">
              {props.restaurentReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-400">
            <p>{props.cuisine.join(", ")}</p>
            <p>₹ {props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurentCard;
