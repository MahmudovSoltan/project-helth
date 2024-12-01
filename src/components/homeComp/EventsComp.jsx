import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { TbLocation } from "react-icons/tb";

const EventsComp = () => {
  return (
    <>
      <div className="flex gap-5  !mt-[120px] container">
        <div className="w-[75%]">
          <h2 className="events_title">Upcoming Events</h2>
          <div className="event_card">
            <div className="event_card_image">
              <img
                src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2015/11/event-2-585x340.jpg"
                alt=""
              />
            </div>
            <div className="event_cart_content">
              <div className="event_cart_content_top">
                <div className="event_cart_content_date">
                  <div>23</div> <div>Jan</div>
                </div>
                <h6>Global Mentoring, Coaching and Supervision Conference</h6>
              </div>
              <div className="event_cart_content_info">
                <div className="event_content_data">
                  <IoMdTime size={14} /> 8:00 am - 5:00 pm
                </div>
                <div className="event_content_data">
                  <IoLocationSharp size={14}/> Vancouver, Canada
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
            </div>
            <div className="event_cart_content">
              <div className="event_cart_content_top">
                <div className="event_cart_content_date">
                  <div>15</div>
                  <div>Jan</div>
                </div>
                <h6>Austin Tech Career Fair: Exclusive Tech Hiring Event</h6>
              </div>
              <div className="event_cart_content_info">
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

        <div className="events_left">
          <h4>Join Our Community</h4>
          <form className="events_left_input">
            <input type="email" placeholder=" Your Email" required/> <button><TbLocation /></button>
          </form>
          <h4 className="pt-[40px] pb-[25px]">Connect on Instagrams</h4>
          <div className="events_left_img">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/box-instagram-1.jpg"
              alt=""
            />
            <div className="events_left_image_icon"><SiInstagram /></div>
          </div>
          <div className="events_left_img">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/box-instagram-2.jpg"
              alt=""
            />
            <div className="events_left_image_icon"><SiInstagram /></div>
          </div>
          <div className="events_left_img">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/box-instagram-3.jpg"
              alt=""
            />
            <div className="events_left_image_icon"><SiInstagram /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsComp;
