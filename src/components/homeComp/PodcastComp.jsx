import React from 'react'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import { MdOutlineHeadset } from 'react-icons/md'
import { RiLeafLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PodcastComp = () => {
  return (
    <div className='bg-[#f8f9fa] mt-[120px] '>
        <div className='container flex justify-between'>
        <div className='w-[50%] content-center'>
            <h2 className='text-[40px] text-[#3d3c3c] font-semibold mb-[30px]'>
            Listen My Podcasts
            </h2>
            <p className='text-[16px] text-[#636363] mb-[30px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Link className='btn'><span> <RiLeafLine size={25} /></span>Listen All</Link>
        </div>
        <div className='w-[440px] prodcats_left'>
            <div className='w-[200px] h-[200px]'>
            <img src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-8-1024x1024.png" alt="" />

            </div>
            <div className='podcast_epo'>
            Episode 5
            </div>
            <div className='author_name'>
            Michael
            </div>
            <div className='podcast_player'>
                <div>
                <FaAnglesLeft />
                </div>
                <div>
                <MdOutlineHeadset />
                </div>
                <div>
                <FaAnglesRight />
             
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default PodcastComp