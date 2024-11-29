import React from "react";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const CoursesCard = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="flex flex-wrap gap-[20px] px-[50px] py-[15px]">
      {products.map((item, i) => (
        <div className="w-[410px] border rounded-lg ">
          <img className="cursor-pointer" src={item.img} alt="" />
          <div className="px-[20px] py-[15px] flex flex-col gap-[15px]">
            <div className="flex  items-center justify-between">
              <div
                className="flex  items-center justify-between gap-[10px]
              "
              >
                <FaRegUser />
                {item.students} Students
              </div>
              <div>{item.lessons} Lessons</div>
              <div>{item.levels}</div>
            </div>
            <h4 className="text-[#3D3C3C] text-[18px]">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;
