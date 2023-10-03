import {useState} from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessge] = useState('')

  const emailSetter = (e) => {
    setEmail(e.target.value)
  }
  const messageSetter= (e) => {
    setMessge(e.target.value)
  }
  const variants = {
    hidden: { opacity: 0, x: -70 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Increase duration to slow down
  };
  return (
    <section className='py-16 section' id='contact'>
      <div className='container mx-auto'>
        <div className=' flex flex-col lg:flex-row  '>
          <motion.div
            variants={variants}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 flex justify-start items-center'
          >

            <div>
              <h4 className='text-[30px] h-font uppercase text-green-500 font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] h-font uppercase lg:text-[70px] leading-none mb-12'>Let's Work <br />Togather!</h2>
            </div>

          </motion.div>

          <motion.form
            variants={variants}
            initial={{ opacity: 0, x: 70 }}
            whileInView={'show'}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-7 p-6 items-start'>
            <input type='text' className='  h-font bg-transparent border-b py-3 outline-none w-full
             placeholder:text-white focus:border-green-500 transition-all'
              placeholder='your email' onChange={emailSetter} />
            {/* <input type='text' className=' bg-transparent border-b h-font py-3 outline-none w-full
             placeholder:text-white focus:border-green-500 transition-all'
              placeholder='your name' /> */}
            <textarea className=' bg-transparent border-b py-6 pb-24 mb-6 outline-none w-full
             placeholder:text-white h-font focus:border-green-500 transition-all' placeholder="your messaage" onChange={messageSetter} />
            {/* <button className='all-btn '>Send Message</button> */}
            <a  href={`mailto:shalommother1@gmail.com?body=${message}`} className='all-btn text-center'>Send Message</a>
          </motion.form >
        </div>
      </div>
    </section>
  )
}

export default Contact