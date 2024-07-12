import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="custom-spinner">
        <div className="spinner-circle"></div>
        <span className="spinner-text">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;