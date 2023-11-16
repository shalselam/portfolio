import React from 'react'
import Bnner from './Bnner'
import Nav from './Nav'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Work from './Work'

const Main = () => {
    return (
        <div class="bg-blue-900 overflow-y-scroll bg-no- bg-cover text-white h-screen bg-[url('./bg-images/blured-2.jpg')]">
   
            <Bnner />
            <Nav />
            <About />
            <div className='mt-[80px]'>
            <Service />
            </div>
            <Work />
            {/* <DetailSrvice/> */}
            <Contact />
        </div>
    )
}

export default Main