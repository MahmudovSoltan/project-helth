import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ setIndex, index, totalPge }) => {
  const nextPage = () => {
    if (index < totalPge.length) {
      setIndex(index + 1);
    }
  };
  const previosPage = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      {totalPge.length == 0 ? (
        <div className="flex items-start justify-center  text-[40px] h-[100vh]">
          No courses were found to match your selection.
        </div>
      ) : (
        <div className="px-[50px] paginatiom_container">
          <button
            onClick={previosPage}
            className={`pagination_btn ${index == 1 ? "!hidden" : ""} `}
          >
            <FaAngleLeft />
          </button>

          {totalPge.map((item, i) => (
            <button
              onClick={() => setIndex(i + 1)}
              className={`pagination_btn ${
                index == i + 1 ? "pagination_btn_active" : ""
              } `}
            >
              {item + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            className={`pagination_btn ${
              index == totalPge.length || totalPge.length == 1 ? "!hidden" : ""
            } `}
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
