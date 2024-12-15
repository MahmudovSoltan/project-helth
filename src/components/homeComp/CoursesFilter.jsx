// CoursesFilter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/slices/productSlice";

const CoursesFilter = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.products);
  const category = [
    {
      category: "Career Coaching",
    },
    {
      category: "Coaching",
    },
    {
      category: "Dieting",
    },
    {
      category: "Heathy",
    },
  ];

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category.category));
  };

  return (
    <div className="cousrses_filter pt-[100px]">
      <h2 className="flex items-center justify-center text-[40px] text-[#333333] font-[700] mb-[50px]">
        Courses
      </h2>

      <div className="flex items-center justify-center gap-[30px] mb-[30px] flex-wrap">
        {category.map((item, index) => (
          <div
            onClick={() => handleCategoryClick(item)}
            className={`category_title ${
              selectedCategory === item.category ? "category_title_active" : ""
            } cursor-pointer`}
            key={index}
          >
            {item.category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesFilter;
