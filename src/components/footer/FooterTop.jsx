import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const FooterTop = () => {
  return (
    <div className=" flex max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center !py-[105px] container justify-between  max-[1024px]:pb-[50px]  max-[1024px]:gap-[30px]  max-[880px]:flex-wrap max-[880px]:">
      <div className="w-[432px] flex max-[768px]:items-center flex-col gap-[30px]  max-[1024px]:w-[270px] max-[880px]:w-[40%]">
        <div className="w-[183px]">
          <img
            src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/logo-white.png"
            alt=""
          />
        </div>
        <p>
          It helps designers plan whererthy the content will sitcont ent to be
          written and approved.
        </p>
        <div className="footer_icons ">
          <div>
           
            <ImFacebook  size={25}/>
          </div>
          <div>
            <FaInstagram  size={25}/>
          </div>
          <div>
            <FaXTwitter size={25} />
          </div>
          <div>
            <FaLinkedinIn  size={25}/>
          </div>
        </div>
      </div>
      <div className="footer_content max-[768px]:items-center  max-[880px]:w-[40%]">
        <h5 className="footer_title">Useful Links</h5>
        <div className="footer_links max-[768px]:text-center max-[768px]:items-center">
          <div className="footer_link">About Us</div>
          <div className="footer_link">Contact</div>
          <div className="footer_link">News</div>
          <div className="footer_link">Shop</div>
        </div>
      </div>
      <div className="footer_content max-[768px]:items-center max-[768px]:text-center max-[880px]:w-[40%]">
        <h5 className="footer_title">Quick Menu</h5>
        <div className="footer_links max-[768px]:items-center">
          <div className="footer_link">FAQs</div>
          <div className="footer_link">Clients</div>
          <div className="footer_link">Success Stories</div>
          <div className="footer_link">Privacy Policy</div>
        </div>
      </div>
      <div className="footer_content max-[768px]:items-center max-[768px]:text-center w-[352px]  max-[1024px]:w-[220px] max-[880px]:w-[40%]">
        <h5 className="footer_title">Contact Us</h5>
        <div className="footer_links max-[768px]:items-center">
          <div className="footer_link"> <span><FiPhoneCall size={22} /></span>+00 123 456 789</div>
          <div className="footer_link"> <span><MdOutlineMarkEmailRead size={22} /></span>hello@coaching.com</div>
          <div className="footer_link !text-white">
            <span><IoLocationSharp size={22} /></span>PO Box 99257 Baker st. 567 Los Angerles California, US
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
