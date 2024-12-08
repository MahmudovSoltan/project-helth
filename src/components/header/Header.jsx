import React, { useState } from "react";
import Nav from "./Nav";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaAngleDown, FaRegUser } from "react-icons/fa6";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  let [blog,setBlog] = useState(false)
  let [course,setCourse] = useState(false)
  let [pages,setPages] = useState(false)
  let [openMenu,setOpenMenu] = useState(false)

  
  const navigate = useNavigate();
  return (
    <header className=" container flex justify-between items-center">
      <div onClick={() => navigate("/")} className="log cursor-pointer">
        <img
          src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/logo-png.png"
          alt=""
        />
      </div>
      <Nav />

      <div className="header_icons">
        <ul className="flex gap-2 items-center">
          <li>
            <FiSearch size={25} />
          </li>
          <li>
            <RiShoppingBasketLine size={20} />
          </li>
          <li>
            <FaRegUser size={20} />
          </li>
          <li className="hamburger_menu" onClick={()=>setOpenMenu(true)}>
            {
              !openMenu&& <IoMenuOutline size={30} />
            }
           
          </li>
        </ul>
      </div>
      {/* Mobile Navbar */}
      <div  className={`mobile_navbar ${
             openMenu === true ? "mobile_navbar_active" : ""
            }`}>
        <div className={`mobile_nav_fix ${
             openMenu === true ? "mobile_navbar_active2" : ""
            }`}>
          <div onClick={()=>setOpenMenu(false)} className="navbar_close">
            <IoMdClose size={30} />
          </div>
          <ul>
            <li>
              <div className="responsive_nav_link">
                <Link>Home</Link>
              </div>
            </li>
            <li>
              <div className="responsive_nav_link">
                <Link>Courses</Link>
                <span onClick={() => setCourse(course === true ? course=false : course = true)}>
                  <FaAngleDown />
                </span>
              </div>
              <div className={`responsive_navbar_links ${
             course === true ? "responsive_navbar_links_active" : ""
            } transition-all`}>
                <ul>
                  <li>
                  Courses Grid
                  </li>
                  <li>
                  Courses List
                  </li>
                  <li>
                  Courses Load More
                  </li>
                  <li>
                  Courses Infiniti Scroll
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="responsive_nav_link">
                <Link>Podcast </Link>
              </div>
            </li>
            <li>
              <div className="responsive_nav_link">
                <Link>Blog</Link>
                <span  onClick={() => setBlog(blog === true ? blog=false : blog = true)}>
                  <FaAngleDown />
                </span>
              </div>
              <div className={`responsive_navbar_links ${
             blog === true ? "responsive_navbar_links_active" : ""
            } transition-all`}>
                <ul>
                  <li>
                    Blog Grid
                  </li>
                  <li>
                    Blog List
                  </li>
                  <li>
                    Blog Load More
                  </li>
                  <li>
                    Blog Infiniti Scroll
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="responsive_nav_link">
                <Link>Pages</Link>
                <span onClick={() => setPages(pages === true ? pages=false : pages = true)}>
                  <FaAngleDown />
                </span>
              </div>
              <div className={`responsive_navbar_links ${
             pages === true ? "responsive_navbar_links_active2" : ""
            } transition-all`}>
                <ul>
                  <li>About us</li>
                  <li>Events</li>
                  <li>Shop</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="responsive_nav_link">
                <Link>Contact</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
