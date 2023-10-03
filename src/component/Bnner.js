import React from 'react'




// import ''
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion'
import Header from './Header';
const Bnner = () => {
  const navigate = useNavigate()
  const variants = {
    hidden: { opacity: 0, y: -70 },
    show: { opacity: 1, y: 0, transition: { duration: 2 } }, // Increase duration to slow down
  };

  const Image = require('../bg-images/home.png')
  return (
    <div id='home'>
      <Header />
      <section className='min-h-[100vh] lg:min-h-[78vh] flex items-center mb-20' >
        <div className='container h-font mx-auto'>
          <div className='flex flex-col gap-10 lg:flex-row justify-center lg:items-center'>
            <div className='flex-1 text-center lg:text-left max-w-3xl  '>
              <motion.h1
                variants={variants}
                initial='hidden'
                // animate='show'
                whileInView={'show'}
                className=' text-[2rem] lg:text-[3.5rem] font-bold '>SELAMAWIT <span>GETACHEW</span>
              </motion.h1>
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView={'show'}

                className='mb-6  lg:text-[40px] font font-secondary text-[35px] font-semibold leading-[1]'>
                <span className='mr-4 '>I AM A </span>
                <TypeAnimation sequence={[
                  'DEVELOPER',
                  , 2000,
                  'DESIGNER',
                  2000,
                  'CONTENT CREATOR',
                  2000,
                ]}
                  speed={50}
                  className='text-green-500'
                  wrapper='span'
                  repeat={Infinity}

                />
              </motion.div>
              <motion.p
                variants={variants}
                initial='hidden'
                whileInView={'show'}

                className='mb-8   text-center lg:mx-0 font-thin max-w-[40rem] mx-10 lg:text-left' > I am an IT graduate with a strong focus on React. I have a passion for web development and am dedicated to honing my skills
                in creating interactive and responsive user interfaces. I value teamwork, stay updated with industry trends,
                and aspire to contribute to open-source projects in the future.
              </motion.p>
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView={'show'}

                className='flex max-w-max  gap-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='all-btn '> Contct Me </button>
                <a href='#' className='text-gradient text-[1.3rem]'>My Portfolio</a>
              </motion.div>
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView={'show'}

                className='flex text-[20px] mx-auto gap-6 max-w-max  '>
                <a href='https://t.me/Shal_jesus'>
                  <FaTelegram />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='https://github.com/shalselam' target='_blank'>
                  <FaGithub />
                </a>
              </motion.div>
            </div>


            <motion.div
              variants={variants}
              initial={{ opacity: 0, y: 70 }}
              whileInView={'show'}
              transition={{ duration: 1.5 }}
              style={{ position: 'relative' }} className='hidden md:block max-w-[320px] lg:max-w-[482px] mx-auto'>
              <div className='overlay brrds brrds'></div>
              <img src={Image} alt='my picture' className='h-[500px] w-[500px]  pt-2 brrds brrds] max-w-none' />
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Bnner