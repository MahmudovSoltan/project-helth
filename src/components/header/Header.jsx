import React from "react";
import Nav from "./Nav";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import './header.css'
const Header = () => {
  return (
    <header className=" container flex justify-between items-center">
      <div className="log">
        <img
          src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/logo-png.png"
          alt=""
        />
      </div>
      <Nav/>
      <div className="header_icons">
        <ul className="flex gap-2 items-center">
            <li><FiSearch size={25}/></li>
            <li><RiShoppingBasketLine size={20}/></li>
            <li><FaRegUser size={20}/></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
