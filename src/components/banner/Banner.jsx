import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ title }) => {
  return (
    <div className="banner_container">
      <div className="container">
        <h2>{title}</h2>
        <div className="banner_item">
          <Link to={"/"}>Home</Link>
          <span>
            <FaAngleRight />
          </span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
