import React, { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { TbLocation } from "react-icons/tb";

const EventsComp = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [timeLeft2, setTimeLeft2] = useState({});
  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setDate(currentDate.getDate() + 400);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({});
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // İkinci geri sayım
  useEffect(() => {
    const currentDate2 = new Date();
    const targetDate2 = new Date();
    targetDate2.setDate(currentDate2.getDate() + 40);

    const calculateTimeLeft2 = () => {
      const now2 = new Date();
      const difference2 = targetDate2 - now2;

      if (difference2 > 0) {
        const days = Math.floor(difference2 / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference2 / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference2 / 1000 / 60) % 60);
        const seconds = Math.floor((difference2 / 1000) % 60);

        setTimeLeft2({ days, hours, minutes, seconds });
      } else {
        setTimeLeft2({});
      }
    };

    const timer2 = setInterval(calculateTimeLeft2, 1000);
    return () => clearInterval(timer2);
  }, []);

  return (
    <>
      <div className="flex max-[1024px]:flex-col gap-5  !mt-[120px] container">
        <div className="w-[75%] max-[1024px]:w-full">
          <h2 className="events_title">Upcoming Events</h2>
          <div className="event_card">
            <div className="event_card_image">
              <img
                src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2015/11/event-2-585x340.jpg"
                alt=""
              />
              <div className="card_image_dates max-[1024px]:!hidden">
                <div className="card_date">
                  <p>{`${timeLeft.days}`}</p>
                  <span>Days</span>
                </div>
                <div className="card_date">
                  <p>{`${timeLeft.hours}`}</p>
                  <span>Hours</span>
                </div>
                <div className="card_date">
                  <p>{`${timeLeft.minutes}`}</p>
                  <span>Minutes</span>
                </div>
                <div className="card_date">
                  <p>{`${timeLeft.seconds}`}</p>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <div className="event_cart_content ">
              <div className="event_cart_content_top">
                <div className="event_cart_content_date">
                  <div>23</div> <div>Jan</div>
                </div>
                <h6>Global Mentoring, Coaching and Supervision Conference</h6>
              </div>
              <div className="event_cart_content_info max-[1024px]:!hidden">
                <div className="event_content_data">
                  <IoMdTime size={14} /> 8:00 am - 5:00 pm
                </div>
                <div className="event_content_data">
                  <IoLocationSharp size={14} /> Vancouver, Canada
                </div>
              </div>
              <p>
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris itae erat conuat.Morbi
                accumsan ipsum velit
              </p>
            </div>
          </div>
          <div className="event_card">
            <div className="event_card_image">
              <img
                src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2015/12/event-3-585x340.jpg"
                alt=""
              />
              <div className="card_image_dates max-[1024px]:!hidden">
                <div className="card_date">
                  <p>{`${timeLeft2.days}`}</p>
                  <span>Days</span>
                </div>
                <div className="card_date">
                  <p>{`${timeLeft2.hours}`}</p>
                  <span>Hours</span>
                </div>
                <div className="card_date">
                  <p>{`${timeLeft2.minutes}`}</p>
                  <span>Minutes</span>
                </div>
                <div className="card_date">
                  <p>{`${timeLeft2.seconds}`}</p>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <div className="event_cart_content">
              <div className="event_cart_content_top">
                <div className="event_cart_content_date">
                  <div>15</div>
                  <div>Jan</div>
                </div>
                <h6>Austin Tech Career Fair: Exclusive Tech Hiring Event</h6>
              </div>
              <div className="event_cart_content_info  max-[1024px]:!hidden">
                <div className="event_content_data">
                  <IoMdTime /> 12:00 am - 5:00 pm
                </div>
                <div className="event_content_data">
                  <IoLocationSharp /> Birmingham, UK
                </div>
              </div>
              <p>
                Tech Career Fair focus on helping companies achieve their
                diversity and inclusivity initiative with more diverse
                non-traditional candidates
              </p>
            </div>
          </div>
        </div>

        <div className="events_left max-[1024px]:flex  max-[1024px]:flex-col  max-[1024px]:items-center">
          <h4>Join Our Community</h4>
          <form className="events_left_input">
            <input type="email" placeholder=" Your Email" required />{" "}
            <button>
              <TbLocation />
            </button>
          </form>
          <h4 className="pt-[40px] pb-[25px]">Connect on Instagrams</h4>
          <div className="events_left_img max-[1024px]:!w-auto">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/box-instagram-1.jpg"
              alt=""
            />
            <div className="events_left_image_icon">
              <SiInstagram />
            </div>
          </div>
          <div className="events_left_img max-[1024px]:!w-auto">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/box-instagram-2.jpg"
              alt=""
            />
            <div className="events_left_image_icon">
              <SiInstagram />
            </div>
          </div>
          <div className="events_left_img max-[1024px]:!w-auto">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/box-instagram-3.jpg"
              alt=""
            />
            <div className="events_left_image_icon">
              <SiInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsComp;
