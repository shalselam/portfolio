import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'



import { motion } from 'framer-motion'
const services = [
  {
    name: 'Developement',
    description: "I am an IT graduate with a strong focus on React. I have a passion for web development and am dedicated to honing my skills",
    link: 'Learn more',
  },
  {
    name: 'UI/UX Design',
    description: "I am an IT graduate with a strong focus on React. I have a passion for web development and am dedicated to honing my skills",
    link: 'Learn more',
  },
  {
    name: 'Content Creation',
    description: "I am an IT graduate with a strong focus on React. I have a passion for web development and am dedicated to honing my skills",
    link: 'Learn more',
  },
  {
    name: 'Costomer service',
    description: "I am an IT graduate with a strong focus on React. I have a passion for web development and am dedicated to honing my skills ",
    link: 'Learn more',
  },
]
const Service = () => {
  const variants = {
    hidden: { opacity: 0, x: 70 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Increase duration to slow down
  };
  return (
    <section className='section' id='service'>
      <div className='container h-font mx-auto '>
        <div className='flex flex-col gap-20 lg:flex-row '>
          <motion.div
            variants={variants}
            initial={{ opacity: 0, x: -70 }}
            whileInView={'show'}
            className='flex-1 service mix-blend-lighten  lg:bg-right'>
            <h2 className='text-[35px] font-semibold leading-[1] text-green-500 mb-16 pt-16'> What I Do . . .</h2>
            <h3 className='text-[1.7rem] mb-16 max-w-[355px]'>I'm a Freelancer Front-End Developer with Junior Experience Level</h3>
            <button className='all-btn'> See My Work</button>
          </motion.div>
          <motion.div
            variants={variants}
            initial='hidden'
            whileInView={'show'}
            className='flex-1'>
            <div >
              {services.map((Servs, index) => {
                const { name, description, link } = Servs

                return (
                  <div className='border-b border-white/20  mb-[36px] flex' key={index}>
                    <div className='max-w [476px] '>
                      <h4 className='text-[20px] tracking-wider h-font font-semibold mb-6 mt-'>{name}</h4>
                      <p className='sec-font mb-6 max-w-[450px] lg:text-[20px] lg:max-w-[600px] leading-tight'> {description}</p>
                    </div>
                    <div className='mb-4 text-[16px] flex-1 flex flex-col items-end '>
                      <a href='#' className='h-10 w-10 rounded-full linear flex  items-center justify-center '><BsArrowUpRight /></a>
                      <a href='#' className='text-gradient font-semibold text '>{link}</a>
                    </div>
                  </div>

                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Service