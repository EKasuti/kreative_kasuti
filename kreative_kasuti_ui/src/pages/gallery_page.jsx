import React, { useState } from "react";
import PictureFrame from "../components/picture_frame";
import darkWall from "../assets/images/dark_wall.png";
import { portfolioData } from "../data/PortfolioData";
import Melovibe from "../assets/images/melovibe.png";

function GalleryPage() {
  // Gets the data from portfolioData - a way to destructure it
  const { detailedPortfolioData, portfolioCategory } = portfolioData;
  // State variable for the current category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered art work data
  const artWorkData =
    selectedCategory === "All"
      ? detailedPortfolioData.flatMap((category) => category.artWorkData)
      : detailedPortfolioData.find(
          (category) => category.category === selectedCategory
        )?.artWorkData || [];

  // Filtered web dev data
  const webDevData =
    selectedCategory === "All"
      ? detailedPortfolioData.flatMap((category) => category.artWorkData)
      : detailedPortfolioData.find(
          (category) => category.category === selectedCategory
        )?.webDevData || [];

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
        {/* Gallery categories */}
        <div className="flex flex-row justify-center">
          {portfolioCategory.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.category)}
              className={`flex flex-row items-center text-primary-text-color m-1 cursor-pointer ${
                selectedCategory === category.category
                  ? "font-bold text-primary-button"
                  : ""
              }`}
            >
              <span className="">--</span>
              <div
                className={`border-l-2 pl-1 h-4 ${
                  selectedCategory === category.category
                    ? "border-primary-button"
                    : "border-white"
                }`}
              ></div>
              <div
                className={`border pl-4 pr-4 ${
                  selectedCategory === category.category
                    ? "border-primary-button"
                    : "border-white"
                }`}
              >
                {category.category}
              </div>
            </div>
          ))}
        </div>

        {/* PortFolio Section */}
        {(selectedCategory === "All" || selectedCategory === "Art Work") && (
          <div
            className="m-8 bg-gallery-image max-h-screen flex justify-center items-center pt-20"
            style={{
              backgroundImage: `url(${darkWall})`,
              backgroundSize: "cover",
            }}
          >
            {/* ART WORK SECTION */}
            <div>
              {/* Two frames on the left */}
              <div className="flex justify-between">
                <div className="flex flex-col mr-8">
                  {artWorkData.slice(0, 2).map((art) => (
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
                  {artWorkData.slice(2, 3).map((art) => (
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
                  {artWorkData.slice(3, 5).map((art) => (
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
          </div>
        )}

        {/* WEB DEV SECTION */}
        {(selectedCategory === "Web Dev" || selectedCategory === "All") && (
          <div className="text-primary-text-color min-h-screen mt-6">
            {/* Section Title */}
            <div className="font-bold text-xl mb-4">Web section</div>
            <div className="flex justify-between">
              <div className="border bg-primary-text-color h-200 w-200">
                <img src={Melovibe} alt="SecondPage" className="w-100 h-80" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GalleryPage;
