import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown} from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MobileNav = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full md:hidden">
          <AiOutlineArrowLeft />
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zomato-400 text-white px-3 py-2 rounded-full">
            Use App
          </button>
          <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
            <FaPizzaSlice />
          </span>
        </div>
      </div>
    </>
  );
};

const MediumNav = () => {

  return (
    <>
      <div className="hidden lg:hidden md:flex items-center justify-between w-full p-2">
        <div className="flex items-center text-2xl">
          <GiHamburgerMenu />
        </div>
        <div className="w-36">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

const LargeNav = () => {
  return (
    <>
      <div className="hidden md:hidden lg:flex items-center w-full justify-between gap-3 px-40">
        <div className="w-48">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3 mr-52">
          <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
            <span className="text-zomato-400">
              <HiLocationMarker />
            </span>
            <input type="text" placeholder="Mumbai" />
            <IoMdArrowDropdown />
          </div>
          <div className="flex items-center gap-2">
            <RiSearch2Line />
            <input
              type="search"
              placeholder="Search for restaurent, cuisine or dish"
            />
          </div>
        </div>
        <div className="flex gap-3 w-1/4">
          <button className="text-gray-500 text-xl hover:text-gray-800">
            Log in
          </button>
          <button className="text-gray-500 text-xl hover:text-gray-800">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex bg-white items-center lg:shadow-none">
        <MobileNav />
        <MediumNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default Navbar;
