import React from "react";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <div
      className="inline-block px-6 py-2 rounded-2xl bg-primary-button text-primary-black  text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-primary-button"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default PrimaryButton;
