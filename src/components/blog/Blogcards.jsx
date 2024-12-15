import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdAdd } from "react-icons/md";


const Blogcards = ({blogs}) => {

  return (
    <div>
      <div className="container">
        <div className="flex flex-wrap gap-[35px]">
          {blogs.map((item, index) => (
            <div className="articlies_card border rounded-lg !w-[30%] max-[993px]:!w-[45%] max-[993px]:!w-full">
              <div className="articlies_card_image">
                <img src={item.img} alt="" />
                <span className="add_button_filter2">
                  <MdAdd />
                </span>
              </div>
              <div className="p-[20px]">
                <div className="flex items-center justify-between text-[#636363]">
                  <div>{item.categories}</div>
                  <div className="flex items-center gap-2">
                    <FaRegUser /> {item.author}
                  </div>
                </div>
                <h4 className="text-[18px] text-[#3D3C3C] my-[10px] font-semibold leading-[1.4em] transition-all hover:text-[#fcab14] cursor-pointer blog_title ">
                  {item.title.substring(0, 50) + "..."}
                </h4>
                <p className="text-[14px] text-[#636363] font-normal blog_text">
                  {item.dec.substring(0, 200) + "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogcards;
