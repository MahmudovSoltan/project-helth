import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const ArticelComp = () => {
  const { blogs } = useSelector((state) => state.blog);
  let [count, setCount] = useState(4);
  const [less, setLess] = useState(true);
  const blog = blogs.slice(0, count);
  const moreCard = () => {
    if ( count<24 ) {
      setCount((count += 4)); 
    }
   else if (count === 24) {
      setLess(false)
    }
  };
  const lessBtn = () => {
    setCount((count = 4));
    setLess(true);
  };
  console.log(count);
  console.log(blogs.length);
  
  
  return (
    <div className="container">
      <h2 className="flex items-center justify-center text-[40px] text-[#3d3c3c] my-[80px] font-semibold ">
        Popular Articles
      </h2>
      <div className="flex flex-wrap gap-[35px]">
        {blog.map((item, index) => (
          <div className="articlies_card border rounded-lg">
            <div className="articlies_card_image">
              <img src={item.img} alt="" />
              <span className='add_button_filter2'><MdAdd/></span>
            </div>
            <div className="p-[20px]">
              <div className="flex items-center justify-between text-[#636363]">
                <div>{item.categories}</div>
                <div className="flex items-center gap-2">
                  <FaRegUser /> {item.author}
                </div>
              </div>
              <h4 className="text-[18px] text-[#3D3C3C] my-[10px] font-semibold leading-[1.4em] transition-all hover:text-[#fcab14] cursor-pointer">
                {item.title.substring(0, 50) + "..."}
              </h4>
              <p className="text-[14px] text-[#636363] font-normal">
                {item.dec.substring(0, 200) + "..."}
              </p>
            </div>
          </div>
        ))}

        <div className="flex cursor-pointer  w-full items-center justify-center">
        {count !== blogs.length-1 ? (
          <div className='btn flex items-center justify-center transition-all hover:bg-[#fcab14]' onClick={moreCard}> <RiLeafLine size={25} />View More</div>
        ) : (
          <div className='btn flex items-center justify-center transition-all hover:bg-[#fcab14]' onClick={lessBtn}> <RiLeafLine size={25} /> LESS</div>
        )}
        </div>
      
      </div>
    </div>
  );
};

export default ArticelComp;
