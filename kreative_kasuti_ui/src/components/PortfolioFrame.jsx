import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function PortfolioFrame({
  imageUrl,
  altText,
  briefDescription,
  title,
  skills,
  software,
  fullDescription,
  externalSite,
  externalLink,
}) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleLinkClick = () => {
    setOverlayVisible(true);
  };

  // const handleExternalLink = () => {
  //   window.location.href = externalLink;
  // };

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
          {briefDescription}
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
        <div className="fixed top-0 left-2 right-2 sm:left-10 sm:right-10  h-full  bg-primary-text-color bg-opacity-5 flex justify-center items-center z-50 ">
          <div className="bg-primary-black p-4 rounded-lg sm:flex justify-center max-h-full overflow-y-auto border border-l-0 border-r-0 ">
            {/* Image Zoomed */}
            <div className="sm:hidden relative">
              <div className="absolute right-0 top-0">
                <FaTimes
                  className="text-primary-text-color"
                  onClick={handleCloseOverlay}
                />
              </div>
            </div>

            {/* Title - Small Screen */}
            <div className="sm:hidden font-bold text-l sm:text-xl text-primary-button">
              {title}
            </div>

            <div className="sm:w-1/2 sm:pr-4 pt-2 sm:pt-0 pb-4 sm:pb-0">
              <img src={imageUrl} alt={altText} className="rounded" />
            </div>

            {/* Items on the right */}
            <div className="sm:w-1/2 text-primary-text-color">
              {/* Close Icon */}
              <div className="hidden sm:block absolute right-4">
                <FaTimes
                  className="text-primary-text-color"
                  onClick={handleCloseOverlay}
                />
              </div>

              {/* Body */}
              <div className="mt-2">
                {/* Title */}
                <div className="hidden sm:block font-bold text-l sm:text-xl">
                  {title}
                </div>

                {/* Skills */}
                <div className="flex item-start mt-2">
                  <div className="font-semibold text-l sm:text-xl text-primary-button">
                    Skills:
                  </div>
                  <div className="pl-1 text-l ">{skills}</div>
                </div>

                {/* Software */}
                <div className="flex items-start">
                  <div className="font-semibold text-l sm:text-xl text-primary-button">
                    Software:
                  </div>
                  <div className="pl-1 text-l">{software}</div>
                </div>

                {/* Description */}
                <div className="mt-4">
                  <p className="text-l sm:text-l">
                    {fullDescription.split("\n").map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                {/* External Button link*/}
                {/* <div
                  className="inline-block px-6 rounded-lg bg-primary-button border border-primary-button text-l mt-4 cursor-pointer"
                  onClick={handleExternalLink}
                >
                  View {externalSite}
                </div> */}

                {/* Close Button */}
                <div
                  className="inline-block px-6 rounded-lg bg-primary-button border border-primary-button text-primary-black text-l mt-4 cursor-pointer"
                  onClick={handleCloseOverlay}
                >
                  Close
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioFrame;
