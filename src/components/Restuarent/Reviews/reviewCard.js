import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const reviewCard = () => {
  return (
    <>
      <div className="flex flex-col gap-3 my-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/a3f/86958791563b97356b4e6225949d1a3f.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="wifull h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Shubham Durgavali</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h3 className="font-regular uppercase">Delivery</h3>
            <small className="text-gray-500">3 days ago</small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              This outlet has variety of options trust me it’s near my cousins
              place I always order from here whenever I get a chance I just love
              missipie Flavour it’s cake slice n ice cream both are amazing and
              I get option to order only when I visit my cousin’s place Must
              order
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default reviewCard;
