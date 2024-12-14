import React from "react";

const FooterBottom = () => {
  return (
    <div>
      <div className="footer_line"></div>
      <div className="container flex items-center justify-between max-[768px]:flex-col max-[768px]:gap-3 max-[768px]:pt-[30px] !p-[20px]">
        <p>Copyright WP Theme by <span className="text-[#efa213]">Thimpress.</span>  Power by WordPress</p>
        <div className="flex items-center gap-2"> 
             <span>
                <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2019/10/pay-1.jpg" alt="" />
             </span>
             <span>
                <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2019/10/pay-2.jpg" alt="" />
             </span>
             <span>
                <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2019/10/pay-3.jpg" alt="" />
             </span>
             <span>
                <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2019/10/pay-4.jpg" alt="" />
             </span>

        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
