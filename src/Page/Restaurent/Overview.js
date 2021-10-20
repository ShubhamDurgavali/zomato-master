import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from "../../components/Restuarent/MenuCollection";
import MenuSimilarRestaurentcard from "../../components/Restuarent/MenuSimilarRestaurentcard";
import { NextArrow, PrevArrow } from "../../components/carouselArrow";
import ReviewCard from "../../components/Restuarent/Reviews/reviewCard";
import Mapview from "../../components/Restuarent/Mapview";


const Overview = (props) => {
  const { id } = useParams();
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurent/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image="https://b.zmtcdn.com/data/menus/465/32465/d5732924b028abbf94fdfd24c0b957de.jpg"
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Ice Cream
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Desserts
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Shakes
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹200 for two people (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restuarents</h4>
            <Slider {...settings}>
              <MenuSimilarRestaurentcard
                image="https://b.zmtcdn.com/data/pictures/chains/3/36163/ea1a778453267459ff6a29a11d6b76af_featured_v2.jpg?output-format=webp"
                title="Apsara Ice Creams"
              />
              <MenuSimilarRestaurentcard
                image="https://b.zmtcdn.com/data/pictures/chains/3/36163/ea1a778453267459ff6a29a11d6b76af_featured_v2.jpg?output-format=webp"
                title="Apsara Ice Creams"
              />
              <MenuSimilarRestaurentcard
                image="https://b.zmtcdn.com/data/pictures/chains/3/36163/ea1a778453267459ff6a29a11d6b76af_featured_v2.jpg?output-format=webp"
                title="Apsara Ice Creams"
              />
              <MenuSimilarRestaurentcard
                image="https://b.zmtcdn.com/data/pictures/chains/3/36163/ea1a778453267459ff6a29a11d6b76af_featured_v2.jpg?output-format=webp"
                title="Apsara Ice Creams"
              />
              <MenuSimilarRestaurentcard
                image="https://b.zmtcdn.com/data/pictures/chains/3/36163/ea1a778453267459ff6a29a11d6b76af_featured_v2.jpg?output-format=webp"
                title="Apsara Ice Creams"
              />
            </Slider>
          </div>
          <div className="text-lg font-medium">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
          <Mapview title="Baskin Robbins" phno="+919819775328" mapLocation={[19.028683469369273, 72.8552670867425]} address="Shop 11/461, Durlabh Nivas, Bahudaji Road, Matunga East, Mumbai"/>
          </div>
          <div className="my-4 flex flex-col gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl flex flex-col gap-4"
        >
          <Mapview title="Baskin Robbins" phno="+919819775328" mapLocation={[19.028683469369273, 72.8552670867425]} address="Shop 11/461, Durlabh Nivas, Bahudaji Road, Matunga East, Mumbai"/>
        </aside>
      </div>
    </>
  );
};

export default Overview;
