import React, { useState } from 'react'
import Banner from '../../components/banner/Banner'
import { RiLeafLine } from 'react-icons/ri';
import { IoLocationOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { LuClock3, LuPhone } from 'react-icons/lu';
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState();

  const submitBtn = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.name === "" || !emailRegex.test(data.email) || data.message === "") {
      setError(true);
    } else {
      setError(false);
      setData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div>
      <Banner title={"Contact"}/>
      <section className='flex gap-[30px] container !py-[80px] max-lg:flex-col'>
        <div className='w-[50%] max-lg:w-full '>
             <div className='p-[20px] mb-[40px]
             bg-[--fwhite] rounded-xl flex items-center gap-3'>
              <div className='w-[70px] h-[70px] bg-white text-[--primary] text-[40px] flex items-center justify-center rounded-xl hover:bg-[--primary] hover:text-[white] transition-all '>
              <IoLocationOutline />
              </div>
              <div>
                <h5 className='text-[18px] max-sm:text-[16px] text-[--gray] font-[550] mb-[5px]'>
                Location
                </h5>
                <p className='text-[--text] mb-[5px]  font-[550]'>
                 New York, Canada 
                </p>
              </div>
             </div>
             <div className='p-[20px] mb-[40px]
             bg-[--fwhite] rounded-xl flex items-center gap-3'>
              <div className='w-[70px] h-[70px] bg-white text-[--primary] text-[40px] flex items-center justify-center rounded-xl hover:bg-[--primary] hover:text-[white] transition-all '>
              <GoMail />
              </div>
              <div>
                <h5 className='text-[18px] max-sm:text-[16px] text-[--gray] font-[550] mb-[5px]'>
                EMAIL
                </h5>
                <p className='text-[--text] mb-[5px]  font-[550]'>
                Hello@coaching.com 
                </p>
              </div>
             </div>
             <div className='p-[20px] mb-[40px]
             bg-[--fwhite] rounded-xl flex items-center gap-3'>
              <div className='w-[70px] h-[70px] bg-white text-[--primary] text-[40px] flex items-center justify-center rounded-xl hover:bg-[--primary] hover:text-[white] transition-all '>
              <LuPhone />
              </div>
              <div>
                <h5 className='text-[18px] max-sm:text-[16px] text-[--gray] font-[550] mb-[5px]'>
                CONTACT
                </h5>
                <p className='text-[--text] mb-[5px]  font-[550]'>
                +1 800 559 6580
                </p>
              </div>
             </div>
             <div className='p-[20px] mb-[40px]
             bg-[--fwhite] rounded-xl flex items-center gap-3'>
              <div className='w-[70px] h-[70px] bg-white text-[--primary] text-[40px] flex items-center justify-center rounded-xl hover:bg-[--primary] hover:text-[white] transition-all '>
              <LuClock3 />
              </div>
              <div>
                <h5 className='text-[18px] max-sm:text-[16px] text-[--gray] font-[550] mb-[5px]'>
                HOURS OF OPERATION
                </h5>
                <p className='text-[--text] mb-[5px]  font-[550]'>
                monday - friday : 09:00 - 20:00 
                </p>
              </div>
             </div>
        </div>
        <div className="w-[50%] max-lg:w-full  bg-[#F8F9FA] p-[30px]  rounded-xl">
          <div className='pb-[40px]  text-center'>
          <h2 className=" text-[28px] mb-[10px]  max-sm:text-[24px] leading-[1.3em] font-semibold">
          Ready to Get Started?
          </h2>
          <p className='text-[--text]'>
          Your email address will not be published. Required fields are marked * 
          </p>

          </div>
          <div>
            <form action="">
              <div className=" bg-white py-3 px-4 rounded-xl mb-[20px]">
                <input
                  onInput={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                  className="bg-transparent w-full outline-none text-[#636363]"
                  type="text"
                  placeholder="Name *"
                />
              </div>
              <div className="bg-white py-3 px-4 rounded-xl mb-[20px]">
                <input
                  onInput={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                  className="bg-transparent w-full outline-none text-[#636363]"
                  type="text"
                  placeholder="Email *"
                />
              </div>
              <div className="bg-white h-[170px] py-3 px-4 rounded-xl mb-[20px]">
                <textarea
                  onInput={(e) => setData({ ...data, message: e.target.value })}
                  value={data.message}
                  className="bg-transparent w-full outline-none text-[#636363] h-full"
                  name=""
                  id=""
                  placeholder="Message *"
                ></textarea>
              </div>
              <div className='flex py-[40px] items-center justify-center'>
              <button style={{
                backgroundColor:error==true?"black":""
              }}
                onClick={submitBtn}
                className="flex  items-center justify-center gap-2 bg-[--primary] w-[163px] h-[55px] rounded-xl text-white text-[18px] font-[550] transition-all hover:bg-[--secondary]"
              >
                <span>
                  <RiLeafLine size={25} />
                </span>
                Submit
              </button>

              </div>
              {
                error==false? <p className="text-[18px] text-green-600 mt-4">Thank you for your message. It has been sent.</p>:""
              }{
                error== true &&   <p className="text-[18px] text-red-600 mt-4">One or more fields have an error. Please check and try again.</p>
              }
            
           
            </form>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d19888.240055419392!2d-0.1441801!3d51.4576055!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4876057c704a4439%3A0xa6bfa0dde4d8f0a9!2z0KPQuNC90LTQvNC40LsgQ2xhcGhhbSBDb21tb24gU291dGggU2lkZSBMb25kb24gU1c0IDlERSDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!3m2!1d51.4576055!2d-0.1441801!5e0!3m2!1sen!2saz!4v1718762577985!5m2!1sen!2saz"
        width="600"
        height="450"
        style={{ border: "0", width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Contact
