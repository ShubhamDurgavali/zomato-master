import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "../carouselArrow";

const Brand = (props) => {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/d919948baa416a7dc8f85ab7d5db05c3_1611383508.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/2d041d7d13a7bda9782ccf04f75291ff_1626117131.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ea590b040a4902b757fd6126439bd5c3_1605071443.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/f6e2cc03503ef28f9cba0ac3ff5c208d_1496986434.png?output-format=webp",
  ];

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
            }
        },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                initialSlide: 2,
            }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        }

    ]
  };

  return (
    <>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="w-24 h-24">
            <img src={logo} alt="Brand" className="w-full h-full " />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Brand;
