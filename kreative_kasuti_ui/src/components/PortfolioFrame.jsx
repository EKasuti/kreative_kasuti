import React from "react";

function PortfolioFrame({ imageUrl, altText, description }) {
  return (
    <>
      <div className="bg-medium-gray rounded p-5">
        {/* Image */}
        <div className="">
          <img src={imageUrl} alt={altText} className="rounded" />
        </div>

        {/* Brief Description */}
        <div className="text-primary-black  text-sm sm:text-l mt-4">
          {description}
        </div>

        {/* Button */}
        {/* <div className="mt-3">
          <PrimaryButton text="View" />
        </div> */}

        <div className="inline-block px-6  rounded-lg text-primary-black border text-l mt-4">
          View
        </div>
      </div>
    </>
  );
}

export default PortfolioFrame;
