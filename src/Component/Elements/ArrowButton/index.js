import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const ArrowButton = ({ ArrowBtntitle }) => {
  return (
    <div className="ArrowBtn mx-2">
      <button type="button">
        <span className="leftArrow">
          <BsArrowLeft />
        </span>
        {ArrowBtntitle}
        <span className="rightArrow">
          <BsArrowRight />
        </span>
      </button>
    </div>
  );
};

export default ArrowButton;
