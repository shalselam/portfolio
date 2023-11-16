import React from 'react'
import { motion } from 'framer-motion'
// import ''
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'






const Work = () => {
  // const Image1 = require('../bg-images/shop1.png')
  const variants = {
    hidden: { opacity: 0, x: 70 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Increase duration to slow down
  };
  const Image2 = require('../bg-images/shop1.png')
  const Image3 = require('../bg-images/game.png')
  const Image4 = require('../bg-images/menuhome.png')
  return (
    <section className='section' id='work' >
      <div className='container  mx-auto '>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={variants}
            initial={{ opacity: 0, x: -70 }}
            whileInView={'show'}
            className='flex-1 flex flex-col gap-y-10 mb-16 lg:mb-0' >
            <div>
              <h2 className='h-font leading-tight text-[35px] font-semibold text-green-500'>My Latest<br />Work.</h2>
              <p className='max-w-md mb-16 sec-font text-[1.3rem]'>I am an IT graduate with a strong focus on React. I have a passion
                for web development and am dedicated to honing my skills"</p>
              {/* <button className='all-btn mb-16'>View All Projects</button> */}
            </div>



            <div className='group relative overflow-hidden border-2 border-white/60 rounded-xl '>
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 '></div>
              <img src={Image4} alt='image from shoping project ' className='group-hover:scale-125 transition-all duration-500' />

              <div className=' h-font absolute -bottom-full left-12 group-hover:bottom-48
                         transition-all duration-500 z-50'>
                <a href='https://github.com/shalselam/diceGame.git' target='_blank'>
                  <span className='text-gradient flex items-center  gap-5 text-[2rem] '>Hotel Menu
                    <FaGithub color='white ' />
                  </span>
                </a>
              </div>

              <div className=' h-font absolute -bottom-full left-12 group-hover:bottom-20
                       transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>I built a landing page for Hotel called Gebeta which display the hotels menu, Events and Reservation using HTML, CSS, React</span>
              </div>

            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 flex flex-col gap-y-12'>
            <div className='group relative overflow-hidden border-2 border-white/60 rounded-xl '>
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 '></div>
              <img src={Image3} alt='image from shoping project ' className='group-hover:scale-125 transition-all duration-500' />

              <div className=' h-font absolute -bottom-full left-12 group-hover:bottom-40
                         transition-all duration-500 z-50'>
                <a href='https://github.com/shalselam/diceGame.git' target='_blank'>
                  <span className='text-gradient flex items-center cursor-pointer gap-5 text-[2rem]'>Dice Game
                    <FaGithub color='white ' /></span></a>
              </div>

              <div className=' h-font absolute -bottom-full left-12 group-hover:bottom-14
                       transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>I develope a Dice Game which allow two player, with Vanila CSS and Pure JavaScript </span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/60 rounded-xl '>
              <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 '></div>
              <img src={Image2} alt='image from shoping project ' className='group-hover:scale-125 transition-all duration-500' />

              <div className=' h-font absolute -bottom-full left-12 group-hover:bottom-48
                         transition-all duration-500 z-50 '>
                <a href='https://github.com/shalselam/diceGame.git' target='_blank'>
                  <span className='text-gradient flex items-center gap-5 text-[2rem]'>E-commerce Website
                    <FaGithub color='white ' />
                  </span>
                </a>
              </div>

              <div className=' h-font absolute -bottom-full left-12 group-hover:bottom-24
                       transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>I built the landing page, detail page, and checkout page for the e-commerce website using vanilla CSS and React.
                </span>
              </div>

            </div>
          </motion.div>
        </div>

      </div >
    </section >
  )
}

export default Work 