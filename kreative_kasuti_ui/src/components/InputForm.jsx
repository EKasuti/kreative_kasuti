import React from "react";
import PropTypes from "prop-types";

const InputForm = ({ suggestedName }) => {
  return (
    <>
      {/* Name (inside the form) */}
      <div className="border mt-4">
        <input
          type="text"
          placeholder={suggestedName}
          className="w-full p-2 text-white bg-transparent"
          
        />
      </div>
    </>
  );
};

InputForm.propTypes = {
  suggestedName: PropTypes.string.isRequired,
};
export default InputForm;
