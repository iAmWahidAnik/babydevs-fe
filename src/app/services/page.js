import React from 'react'
import { FaCode, FaAppStore } from 'react-icons/fa'
import { GrCloudComputer } from 'react-icons/gr'
import { FaChartColumn } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md'
import { LuLayoutDashboard } from 'react-icons/lu'

const page = () => {
  return (
    // <div className='common-width backdrop-blur-md bg-white/30 text-white rounded-b-sm p-5'>
    //     <p className='text-3xl text-center russo'>Our Services</p>
    //     <div className='h-2 bg-white max-w-32 mx-auto my-3 rounded'></div>
    // </div>
    <div className='common-width backdrop-blur-md bg-white/30 text-white rounded-b-sm p-5'>
      <div className='my-10'>
        <p className='text-5xl text-center russo uppercase'>Our Services</p>
        <div className='h-2 bg-white max-w-32 mx-auto my-3 rounded'></div>
      </div>

      {/* cards */}
      <div className='grid grid-cols-3 gap-5'>
        <div className='backdrop-blur-md bg-black/30 rounded-md shadow-md shadow-green-400 hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
          <p className='text-6xl russo text-green-200 opacity-'>01</p>
          <div className='p-5'>
            <div>
              <FaCode className='text-5xl mx-auto' />
            </div>
            <p className='text-center text-xl russo tracking-wider my-3'>
              Web Development
            </p>
            <div className='px-5'>
              <p className='text-justify text-sm lexend'>
                Transform your online presence with our expert web development
                services. We craft responsive, user-friendly websites tailored
                to your business needs, ensuring seamless functionality and
                stunning design. Choose us for innovative solutions, reliable
                performance, and exceptional client support.
              </p>
            </div>
            <div className='w-full text-center'>
              <button className='russo px-4 py-2 backdrop-blur-md bg-white bg-opacity-30 text-green-200 tracking-wider border-green-500 border-[1px] border-opacity-50 rounded-md my-5 hover:translate-x-2 transition-all duration-500'>
                Interested
              </button>
            </div>
          </div>
        </div>
        <div className='backdrop-blur-md bg-black/30 rounded-md shadow-md shadow-green-400 hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
          <p className='text-6xl russo text-green-200 opacity-'>02</p>
          <div className='p-5'>
            <div>
              <GrCloudComputer className='text-5xl mx-auto' />
            </div>
            <p className='text-center text-xl russo tracking-wider my-3'>
              Software Development
            </p>
            <div className='px-5'>
              <p className='text-justify text-sm lexend'>
              Empower your business with our custom software development services. We deliver innovative, scalable, and user-centric software solutions designed to meet your unique challenges. Trust us for quality, efficiency, and unmatched technical expertise.
              </p>
            </div>
            <div className='w-full text-center'>
              <button className='russo px-4 py-2 backdrop-blur-md bg-white bg-opacity-30 text-green-200 tracking-wider border-green-500 border-[1px] border-opacity-50 rounded-md my-5 hover:translate-x-2 transition-all duration-500'>
                Interested
              </button>
            </div>
          </div>
        </div>
        <div className='backdrop-blur-md bg-black/30 rounded-md shadow-md shadow-green-400 hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
          <p className='text-6xl russo text-green-200 opacity-'>03</p>
          <div className='p-5'>
            <div>
              <FaAppStore className='text-5xl mx-auto' />
            </div>
            <p className='text-center text-xl russo tracking-wider my-3'>
              App Development
            </p>
            <div className='px-5'>
              <p className='text-justify text-sm lexend'>
              Transform your ideas into reality with our app development services. We create user-friendly, high-performance apps tailored to your needs, ensuring seamless functionality and exceptional user experiences. Choose us for innovation, reliability, and expertise in mobile solutions.
              </p>
            </div>
            <div className='w-full text-center'>
              <button className='russo px-4 py-2 backdrop-blur-md bg-white bg-opacity-30 text-green-200 tracking-wider border-green-500 border-[1px] border-opacity-50 rounded-md my-5 hover:translate-x-2 transition-all duration-500'>
                Interested
              </button>
            </div>
          </div>
        </div>
        <div className='backdrop-blur-md bg-black/30 rounded-md shadow-md shadow-green-400 hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
          <p className='text-6xl russo text-green-200 opacity-'>04</p>
          <div className='p-5'>
            <div>
              <LuLayoutDashboard className='text-5xl mx-auto' />
            </div>
            <p className='text-center text-xl russo tracking-wider my-3'>
              UI/UX
            </p>
            <div className='px-5'>
              <p className='text-justify text-sm lexend'>
              Elevate your digital presence with our exceptional UI/UX design services. We craft intuitive, visually stunning interfaces that ensure seamless navigation and a memorable user experience. Trust us to deliver designs that captivate and engage your audience.
              </p>
            </div>
            <div className='w-full text-center'>
              <button className='russo px-4 py-2 backdrop-blur-md bg-white bg-opacity-30 text-green-200 tracking-wider border-green-500 border-[1px] border-opacity-50 rounded-md my-5 hover:translate-x-2 transition-all duration-500'>
                Interested
              </button>
            </div>
          </div>
        </div>
        <div className='backdrop-blur-md bg-black/30 rounded-md shadow-md shadow-green-400 hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
          <p className='text-6xl russo text-green-200 opacity-'>05</p>
          <div className='p-5'>
            <div>
              <FaChartColumn className='text-5xl mx-auto' />
            </div>
            <p className='text-center text-xl russo tracking-wider my-3'>
              Digital Marketing
            </p>
            <div className='px-5'>
              <p className='text-justify text-sm lexend'>
              Boost your online presence with our cutting-edge digital marketing services. From SEO to social media strategies, we help your brand reach the right audience and drive impactful results. Choose us to grow your business in the digital landscape.
              </p>
            </div>
            <div className='w-full text-center'>
              <button className='russo px-4 py-2 backdrop-blur-md bg-white bg-opacity-30 text-green-200 tracking-wider border-green-500 border-[1px] border-opacity-50 rounded-md my-5 hover:translate-x-2 transition-all duration-500'>
                Interested
              </button>
            </div>
          </div>
        </div>
        <div className='backdrop-blur-md bg-black/30 rounded-md shadow-md shadow-green-400 hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
          <p className='text-6xl russo text-green-200 opacity-'>06</p>
          <div className='p-5'>
            <div>
              <MdOutlineDesignServices className='text-5xl mx-auto' />
            </div>
            <p className='text-center text-xl russo tracking-wider my-3'>
              Design Solution
            </p>
            <div className='px-5'>
              <p className='text-justify text-sm lexend'>
              Bring your brand to life with our professional graphic design solutions. From logos to marketing materials, we craft visuals that captivate and communicate effectively. Choose us for designs that make a lasting impression.
              </p>
            </div>
            <div className='w-full text-center'>
              <button className='russo px-4 py-2 backdrop-blur-md bg-white bg-opacity-30 text-green-200 tracking-wider border-green-500 border-[1px] border-opacity-50 rounded-md my-5 hover:translate-x-2 transition-all duration-500'>
                Interested
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
