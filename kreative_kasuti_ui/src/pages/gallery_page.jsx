import React, { useState } from "react";
import PictureFrame from "../components/picture_frame";

// Image imports
import darkWall from "../assets/images/dark_wall.png";
import { portfolioData } from "../data/PortfolioData";

function GalleryPage() {
  const { myPortfolioData, artCategory } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter frames based on selected category
  const filteredFrames =
    selectedCategory === "All"
      ? myPortfolioData
      : myPortfolioData.filter((art) => art.category === selectedCategory);

  return (
    <>
      <div className="pl-20">
        <div className="text-white p-4 text-xl">GalleryPage</div>
        {/* Categories of art: Portraits, Graphite, Charcoal, Color Pencil, Digital */}
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
      <div
        className="m-8 bg-gallery-image h-screen flex justify-between pt-20"
        style={{ backgroundImage: `url(${darkWall})`, backgroundSize: "cover" }}
      >
        {/* Map the frames from portfolio data */}
        <div className="pl-40 flex justify-between">
           {/* Two frames on the left */}
          <div className="flex flex-col mr-8">
            {filteredFrames.slice(0, 2).map((art) => (
              <div key={art.id} className="mb-4">
                <PictureFrame
                  imageUrl={art.imageUrl}
                  altText={art.altText}
                  frameType={art.frameType}
                  title = {art.title}
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
                  title = {art.title}
                  artist={art.author}
                  category={art.category}
                />
              </div>
            ))}
          </div>

          {/* Two frames on the right */}
          <div className="flex flex-col ml-8">
            {filteredFrames.slice(3, 5).map((art) => (
              <div key={art.id} className="mb-4">
                <PictureFrame
                  imageUrl={art.imageUrl}
                  altText={art.altText}
                  frameType={art.frameType}
                  title = {art.title}
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
