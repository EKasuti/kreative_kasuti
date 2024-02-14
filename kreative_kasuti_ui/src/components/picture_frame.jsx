import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaTimes } from "react-icons/fa";

const PictureFrame = ({
  imageUrl,
  altText,
  title,
  category,
  description,
  artist,
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className={`relative group ${isOverlayVisible ? "z-50" : ""}`}>
      {/* Picture Frame */}
      <div className="flex items-center justify-center">
        <div className="bg-picture-frame p-6 w-80 h-150 relative">
          <div className="bg-primary-text-color p-4 group-hover:filter group-hover:blur-[2px]">
            <img
              src={imageUrl}
              alt={altText}
              className="block mx-auto max-w-full max-h-full cursor-pointer"
              onClick={toggleOverlay}
            />
          </div>
        </div>
      </div>

      {/* Frame title and category */}
      <div className="group-hover:opacity-100 opacity-0 absolute bottom-0 right-0 p-4 text-primary-text-color pr-12 pb-14 transition-opacity duration-300">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-right">{category}</div>
      </div>

      {/* Icons */}
      <div className="pt-12 pl-12 top-0 left-0 absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <div
          className="border border-rounded border-primary-text-color rounded-full p-2 cursor-pointer"
          onClick={toggleOverlay}
        >
          <FaSearch className="text-primary-text-color" />
        </div>
      </div>

      {/* Overlay */}
      {isOverlayVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-primary-black bg-opacity-75">
          <div className="flex relative max-w-[800px] max-h-[600px]">
            {/* Image (on the left) */}
            <div className="max-w-[50%] max-h-full overflow-hidden">
              <img
                src={imageUrl}
                alt={altText}
                className="block mx-auto max-w-full max-h-full"
              />
            </div>

            {/* Text (on the right) */}
            <div className="bg-primary-text-color p-4 w-80 max-w-[300px] relative">
              {/* Close icon */}
              <div
                className="absolute top-0 right-0 pr-2 pt-2 cursor-pointer"
                onClick={toggleOverlay}
              >
                <FaTimes className="text-primary-black" />
              </div>

              <div className="mt-4 text-primary-black">
                <div className="text-xl font-bold">{title}</div>
                {artist && <div className="text-sm">{artist}</div>}
                {description && <div className="mt-2">{description}</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PictureFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  artist: PropTypes.string,
};

export default PictureFrame;
