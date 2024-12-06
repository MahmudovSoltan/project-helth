import React from 'react'
import { FaSearch } from 'react-icons/fa'


const Blogsearch = ({setSort,setSearch}) => {
    const handleValue = (e)=>{
        setSort(e.target.value);
    }
  return (
    <div className='container course_filter_nav'>
        <div className='course_filter_nav_right'>
        <div>
       Showing 1-12 of 12 results
       </div>
       <div>
        <select  onChange={handleValue}>
        <option value="a-z">Title a-z</option>
        <option value="z-a">Title z-a</option>
        </select>
       </div>
        </div>
        <div className='course_filter_nav_left'>
            <div className='flex items-center justify-start'>
                <span><FaSearch size={20}/></span>
                <input type="text" onChange={(e)=>setSearch(e.target.value)}  placeholder='Search Course' />
            </div>
        </div>
     
    </div>
  )
}

export default Blogsearch
