import React from "react";
import PropTypes from "prop-types";

// Portrait
const PictureFrame = ({ imageUrl, altText }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-800 p-6 w-80 h-150">
        <div className="bg-white p-4">
          <img
            src={imageUrl}
            alt={altText}
            className="block mx-auto max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

PictureFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default PictureFrame;
