import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeRight = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="home_swiper max-[850px]:!w-[100%] ">
      <Swiper
          loop={true}
          pagination={pagination}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
      >
        <SwiperSlide className="max-[850px]:h-[500px]">
          <img
            src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/slide-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="max-[850px]:h-[500px]">
          <img
            src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/slide-4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="max-[850px]:h-[500px]">
          <img
            src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/slide-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="max-[850px]:h-[500px]">
          <img
            src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/slide-3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeRight;
