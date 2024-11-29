import React from "react";
import HomeLeft from "../../components/homeComp/HomeLeft";
import HomeRight from "../../components/homeComp/HomeRight";
import "./home.css";
import CountUp from "react-countup";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiLeafLine } from "react-icons/ri";
import WhatIdo from "../../components/homeComp/WhatIdo";
import CoursesFilter from "../../components/homeComp/coursesFilter";
import CoursesCard from "../../components/homeComp/CoursesCard";
const Home = () => {
  return (
    <>
      <section>
        <div className="home_container flex ">
          <HomeLeft />
          <HomeRight />
        </div>
      </section>
      <section className="px-[50px] mt-[100px]">
        <div className="home_second_section flex items-center mb-[80px]">
          <div className="home_second_section_left">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/home-section-welcome-1.png"
              alt="img"
            />
          </div>
          <div className="home_second_section_right">
            <h2>Hi, I'm Elizabeth!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit
            </p>
            <div className="flex ">
              <div className="home_secound_count">
                <div className="count">
                  <CountUp start={1} end={10} duration={5} separator="," />+
                </div>{" "}
                YEARS EXPERIENCE
              </div>
              <div className="home_secound_count">
                <div className="count">
                  <CountUp start={1} end={300} duration={5} separator="," />+
                </div>
                HAPPY CUSTOMERS
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 pt-3">
                <FaRegCheckCircle className="text-[#7FB82D]" /> Nutritional
                assessment
              </div>
              <div className="flex items-center gap-3 pt-3">
                <FaRegCheckCircle className="text-[#7FB82D]" /> Meal planning
                and analysis
              </div>
              <div className="flex items-center gap-3 pt-3">
                <FaRegCheckCircle className="text-[#7FB82D]" /> Weight
                assessment
              </div>
            </div>
            <Link>
              <RiLeafLine size={25} /> Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-[105px] bg-[#63636319]">
        <WhatIdo />
      </section>
      <section>
        <CoursesFilter/>
        <CoursesCard/>
      </section>
    </>
  );
};

export default Home;
