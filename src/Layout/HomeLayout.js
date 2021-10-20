import React from "react";

// Components
import Navbar from "../components/Navbar/Navbar";
import FoodTab from "../components/FoodTab/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto lg:px-20">{props.children}</div>
    </>
  );
};

export default HomeLayout;
