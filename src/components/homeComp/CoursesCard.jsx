import React from "react";
import { FaRegUser, FaSignal } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const CoursesCard = () => {
  const { products,selectedCategory } = useSelector((state) => state.products);
  const filterProduct =
  selectedCategory === "All"
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-wrap gap-[20px] px-[50px] py-[15px]">
      {filterProduct.map((item, i) => (
        <div className="w-[410px] border rounded-lg ">
          <div className="filter_img w-[410px] h-[310px] relative">
          <img className=" cursor-pointer" src={item.img} alt="" />
          <span className='add_button_filter'><MdAdd/></span>
          </div>
          <div className="product_cartd_bottom px-[20px] py-[15px] flex flex-col gap-[15px]">
            <div className="flex  items-center justify-between">
              <div
                className="flex  items-center justify-between gap-[10px]
              "
              >
                <FaRegUser />
                {item.students} Students
              </div>
              <div className="flex items-center justify-center gap-1"><LuFileSpreadsheet /> {item.lessons} Lessons</div>
              <div className="flex items-center justify-center gap-2"><FaSignal /> {item.levels}</div>
            </div>
            <h4 className="text-[#3D3C3C] text-[18px]">{item.title}</h4>
            <p>{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-2">
                <img className="cursor-pointer w-[45px] h-[45px] rounded-full" src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/learn-press-profile/1/13ca851b2d84d922db74349bea6858ce.jpeg" alt="" />
                <h6 className="!font-semibold">Michael</h6>
              </div>
              <div className="!text-[28px] !font-semibold">
                {item.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;