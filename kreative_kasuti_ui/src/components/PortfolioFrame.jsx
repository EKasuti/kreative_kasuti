import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function PortfolioFrame({ imageUrl, altText, description }) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleLinkClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      <div className="border border-primary-text-color border-l-0 border-r-0 rounded p-2 sm:p-4">
        {/* Image */}
        <div className="">
          <img src={imageUrl} alt={altText} className="rounded" />
        </div>

        {/* Brief Description */}
        <div className="text-primary-text-color text-sm sm:text-xl mt-4">
          {description}
        </div>

        {/* Button */}
        <div
          className="inline-block px-6 rounded-lg text-primary-text-color border text-l mt-4 cursor-pointer"
          onClick={handleLinkClick}
        >
          View
        </div>
      </div>

      {/* Overlay */}
      {overlayVisible && (
        <div className="fixed top-0 left-2 right-2 sm:left-10 sm:right-10  h-full  bg-primary-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-primary-text-color p-4 rounded-lg sm:flex justify-center ">
            {/* Image Zoomed */}
            <div className="sm:hidden absolute right-5">
              <FaTimes
                className="text-primary-black"
                onClick={handleCloseOverlay}
              />
            </div>

            <div className="sm:w-1/2 sm:pr-4 pt-6 sm:pt-0 pb-4 sm:pb-0">
              <img src={imageUrl} alt={altText} className="rounded" />
            </div>

            {/* Items on the right */}
            <div className="sm:w-1/2 text-primary-black ">
              {/* Close Icon */}
              <div className="hidden sm:block absolute right-4">
                <FaTimes
                  className="text-primary-black"
                  onClick={handleCloseOverlay}
                />
              </div>

              {/* Description */}
              <div className="mt-4 ">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioFrame;
