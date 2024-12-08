import React from "react";

const MotivationComp = () => {
  return (
    <div className="flex gap-[30px] mt-[120px]">
      <div className=" w-[25%] flex items-center justify-center gap-[30px] flex-col h-[110vh]">
        <img
          src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-iconbox-1.jpg"
          alt=""
        />
      </div>
     <div className=" w-[25%] flex items-center justify-center gap-[30px] flex-col h-[110vh]">
        <div className="flex items-center justify-center gap-[30px] flex-col bg-[#F8F9FA] w-[100%] h-[50%]  py-[60px] px-[30px]">
          <h3 className="font-semibold text-[#3d3c3c] text-center text-[18px]">Weight Loss Program</h3>
          <p className="text-[#636363] text-center text-[18px] font-semibold">
            There are many variations passages of Lorem Ipsum available, but
            majority have suffered
          </p>
        </div>
        <div className="flex items-center justify-center gap-[30px] flex-col bg-[#F8F9FA] w-[100%] h-[50%] py-[60px] px-[30px]">
          <h3 className="font-semibold text-[#3d3c3c] text-[18px] text-center">Balance Body & Mind</h3>  
          <p className="text-[#636363] text-center text-[18px] font-semibold">
            There are many variations passages of Lorem Ipsum available, but
            majority have suffered
          </p>
        </div>
      </div>
      <div className=" w-[25%] flex items-center justify-center gap-[30px] flex-col h-[110vh]">
        <img
          src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-iconbox-2.jpg"
          alt=""
        />
      </div>
      <div className=" w-[25%] flex items-center justify-center gap-[30px] flex-col h-[110vh]">
        <div className="flex items-center justify-center gap-[30px] flex-col bg-[#F8F9FA] w-[100%] h-[50%]  py-[60px] px-[30px]">
          <h3 className="font-semibold text-[#3d3c3c] text-center text-[18px]">Personalized Nutrition</h3>
          <p className="text-[#636363] text-center text-[18px] font-semibold">
            There are many variations passages of Lorem Ipsum available, but
            majority have suffered
          </p>
        </div>
        <div className="flex items-center justify-center gap-[30px] flex-col bg-[#F8F9FA] w-[100%] h-[50%]  py-[60px] px-[30px]">
          <h3 className="font-semibold text-[#3d3c3c] text-[18px] text-center">Motivation Program</h3>
          <p className="text-[#636363] text-center text-[18px] font-semibold">
            There are many variations passages of Lorem Ipsum available, but
            majority have suffered
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotivationComp;
