import React, { useEffect, useState } from 'react'
import { TfiAngleDoubleUp } from 'react-icons/tfi'
import '../../assets/css/scroll.css'
const Scrollbutton = () => {
    const [bactoButton,setBackToButton]=useState(false)

useEffect(()=>{
window.addEventListener('scroll',()=>{
if (window.scrollY>500) {
    setBackToButton(true)
} else {
    setBackToButton(false)
}
})
},[])

const scrollUp=()=>{
window.scrollTo({
    top:0,
    behavior:"smooth",
})
}
  return (
    <div>
        {bactoButton&&(
      <button onClick={scrollUp} className="scrol_button">
        <TfiAngleDoubleUp/>
      </button>

        )}
    </div>
  )
}

export default Scrollbutton
