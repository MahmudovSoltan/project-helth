import React from "react";
import { FaRegUser, FaSignal } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/slices/basketSlice";

const CoursesCard = ({filterProduct}) => {

  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.cards);

console.log(basket);

  return (
    <div className="flex responsive_card_container flex-wrap gap-[20px] py-[15px]">
      {filterProduct.map((item, i) => (
        <div key={i} className="w-[32%] max-[850px]:!w-full border rounded-lg responsive_card ">
          <div className="filter_img w-[100%]  relative">
          <img className=" cursor-pointer" src={item.img} alt="" />
          <span className='add_button_filter' onClick={()=>dispatch(addToBasket(item))}><MdAdd/></span>
          </div>
          <div className="product_cartd_bottom px-[20px] py-[15px] flex flex-col gap-[15px]">
            <div className="flex  items-center justify-between">
              <div
                className="flex  items-center justify-between gap-[10px]
              "
              >
                {item.students} Students
              </div>
              <div className="flex items-center justify-center gap-1">{item.lessons} Lessons</div>
              <div className="flex items-center justify-center gap-2"> {item.levels}</div>
            </div>
            <h4 className="text-[#3D3C3C] text-[18px]">{item.title}</h4>
            <p>{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-2">
                <img className="cursor-pointer w-[45px] h-[45px] rounded-full" src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/learn-press-profile/1/13ca851b2d84d922db74349bea6858ce.jpeg" alt="" />
                <h6 className="!font-semibold">Michael</h6>
              </div>
                {
                  item.price ==0? <div className="!text-[28px] !font-semibold">
                  Free
                </div>:  <div className="!text-[28px] !font-semibold">
                ${item.price}.00
              </div>
                }
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;
