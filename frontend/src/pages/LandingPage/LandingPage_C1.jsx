import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link } from 'react-router-dom';

const LandingPage_C1 = () => {
  return (
    <>

    <div className='relative flex flex-col justify-center items-center h-[90vh] z-10'>
        <div className='flex flex-col m-10 gap-2 md:gap-3'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-md'>Your Future Starts Here</h1>
            <div className='flex border justify-between rounded-lg gap-5 md:w-[700px] lg:w-[850px] bg-white shadow-lg'>
                <p className="text-xl text-stone-400 m-2">Explore more than 300 colleges on EduZone</p>
                <div className='bg-blue-700 w-12 flex justify-center items-center rounded-r-lg'><FaSearch className='text-gray-100 text-2xl'/></div>
            </div>
        </div>

     <Link to="/login">
        <button className='border  text-blue-700 rounded-lg h-10 w-32 md:h-16 md:w-44 sm:text-xl md:2xl font-semibold text-md bg-white shadow-xl '>Get Started</button>
     </Link>   
    

    </div>

        
    </>
  )

}
export default LandingPage_C1