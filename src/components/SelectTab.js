import React from "react";
import { useParams } from "react-router-dom";

// components
import Delivery from "./Delivery/Delivery";
import Dining from "./Dining/Dining";
import NightLife from "./NightLife/NightLife";

const SelectTab = () => {
  const { type } = useParams();

  return (<>
    <div className="my-4">
    {type === "delivery" && <Delivery />}
    {type === "dining" && <Dining />}
    {type === "nightlife" && <NightLife />}
    </div>
  </>);
};

export default SelectTab;
