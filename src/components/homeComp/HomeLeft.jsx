import React from 'react'
import { Link } from 'react-router-dom'
import { RiLeafLine } from "react-icons/ri";
const HomeLeft = () => {
  return (
    <div className=' flex items-start flex-col justify-center px-[30px] home_left'>
     <h6 className="home_left_top ">
     I'll show you how.
     </h6>
     <h1 className="home_title max-[850px]:!text-[32px] max-[850px]:!mb-[20px]">
     Healthy Without The Hard
     </h1>
     <p className="home_left_desc">
     Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
     </p>
     <Link className='home_left_link flex gap-[10px] items-center max-[850px]:mb-[50px]'>
       <RiLeafLine/> Work with me today
     </Link>
    </div>
  )
}

export default HomeLeft