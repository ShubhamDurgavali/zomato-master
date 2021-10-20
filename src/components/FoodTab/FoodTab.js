import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoFootstepsOutline, IoBeerOutline } from "react-icons/io5";

const MobileTabs = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <HiOutlineShoppingBag />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFootstepsOutline />,
      name: "Dining",
    },
    {
        id: "nightlife",
        icon: <IoBeerOutline />,
        name: "Nightlife",
      },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="md:hidden lg:hidden bg-white shadow-inner p-3 fixed bottom-0 z-10 w-full flex justify-between items-center text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col items-center relative text-xl text-zomato-400"
                  : "flex flex-col items-center text-xl"
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full border-t-2 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-xl">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};


const LargeTabs = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      name: "Dining Out",
      activeColor: "blue",
    },
    {
      id: "nightlife",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name: "Nightlife",
      activeColor: "purple",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="container px-24">
        <div className="hidden lg:flex gap-14 container px-20 mx-auto">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex items-center gap-3 border-b-2 border-zomato-400 pb-2 transition duration-500 ease-in-out"
                    : "flex items-center gap-3"
                }
              >
                <div
                  className={`w-16 h-16  bg-${
                    type === items.id ? items.activeColor : "gray"
                  }-100 p-4 rounded-full`}
                >
                  <img
                    src={
                      type === items.id ? items.imageActive : items.imageDefault
                    }
                    alt="delivery"
                    className="w-full h-full"
                  />
                </div>
                <h3
                  className={
                    type === items.id
                      ? "text-xl text-zomato-400 font-semibold"
                      : "text-xl text-gray-700 font-semibold"
                  }
                >
                  {items.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTab;
