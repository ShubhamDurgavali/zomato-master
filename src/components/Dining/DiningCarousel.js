import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../carouselArrow";

// components
import PictureCarouselCard from "../PictureCarousel";

const DiningCarousel = () => {
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
    <div className="w-full">
      <Slider {...settings}>
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
      </Slider>
    </div>
  );
};

export default DiningCarousel;
