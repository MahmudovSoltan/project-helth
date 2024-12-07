import React from 'react'
import Banner from '../../components/banner/Banner'
import { RiLeafLine } from 'react-icons/ri'
import { FaRegCheckCircle } from 'react-icons/fa'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import SkilsComp from '../../components/aboutus/SkilsComp'
import '../../assets/css/about.css'
import CaruselComo from '../../components/aboutus/CaruselComo'
import Certifications from '../../components/aboutus/Certifications'
import ChooseUs from '../../components/aboutus/ChooseUs'
import Experts from '../../components/aboutus/Experts'
import Appointment from '../../components/aboutus/Appointment'
const AboutUs = () => {
  return (
    <div>
      <Banner title={"AboutUs"}/>
      <section className="px-[50px] mt-[100px]">
        <div className="home_second_section flex items-center mb-[80px]">
          <div className="home_second_section_left">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/home-section-welcome-1.png"
              alt="img"/>
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
                </div>
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
      <section>
        <SkilsComp/>
      </section>
      <section>
        <CaruselComo/>
      </section>
      <section>
        <Certifications/>
      </section>
      <section>
        <ChooseUs/>
      </section>
      <section>
        <Experts/>
      </section>
      <section>
        <Appointment/>
      </section>
    </div>
  )
}

export default AboutUs
