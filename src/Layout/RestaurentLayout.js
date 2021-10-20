import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { BiBookmarkPlus } from "react-icons/bi";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";

// components
import RestaurentNavbar from "../components/Navbar/RestaurentNavbar";
import ImageGrid from "../components/Restuarent/imageGrid";
import InfoButtons from "../components/Restuarent/InfoButtons";
import Restaurentinfo from "../components/Restuarent/Restaurentinfo";
import TabContainer from "../components/Restuarent/TabContainer";

const RestaurentLayout = (props) => {
  return (
    <>
      <RestaurentNavbar />
      <div className="container mx-auto px-4 lg:px-20">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/5/32465/7c9aed52ae0cda628a2b993c583849d8_featured_v2.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/5/32465/7c9aed52ae0cda628a2b993c583849d8_featured_v2.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/5/32465/7c9aed52ae0cda628a2b993c583849d8_featured_v2.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/5/32465/7c9aed52ae0cda628a2b993c583849d8_featured_v2.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/5/32465/7c9aed52ae0cda628a2b993c583849d8_featured_v2.jpg",
          ]}
        />
        <Restaurentinfo
          name="Baskin Robins"
          restaurentRating="3.5"
          deliveryRating="3.2"
          cuisine="Ice Cream, Desserts, Shake"
          address="Matunga East, Mumbai"
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
};

export default RestaurentLayout;
