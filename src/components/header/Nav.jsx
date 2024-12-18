import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
const Nav = () => {
  return (
    <nav>
      <ul className=" flex items-center gap-[10px]">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="flex items-center">
          <NavLink to={"/courses"}>Courses</NavLink>
          <span>
            <FaAngleDown />
          </span>
          <div>
            <ul>
              <li>
                <Link>Courses Grid</Link>
              </li>
              <li>
                <Link>Courses List</Link>
              </li>
              <li>
                <Link>Courses Load More</Link>
              </li>
              <li>
                <Link>Courses Infiniti Scroll</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={"/podcast"}>Podcast</NavLink>
        </li>
        <li className="flex items-center">
          <NavLink to={"/blog"}>Blog</NavLink>
          <span>
            <FaAngleDown />
          </span>
          <div>
            <ul>
              <li>
                <Link>Blog Grid</Link>
              </li>
              <li>
                <Link>Blog List</Link>
              </li>
              <li>
                <Link>Blog Load More</Link>
              </li>
              <li>
                <Link>Blog Infiniti Scroll</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-center">
          <NavLink to={"/aboutus"}>Pages</NavLink>
          <span>
            <FaAngleDown />
          </span>
          <div>
            <ul>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Events </Link>
              </li>
              <li className="flex items-center justify-between">
                <Link>Shop</Link>
                <i className="px-3 text-black hover:text-[#fcab14]">
                  <FaAngleRight />
                </i>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
