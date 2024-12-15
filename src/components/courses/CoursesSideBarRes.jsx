import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { TiTick } from "react-icons/ti";

const CoursesSideBarRes = ({
  setCategory,
  category,
  setLevelFilter,
  setPrice,
  levelFilter,
  price,
}) => {
  const resetFilter = () => {
    setCategory("");
    setLevelFilter("");
    setPrice("");
  };

  return (
    <div className="courses_side_bar_container z-10 bg-white p-[20px]">
      <div className="p-[20px]">
        <h3>Categories</h3>
        <div
          onClick={() => setCategory(category === "Coaching" ? "" : "Coaching")}
          className="category_box"
        >
          <div
            className={`check_box ${
              category === "Coaching" ? "check_border" : ""
            } cursor-pointer`}
          >
            {category === "Coaching" && <TiTick />}
          </div>
          <div className="catagories_category">Coaching</div>
        </div>
        <div
          onClick={() =>
            setCategory(category === "Career Coaching" ? "" : "Career Coaching")
          }
          className="category_box"
        >
          <div
            className={`check_box ${
              category === "Career Coaching" ? "check_border" : ""
            } cursor-pointer`}
          >
            {category === "Career Coaching" && <TiTick />}
          </div>
          <div className="catagories_category">Career Coaching</div>
        </div>
        <div
          onClick={() => setCategory(category === "Dieting" ? "" : "Dieting")}
          className="category_box"
        >
          <div
            className={`check_box ${
              category === "Dieting" ? "check_border" : ""
            } cursor-pointer`}
          >
            {category === "Dieting" && <TiTick />}
          </div>
          <div className="catagories_category">Dieting</div>
        </div>
        <div
          onClick={() => setCategory(category === "Heathy" ? "" : "Heathy")}
          className="category_box"
        >
          <div
            className={`check_box ${
              category === "Heathy" ? "check_border" : ""
            } cursor-pointer`}
          >
            {category === "Heathy" && <TiTick />}
          </div>
          <div className="catagories_category">Heathy</div>
        </div>
      </div>
      <div className="p-[20px]">
        <h3>Levels</h3>
        <div
          onClick={() =>
            setLevelFilter(levelFilter === "All levels" ? "" : "All levels")
          }
          className="category_box"
        >
          <div
            className={`check_box ${
              levelFilter === "All levels" ? "check_border" : ""
            } cursor-pointer`}
          >
            {levelFilter === "All levels" && <TiTick />}
          </div>
          <div className="catagories_category">All levels</div>
        </div>
        <div
          onClick={() =>
            setLevelFilter(levelFilter === "Beginner" ? "" : "Beginner")
          }
          className="category_box"
        >
          <div
            className={`check_box ${
              levelFilter === "Beginner" ? "check_border" : ""
            } cursor-pointer`}
          >
            {levelFilter === "Beginner" && <TiTick />}
          </div>
          <div className="catagories_category">Beginner</div>
        </div>
        <div
          onClick={() =>
            setLevelFilter(levelFilter === "Intermediate" ? "" : "Intermediate")
          }
          className="category_box"
        >
          <div
            className={`check_box ${
              levelFilter === "Intermediate" ? "check_border" : ""
            } cursor-pointer`}
          >
            {levelFilter === "Intermediate" && <TiTick />}
          </div>
          <div className="catagories_category">Intermediate</div>
        </div>
        <div
          onClick={() =>
            setLevelFilter(levelFilter === "Expert" ? "" : "Expert")
          }
          className="category_box"
        >
          <div
            className={`check_box ${
              levelFilter === "Expert" ? "check_border" : ""
            } cursor-pointer`}
          >
            {levelFilter === "Expert" && <TiTick />}
          </div>
          <div className="catagories_category">Expert</div>
        </div>
      </div>
      <div className="p-[20px]">
        <h3>Price</h3>
        <div
          onClick={() => setPrice(price === "Free" ? "" : "Free")}
          className="category_box"
        >
          <div
            className={`check_box ${
              price === "Free" ? "check_border" : ""
            } cursor-pointer`}
          >
            {price === "Free" && <TiTick />}
          </div>
          <div className="catagories_category">Free</div>
        </div>
        <div
          onClick={() => setPrice(price === "Paid" ? "" : "Paid")}
          className="category_box"
        >
          <div
            className={`check_box ${
              price === "Paid" ? "check_border" : ""
            } cursor-pointer`}
          >
            {price === "Paid" && <TiTick />}
          </div>
          <div className="catagories_category">Paid</div>
        </div>
      </div>
      <div onClick={resetFilter} className="!bg-transparent">
        <button className="reset_btn">
          <span>
            <GrPowerReset size={20} />
          </span>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CoursesSideBarRes;
