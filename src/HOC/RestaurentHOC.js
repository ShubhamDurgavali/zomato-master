import React from "react";
import {Route} from "react-router-dom"

// Layout
import RestaurentLayout from "../Layout/RestaurentLayout";

const RestaurentHOC = ({component: Component, ...rest}) => {
  return (
    <>
     <Route
       {...rest}
       component={(props)=> (
         <RestaurentLayout>
          <Component {...rest} />
         </RestaurentLayout>
       )
       }
     />
    </>
  );
};

export default RestaurentHOC;
