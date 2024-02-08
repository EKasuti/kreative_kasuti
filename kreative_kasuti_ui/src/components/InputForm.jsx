import React from "react";
import PropTypes from "prop-types";

const InputForm = ({ suggestedName, height }) => {
  return (
    <>
      {/* Name (inside the form) */}
      <div className={`border mt-4 `}>
        <input
          type="text"
          placeholder={suggestedName}
          className={`w-full p-2 text-white bg-transparent ${height ? `h-${height}` : ""}`}
        />
      </div>
    </>
  );
};

InputForm.propTypes = {
  suggestedName: PropTypes.string.isRequired,
  height: PropTypes.string,
};
export default InputForm;
