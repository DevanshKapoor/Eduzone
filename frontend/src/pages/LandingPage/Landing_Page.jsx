import React from 'react'
import LandingPage_C1 from './LandingPage_C1'
import bg from '../../assets/bg_landing_page.jpg';
import Features from './Features';
import { FaBookOpen } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { IoChatbubble } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import Footer from '../../components/Footer';



const Landing_Page = () => {
  return (
    <>
        <div className="h-[90vh] w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
            <div className="absolute inset-0 bg-black bg-opacity-20 z-0 h-[90vh]"></div>
            <LandingPage_C1 />
        </div>

        <div className='mt-[9vh] flex flex-col gap-5 mb-[10vh]'>
            <Features Icon={FaBookOpen} />
            <Features Icon={IoStatsChart} heading="Compare Colleges" content="Side-by-side comparison of your top choices"/>
            <Features Icon={IoChatbubble} heading="AI Counselor" content="Get personalized guidance 24/7"/>
            <Features Icon={FaFile} heading="Application Tracking" content="Stay organized throughout your application process"/>
        </div>

        <Footer/>

    </>
  )
}

export default Landing_Page