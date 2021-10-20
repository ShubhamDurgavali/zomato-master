import React, {useState} from "react";

// Components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurentCard from "../RestaurentCard";

const Delivery = () => {

    const [restaurentList, setRestaurentList] = useState([
        {
            _id: "123456",
            photos: ["https://b.zmtcdn.com/data/pictures/1/19434111/28d151ac84de9109de060085fa5746cc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",],
            name: "Amber Restaurent",
            cuisine: ["North Indian", "Chinese", "Maharashtrian", "Biryani"],
            averageCost: 250,
            isPro: true,
            isProOff: 20,
            isOff: 40,
            durationofdelivery: 47,
            restaurentReviewList: 3.9,
        },
        {
            _id: "123456-2",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/5/19655175/5e86b2e23e54ddaf84de34918a07d339_o2_featured_v2.jpg?output-format=webp",],
            name: "Oriental Majik",
            cuisine: ["Chinese"],
            averageCost: 250,
            isPro: true,
            isProOff: 15,
            isOff: 60,
            durationofdelivery: 49,
            restaurentReviewList: 4.0,
        },
        {
            _id: "123456-3",
            photos: ["https://b.zmtcdn.com/data/pictures/0/35090/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",],
            name: "McDonald's",
            cuisine: ["Fast Food", "Burger", "Beverages", "Desserts"],
            averageCost: 250,
            isPro: false,
            isOff: 50,
            durationofdelivery: 32,
            restaurentReviewList: 4.1,
        },
        
    ])

    return (
    <>
        <DeliveryCarousel />
        {/* <Brand /> */}
        <div className="flex flex-wrap justify-between">
          {
              restaurentList.map((restaurent) => (
                <RestaurentCard {...restaurent} key={restaurent._id}/>
              ))
          }
        </div>
    </>
  );
};

export default Delivery;
