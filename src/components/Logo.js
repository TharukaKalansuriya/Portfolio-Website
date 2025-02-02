import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";


const MotionLink = motion (Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="\"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{
            backgroundColor:["#121212", "rgba(48, 251, 255, 0.8)","rgba(171, 136, 224, 0.8)","rgba(180, 41, 55, 0.8)","rgba(183, 142, 44, 0.8)", "#121212"],
            transition:{duration:1, repeat:Infinity }
        }}
        >T_K</MotionLink>
      
    </div>
  )
}

export default Logo
