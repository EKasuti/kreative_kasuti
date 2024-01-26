import React from "react";
import PictureFrame from "../components/picture_frame";

// Image imports
import furaha from "../assets/images/furaha.jpg";
import darkWall from "../assets/images/dark_wall.png";
import charcoalArt from "../assets/images/charcoal.jpg";

function GalleryPage() {
  return (
    <>
      <div className=" pl-20 ">
        <div className="text-white p-4 text-xl">GalleryPage</div>
        {/* Categories of art: Portraits, Graphite, Charcoal, Color Pencil, Digital */}
        <div className="flex flex-row justify-center">
          {[
            "  All  ",
            "Portraits",
            "Graphite",
            "Charcoal",
            "Color Pencil",
            "Digital",
          ].map((category) => (
            <div
              key={category}
              className="flex flex-row items-center text-white m-1"
            >
              <span className="">--</span>
              <div className="border-l-2 pl-1 h-4"></div>
              <div className="border pl-4 pr-4">{category}</div>
            </div>
          ))}
        </div>

        {/* Have a frame for each photo, a white window mat and the portrait in the center */}
      </div>
      <div
        className="m-8 bg-gallery-image h-screen flex justify-between pt-20"
        style={{
          backgroundImage: `url(${darkWall})`,
          backgroundSize: "cover",
        }}
      >
        {/* Left Portrait Frames [2] */}
        <div className="pl-40 space-y-4">
        <PictureFrame imageUrl={charcoalArt} altText="first-left" frameType="Landscape"/>
        <PictureFrame imageUrl={charcoalArt} altText="first-left" frameType="Landscape"/>
        </div>
        {/* Center Portrait Frame [1] */}
        <div className="pt-10">
          <PictureFrame imageUrl={furaha} altText="middle_image" frameType="Portrait"  />
        </div>

         {/* Right Portrait Frames [2] */}
         <div className="pr-40 space-y-4">
        <PictureFrame imageUrl={charcoalArt} altText="first-left" frameType="Landscape"/>
        <PictureFrame imageUrl={charcoalArt} altText="first-left" frameType="Landscape"/>
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
