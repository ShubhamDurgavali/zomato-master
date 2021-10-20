import React from "react";

const DeliverySmCard = ({image, title}) => {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56">
        <div className="w-full h-24">
          <img
            src={image}
            alt="burger"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div>
          <h3 className="text-sm font-light my-2 text-center">{title}</h3>
        </div>
      </div>
    </>
  )
}

const DeliveryLgCard = ({image, title}) => {
  return(
    <>
    <div className="hidden lg:block w-64 h-48">
        <div className="w-full h-full">
          <img
            src={image}
            alt="burger"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium my-2">{title}</h3>
        </div>
      </div>
    </>
      
  )
}

const DeliveryFoodCategory = (props) => {
  return (
    <>
    <DeliverySmCard {...props}/>
    <DeliveryLgCard {...props}/>
    </>
  );
};

export default DeliveryFoodCategory;
