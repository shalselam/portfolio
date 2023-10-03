
import React from 'react'
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from "react-icons/bs";
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav class='fixed bottom-8  lg:bottom-2 w-full overflow-hidden z-50'>
      <div className='mx-auto w-2/4'>
        <div className='w-full bg-[black]/25 backdrop-blur-2xl h-[70px] 
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50  items-center'>
          <a href='#home' className='cursor-pointer  rounded-full  p-2 nav-bg' title='home'> 
          <BiHomeAlt />
          </a>
          <a href='#about' className='cursor-pointer rounded-full  p-2 nav-bg' title='about'>
          <BiUser />
          </a>
          <a href='#service' className='cursor-pointer rounded-full r p-2 nav-bg' title='services'>
          <BsClipboardData/>
          </a> 
          <a href='#work' className='cursor-pointer rounded-full p-2 nav-bg' title='work'>
          <BsBriefcase />
        
          </a>
           <a href='#contact'  className=' p-2 cursor-pointer rounded-full nav-bg' title='contact me'>
          <BsChatSquareText/>
          </a>
    
        </div>

        
      </div>
    </nav>
  )
}

export default Nav