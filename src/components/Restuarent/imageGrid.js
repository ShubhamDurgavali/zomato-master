import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const imageGrid = (props) => {
  return (
    <>
      <div className="w-full h-60 md:hidden">
        <img
          src={props.images[0]}
          alt="restaurent food"
          className="w-full h-full object-cover  rounded-lg"
        />
      </div>
      <div className="hidden w-full h-96 md:flex gap-1">
        <div className="w-7/12 h-full rounded-lg overflow-hidden">
          <img
            src={props.images[0]}
            alt="restaurent food"
            className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <img
            src={props.images[1]}
            alt="restaurent food"
            className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
          />
          <img
            src={props.images[2]}
            alt="restaurent food"
            className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={props.images[3]}
              alt="restaurent food"
              className="w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg" />
            <h4 className="absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold">
              View Gallery
            </h4>
          </div>
          <div className="w-full h-full relative">
            <img
              src={props.images[4]}
              alt="restaurent food"
              className="w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg" />
            <div className="absolute inset-y-1/3 z-20 flex flex-col items-center w-full h-full text-center text-white font-semibold">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera />
              </div>
              <h4 className="">View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default imageGrid;
