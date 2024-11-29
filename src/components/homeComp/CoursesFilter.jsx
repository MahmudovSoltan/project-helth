import React from "react";
const CoursesFilter = () => {
  
  const catagory = [
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

  return (
    <div className="cousrses_filter pt-[100px]">
      <h2 className="flex items-center justify-center text-[40px] text-[#333333] font-[700] mb-[50px]">Courses</h2>

      <div className=" flex  items-center justify-center gap-[30px] mb-[30px]">
        {catagory.map((item,index)=>(
                 <div className="category_title " key={index}>
                 {item.category}
             </div>
            ))}
      </div>
    </div>
  );
};

export default CoursesFilter;
