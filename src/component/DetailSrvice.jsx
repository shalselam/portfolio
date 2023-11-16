


import react from 'react'
import '../bg-images/tiktok4.png'
const DetailSrvice = () => {
    const imgs = [require('../bg-images/menu.png')
        , require('../bg-images/Screenshot (7).png')
        , require('../bg-images/snopshot.png')
        , require('../bg-images/menu.png')]
    // const images=imgs.map((img,index)=>(
    const imgsT = [
        require('../bg-images/tiktok4.png')
        , require('../bg-images/tiktok2.png')
        , require('../bg-images/tiktok3.png')
        , require('../bg-images/tiktok1.png')]


    return (
        <div class="bg-blue-900 overflow-y-scroll bg-no- bg-cover text-white h-screen bg-[url('./bg-images/blured-2.jpg')]">

            <div className='container mx-12 flex items-center justify-center  flex-col ' >
                <div className=' flex flex-col justify-center items-center'>
                    <div className=' mt-24 ' id='development'>
                        <h4 className='text-[20px] tracking-wider h-font font-semibold mb-6 text-center' >Development</h4>
                        <p className='sec-font mb-6 max-w-[450px] lg:text-[20px] lg:max-w-[600px] leading-tight'>
                            I'm an IT graduate with a primary focus on front-end development, particularly in React. While I've recently started learning backend technologies like Node.js and Express.js, my expertise and passion lie in creating engaging and user-friendly interfaces. My journey in web development has primarily revolved around crafting exceptional front-end experiences, and I'm eager to continue enhancing those skills to deliver outstanding user interfaces.
                        </p>
                    </div>
                    <div className='flex w-full gap-5  flex-wrap justify-center'>
                        {imgs.map((img, index) => {
                            return (
                                <div className=' min-w-[200px] group relative overflow-hidden border-2 border-white/60 rounded-xl  '>
                                    <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 '></div>
                                    <img className='w-[300px] object-cover aspect-auto h-[200px] group-hover:scale-125 transition-all duration-500 bg-contain' key={index} src={img} />
                                </div>)
                        })}

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' mt-24' id='development'>
                        <h4 className='text-[20px] tracking-wider h-font font-semibold mb-6 text-center' >Content Creation</h4>
                        <p className='sec-font mb-6 max-w-[450px] lg:text-[20px] lg:max-w-[600px] leading-tight'>
                            I'm a versatile content creator who occasionally dabbles in promotional content. My creative journey encompasses various forms of content,
                            from writing to visuals. While I don't specialize exclusively in promotions, I enjoy crafting persuasive messages.
                            I've had the opportunity to collaborate with diverse teams and clients, bringing concepts to life.
                            In this ever-evolving digital landscape, I remain adaptable and curious,
                            open to exploring different facets of content creation, including promotions. My aim is to deliver content that resonates and makes a positive impact.  </p>
                    </div>
                    <div className='flex w-full '>
                        {imgsT.map((img, index) => {
                            return (
                                <div className='  group relative overflow-hidden border-2 border-white/60 rounded-xl  '>
                                    <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300 '></div>
                                      <img className='w-[500px] object-cover aspect-auto h-[300px] group-hover:scale-125 transition-all duration-500 bg-co' key={index} src={img} />
                                </div>)
                        })}

                    </div>
                </div>
            </div>
        </div>
        // </div >
    )
}

export default DetailSrvice