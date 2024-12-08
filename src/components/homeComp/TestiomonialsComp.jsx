import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const TestiomonialsComp = () => {
  return (
    <div className="mt-[120px] bg-[#f8f9fa] py-[105px]">
      <div className="container flex  ">
        <div className="w-[30%] flex items-center leading-[1.6em] text-[40px] font-semibold">
          <h2>Testiomonials</h2>
        </div>
        <div className="w-[70%] swiper_div">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="w-[325px]  ">
              <div className="flex flex-col items-start bg-white gap-6 py-[30px] px-[20px] rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="rounded-full "
                      src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-testimonial-2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-[#3D3C3C] text-[18px] font-semibold">
                      Lucinda
                    </h6>
                    <p className="text-[#3D3C3C] text-[14px] font-normal leading-[1.6em]">
                      {" "}
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <p className="text-[#636363] text-[16px]  xl:font-[600] tracking-wide">
                  I love Elizabeth’s workshops, using the plants from our
                  meadows and hedgerows she always manages to come up with
                  something.
                </p>
                <div>
                  <img
                    src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/star.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[325px]  ">
              <div className="flex flex-col items-start bg-white gap-6 py-[30px] px-[20px] rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="rounded-full "
                      src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-testimonial-3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-[#3D3C3C] text-[18px] font-semibold">
                      Tony
                    </h6>
                    <p className="text-[#3D3C3C] text-[14px] font-normal leading-[1.6em]">
                      {" "}
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <p className="text-[#636363] text-[16px] xl:font-[600] tracking-wide">
                  I love Elizabeth’s workshops, using the plants from our
                  meadows and hedgerows she always manages to come up with
                  something.
                </p>
                <div>
                  <img
                    src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/star.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[325px]  ">
              <div className="flex flex-col items-start bg-white gap-6 py-[30px] px-[20px] rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="rounded-full "
                      src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-testimonial-1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-[#3D3C3C] text-[18px] font-semibold">
                      Maria B
                    </h6>
                    <p className="text-[#3D3C3C] text-[14px] font-normal leading-[1.6em]">
                      {" "}
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <p className="text-[#636363] text-[16px] xl:font-[600] tracking-wide">
                  I love Elizabeth’s workshops, using the plants from our
                  meadows and hedgerows she always manages to come up with
                  something.
                </p>
                <div>
                  <img
                    src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/star.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[325px]  ">
              <div className="flex flex-col items-start bg-white gap-6 py-[30px] px-[20px] rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="rounded-full "
                      src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-testimonial-2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-[#3D3C3C] text-[18px] font-semibold">
                      Lucinda
                    </h6>
                    <p className="text-[#3D3C3C] text-[14px] font-normal leading-[1.6em]">
                      {" "}
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <p className="text-[#636363] text-[16px] xl:font-[600] tracking-wide">
                  I love Elizabeth’s workshops, using the plants from our
                  meadows and hedgerows she always manages to come up with
                  something.
                </p>
                <div>
                  <img
                    src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/star.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[325px]  ">
              <div className="flex flex-col items-start bg-white gap-6 py-[30px] px-[20px] rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="rounded-full "
                      src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-testimonial-3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-[#3D3C3C] text-[18px] font-semibold">
                      Tony
                    </h6>
                    <p className="text-[#3D3C3C] text-[14px] font-normal leading-[1.6em]">
                      {" "}
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <p className="text-[#636363] text-[16px] xl:font-[600] tracking-wide">
                  I love Elizabeth’s workshops, using the plants from our
                  meadows and hedgerows she always manages to come up with
                  something.
                </p>
                <div>
                  <img
                    src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/star.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[325px]  ">
              <div className="flex flex-col items-start bg-white gap-6 py-[30px] px-[20px] rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="rounded-full "
                      src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/healty-testimonial-1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-[#3D3C3C] text-[18px] font-semibold">
                      Maria B
                    </h6>
                    <p className="text-[#3D3C3C] text-[14px] font-normal leading-[1.6em]">
                      {" "}
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <p className="text-[#636363] text-[16px] xl:font-[600] tracking-wide">
                  I love Elizabeth’s workshops, using the plants from our
                  meadows and hedgerows she always manages to come up with
                  something.
                </p>
                <div>
                  <img
                    src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/star.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestiomonialsComp;
