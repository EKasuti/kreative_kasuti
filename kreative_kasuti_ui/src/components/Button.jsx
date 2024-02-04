import React from "react";

const PrimaryButton = ({
  text,
  onClick,
  color,
  backgroundColor,
  borderRadius,
  width,
}) => {
  const buttonStyle = {
    color: color || "#000000",
    backgroundColor: backgroundColor || "yellow-500",
    borderRadius: borderRadius || "10px",
    padding: "10px 8px",
    cursor: "pointer",
    width: width || "auto", 
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
