import React from 'react'
import { RiLeafLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
const WhatIdo = () => {
  return (
    <div className='what_l_do'>
        <div className='flex items-start justify-center flex-col'>
            <h3>
            What I Do
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <Link>
            <RiLeafLine size={25} /> Contact Us
            </Link>
        </div>
        <div className='what_image'>
            <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/post-type-1.jpg" alt="" />
            <div>
            Online Courses
            </div>
            <span className='add_button'><MdAdd/></span>
        </div>
        <div className='what_image'>
            <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/post-type-2.jpg" alt="" />
            <div>
            Podcast
            </div>
            <span className='add_button'><MdAdd/></span>
        </div>
        <div className='what_image'>
            <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/08/post-type-3.jpg" alt="" />
            <div>
            Blog
            </div>
            <span className='add_button'><MdAdd/></span>
        </div>
    </div>
  )
}

export default WhatIdo