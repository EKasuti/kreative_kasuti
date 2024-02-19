import React from "react";

function PortfolioFrame({ imageUrl, altText, title, label }) {
  return (
    <>
      <div>
        <img src={imageUrl} alt={altText} className="" />
      </div>
    </>
  );
}

export default PortfolioFrame;
