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
      <div className='container mx-auto  '>
        <div className=' lg:flex-row '>
          <motion.div
            variants={variants}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 bg-contain bg-no-repeat h-[600px]  bg-about  bg-top'>
          </motion.div>
          <div className='flex items-center justify-center lg:block'>
            <motion.div
              variants={variants}
              initial={{ opacity: 0, y: 70 }}
              whileInView={'show'}>
              <div
                className='flex-1' >
                <h1 className='mb-6  lg:text-[40px] h-font font-secondary text-[35px] font-semibold leading-[1] text-green-500'>About Me.</h1>
                <h3 className='text-[1.7rem] font-semibold mb-4 sec-font'>I'm a Front-End Developer with Junior Experience ,</h3>
                <p className=' mb-6 sec-font text-[18px] max-w-[1000px]'>I am an IT professional with expertise in frontend web development, specializing in React.js. With [X] years of experience in this field, I excel at creating visually appealing and user-friendly interfaces.

                  In addition to my web development skills, I bring one year of valuable customer service experience, which has enhanced my problem-solving abilities and commitment to delivering exceptional service.

                  My technical foundation includes proficiency in HTML, CSS, and JavaScript, enabling me to transform concepts into responsive web applications.

                  I stand out by staying updated with industry trends, fostering a creative and collaborative mindset, and embracing new technologies. My attention to detail and adaptability shine in team environments.

                  My career goal is to contribute my expertise to innovative teams, tackle exciting projects, and drive excellence in the dynamic world of web development.</p>
              </div>
              <div className='flex i gap-x-6 lg:gap-x-10 h-font mb-12 '>
                <div>
                  {/* <div className='text-[40px] font-semibold text-gradient mb-2'>
                    {inView ? <CountUP start={10} end={1} duration={3} /> : null}
                  </div> */}
                  {/* <div className='tracking-[2px]'><br /> Experience  </div> */}
                </div>
                <div>
                  <div className='text-[40px] font-semibold text-gradient mb-2 lg:flex'>
                    {inView ? <CountUP start={0} end={5} duration={3} /> : null}+
                  </div>
                  <div className='tracking-[2px]'>Projects <br />complete </div>
                </div>
                <div>
                  <div className='text-[40px] font-semibold text-gradient mb-2'>
                    {inView ? <CountUP start={0} end={6} duration={3} /> : null}+
                  </div><p></p>
                  <div className='tracking-[2px]'>Month Self Learning  <br /> and Practice Time </div>
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
                <a href='#contact' className='all-btn text-center font-semibold text-lg h-font'>Contact Me</a>
                <a href='#work' className='text-gradient h-font text-[1.3rem] '>My Portfolio</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About