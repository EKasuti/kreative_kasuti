import React, { useState } from "react";
import PictureFrame from "../components/picture_frame";
import darkWall from "../assets/images/dark_wall.png";
import { portfolioData } from "../data/PortfolioData";

function GalleryPage() {
  // Gets the data from portfolioData - a way to destructure it
  const { myPortfolioData, artCategory } = portfolioData;
  // State variable for the current category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter frames based on the category
  const filteredFrames =
    selectedCategory === "All"
      ? myPortfolioData
      : myPortfolioData.filter((art) => art.category === selectedCategory);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
        {/* Gallery categories */}
        <div className="flex flex-row justify-center">
          {artCategory.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.category)}
              className={`flex flex-row items-center text-white m-1 cursor-pointer ${
                selectedCategory === category.category
                  ? "font-bold text-yellow-500"
                  : ""
              }`}
            >
              <span className="">--</span>
              <div
                className={`border-l-2 pl-1 h-4 ${
                  selectedCategory === category.category
                    ? "border-yellow-500"
                    : "border-white"
                }`}
              ></div>
              <div
                className={`border pl-4 pr-4 ${
                  selectedCategory === category.category
                    ? "border-yellow-500"
                    : "border-white"
                }`}
              >
                {category.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The framed portfolio */}
      <div
        className="m-8 bg-gallery-image max-h-screen flex justify-center items-center pt-20"
        style={{ backgroundImage: `url(${darkWall})`, backgroundSize: "cover" }}
      >
        {/* Two frames on the left */}
        <div className="flex justify-between">
          <div className="flex flex-col mr-8">
            {filteredFrames.slice(0, 2).map((art) => (
              <div key={art.id} className="mb-4">
                <PictureFrame
                  imageUrl={art.imageUrl}
                  altText={art.altText}
                  frameType={art.frameType}
                  title={art.title}
                  category={art.category}
                  artist={art.author}
                  description={art.description}
                />
              </div>
            ))}
          </div>

          {/* One frame in the middle */}
          <div className="flex flex-col mt-6">
            {filteredFrames.slice(2, 3).map((art) => (
              <div key={art.id} className="">
                <PictureFrame
                  imageUrl={art.imageUrl}
                  altText={art.altText}
                  frameType={art.frameType}
                  title={art.title}
                  artist={art.author}
                  category={art.category}
                />
              </div>
            ))}
          </div>

          {/* The other two frames on the right */}
          <div className="flex flex-col ml-8">
            {filteredFrames.slice(3, 5).map((art) => (
              <div key={art.id} className="mb-4">
                <PictureFrame
                  imageUrl={art.imageUrl}
                  altText={art.altText}
                  frameType={art.frameType}
                  title={art.title}
                  artist={art.author}
                  category={art.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
