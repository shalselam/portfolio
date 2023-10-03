import React from 'react'



import CountUP from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { inView, motion } from 'framer-motion'

const About = () => {
  const [Ref, inView] = useInView({
    threshold: 0.5,
  })
  const variants = {
    hidden: { opacity: 0, y: -70 },
    show: { opacity: 1, y: 0, transition: { duration: 2 } }, // Increase duration to slow down
  };
  return (
    <section className='section' id='about' ref={Ref}>
      <div className='container mx-auto h-screen mt-40 mb-[200px] '>
        <div className=' lg:flex-row '>
          <motion.div
            variants={variants}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 bg-contain bg-no-repeat h-[500px]  bg-about mix-blend-lighten bg-top'>
          </motion.div>
          <div className='flex items-center justify-center lg:block'>
            <motion.div 
             variants={variants}
             initial={{ opacity: 0, y: 70 }}
             whileInView={'show'}>
              <div
                className='flex-1' >
                <h1 className='mb-6  lg:text-[40px] h-font font-secondary text-[35px] font-semibold leading-[1] text-green-500'>About Me.</h1>
                <h3 className='text-[1.7rem] mb-4 sec-font'>I'm a Freelancer Front-End Developer with Junior Experience ,</h3>
                <p className=' mb-6 sec-font max-w-[600px]'>I am an IT graduate with a strong focus on React. I have a passion for web development and am dedicated to honing my skills
                  in creating interactive and responsive user interfaces. I value teamwork, stay updated with industry trends,
                  and aspire to contribute to open-source projects in the future.</p>
              </div>
              <div   className='flex i gap-x-6 lg:gap-x-10 h-font mb-12 '>
                <div>
                  <div className='text-[40px] font-semibold text-gradient mb-2'>
                    {inView ? <CountUP start={10} end={1} duration={3} /> : null}
                  </div>
                  <div className='tracking-[2px]'>Year of<br /> Experience  </div>
                </div>
                <div>
                  <div className='text-[40px] font-semibold text-gradient mb-2 lg:flex'>
                    {inView ? <CountUP start={0} end={10} duration={3} /> : null}+
                  </div>
                  <div className='tracking-[2px]'>Projects <br />complete </div>
                </div>
                <div>
                  <div className='text-[40px] font-semibold text-gradient mb-2'>
                    {inView ? <CountUP start={0} end={5} duration={3} /> : null}
                  </div>
                  <div className='tracking-[2px]'>satisfied <br />company </div>
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
                <button className='all-btn '>Contact Me</button>
                <a href='#' className='text-gradient h-font text-[1.3rem] '>My Portfolio</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About