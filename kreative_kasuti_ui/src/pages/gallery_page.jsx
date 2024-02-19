import React, { useState } from "react";
import PictureFrame from "../components/PictureFrame";
import darkWall from "../assets/images/dark_wall.png";
import { portfolioData } from "../data/PortfolioData";

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter data based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? portfolioData.detailedPortfolioData
      : portfolioData.detailedPortfolioData.filter(
          (category) => category.category === selectedCategory
        );

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
        {/* Categories at the top */}
        <div className="flex flex-row justify-center">
          {portfolioData.portfolioCategory.map((category) => (
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

        {/* Body based on the categories */}
        {filteredData.map((category) => (
          <div key={category.id}>
            <h2>{category.category}</h2>

            {/* ART WORK CATEGORY */}
            {category.category === "Art Work" && (
              <div
                className="m-8 bg-gallery-image max-h-screen flex justify-center items-center pt-20"
                style={{
                  backgroundImage: `url(${darkWall})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex">
                  {/* Two frames on the left */}
                  <div className="flex flex-col mr-8">
                    {category.artWorkData.slice(0, 2).map((art) => (
                      <div key={art.id} className="mb-4">
                        <PictureFrame
                          imageUrl={art.imageUrl}
                          altText={art.altText}
                          frameType={art.frameType}
                          title={art.title}
                          category={art.label}
                          artist={art.author}
                          description={art.description}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Middle frame */}
                  <div className="flex flex-col mt-8">
                    {category.artWorkData.slice(2, 3).map((art) => (
                      <div key={art.id}>
                        <PictureFrame
                          imageUrl={art.imageUrl}
                          altText={art.altText}
                          frameType={art.frameType}
                          title={art.title}
                          category={art.label}
                          artist={art.author}
                          description={art.description}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Two frames on the right */}
                  <div className="flex flex-col ml-8">
                    {category.artWorkData.slice(3, 5).map((art) => (
                      <div key={art.id} className="mb-4">
                        <PictureFrame
                          imageUrl={art.imageUrl}
                          altText={art.altText}
                          frameType={art.frameType}
                          title={art.title}
                          category={art.label}
                          artist={art.author}
                          description={art.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WEB DEV CATEGORY */}
            {category.category === "Web Dev" && (
              <div className="text-primary-text-color mt-6">
                {/* Section Title */}
                <div className="font-bold text-xl mb-4">Web section</div>
                <div className="flex justify-between">
                  {category.webDevData.map((web) => (
                    <div
                      key={web.id}
                      className="border bg-primary-text-color h-200 w-200"
                    >
                      <img
                        src={web.imageUrl}
                        alt={web.altText}
                        title={web.title}
                        label={web.label}
                        className="w-100 h-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3D MODELS CATEGORY */}
            {category.category === "3d models" && (
              <div className="text-primary-text-color min-h-screen mt-6">
                {/* Section Title */}
                <div className="font-bold text-xl mb-4">3D section</div>
                <div className="grid grid-cols-3 gap-4 ">
                  {category.mayaModelsData.map((maya) => (
                    <div key={maya.id} className="">
                      <img
                        src={maya.imageUrl}
                        alt={maya.altText}
                        title={maya.title}
                        label={maya.label}
                        className="w-100 h-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryPage;
