import React from "react";
import Slider from "react-slick";

// components
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import { NextArrow, PrevArrow } from "../carouselArrow";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
      title: "burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
      title: "Paneer",
    },
  ];

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryFoodCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryFoodCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousel;
