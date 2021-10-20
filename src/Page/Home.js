import React from "react";
import { useParams } from "react-router-dom";

// components
import Delivery from "../components/Delivery/Delivery";
import Dining from "../components/Dining/Dining";
import NightLife from "../components/NightLife/NightLife";

const Home = () => {
  const { type } = useParams();

  return (<>
    <div className="my-4">
    {type === "delivery" && <Delivery />}
    {type === "dining" && <Dining />}
    {type === "nightlife" && <NightLife />}
    </div>
  </>);
};

export default Home;
