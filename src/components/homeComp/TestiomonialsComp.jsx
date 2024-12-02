import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination"; 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const TestiomonialsComp = () => {
  return (
    <div className=''>
      <div className="container flex ">
          <div>
            <h2>
            Testiomonials
            </h2>
          </div>
          <div className=''>
          <Swiper
            loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam, minima nobis provident laborum sint mollitia hic aperiam! Eveniet, obcaecati!</div></SwiperSlide>
        <SwiperSlide><div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam, minima nobis provident laborum sint mollitia hic aperiam! Eveniet, obcaecati!</div></SwiperSlide>
        <SwiperSlide><div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam, minima nobis provident laborum sint mollitia hic aperiam! Eveniet, obcaecati!</div></SwiperSlide>
        <SwiperSlide><div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam, minima nobis provident laborum sint mollitia hic aperiam! Eveniet, obcaecati!</div></SwiperSlide>
        
      </Swiper>
          </div>
      </div>
    </div>
  )
}

export default TestiomonialsComp
