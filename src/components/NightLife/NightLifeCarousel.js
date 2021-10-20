import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../carouselArrow";

// components
import PictureCarouselCard from "../PictureCarousel";

const NightLifeCarousel = () => {
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

export default NightLifeCarousel;
