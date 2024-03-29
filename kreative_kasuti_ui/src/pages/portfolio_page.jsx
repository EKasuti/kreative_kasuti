import React, { useState } from "react";
import PictureFrame from "../components/PictureFrame";
import darkWall from "../assets/images/dark_wall.png";
import { portfolioData } from "../data/PortfolioData";
import PortfolioFrame from "../components/PortfolioFrame";

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Architecture");

  return (
    <>
      <div className="w-full sm:max-w-screen-xl mx-auto p-4 md:py-10">
        {/* Categories at the top */}
        <div className="flex justify-between sm:justify-center text-sm sm:text-lg overflow-x-auto ">
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
        {portfolioData.detailedPortfolioData.map((category) => (
          <div key={category.id}>
            {selectedCategory === "All" ||
            selectedCategory === category.category ? (
              <>
                <h2>{category.category}</h2>

                {/* ART WORK  */}
                {category.category === "Art" && (
                  <div
                    className="max-h-screen sm:flex justify-center items-center pt-5 sm:pt-20"
                    style={{
                      backgroundImage: `url(${darkWall})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="sm:flex">
                      {/* Two frames on the left */}
                      <div className="flex-col sm:mr-8 hidden sm:block">
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
                      <div className="flex-col ml-8 hidden sm:block">
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

                {/* WEB DEV */}
                {category.category === "Web" && (
                  <div className="text-primary-text-color mt-6 sm:ml-20">
                    {/* Section Title */}
                    <div className="font-bold text-xl mb-4">
                      Web Development
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.webDevData.map((web) => (
                        <div key={web.id}>
                          <PortfolioFrame
                            imageUrl={web.imageUrl}
                            alt={web.altText}
                            title={web.title}
                            briefDescription={web.briefDescription}
                            skills={web.skills}
                            software={web.software}
                            fullDescription={web.fullDescription}
                            externalLink={web.externalLink}
                            externalSite={web.externalSite}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3D MODELS */}
                {category.category === "3d" && (
                  <div className="text-primary-text-color min-h-screen sm:ml-20 ">
                    {/* Section Title */}
                    <div className="font-bold text-xl mb-4 text-pr">3D Modeling</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.mayaModelsData.map((maya) => (
                        <PortfolioFrame
                          imageUrl={maya.imageUrl}
                          alt={maya.altText}
                          title={maya.title}
                          briefDescription={maya.briefDescription}
                          fullDescription={maya.fullDescription}
                          skills={maya.skills}
                          software={maya.software}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* ARCHITECTURE */}
                {category.category === "Architecture" && (
                  <div className="text-primary-text-color min-h-screen sm:ml-20 ">
                    {/* Section Title */}
                    <div className="font-bold text-xl mb-4 text-pr">Architecture</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.architectureData.map((arch) => (
                        <PortfolioFrame
                          imageUrl={arch.imageUrl1}
                          alt={arch.altText1}
                          title={arch.title}
                          briefDescription={arch.briefDescription}
                          fullDescription={arch.fullDescription}
                          skills={arch.skills}
                          software={arch.software}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default PortfolioPage;
