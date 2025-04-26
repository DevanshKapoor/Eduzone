import React from 'react'
import { FaChartBar } from "react-icons/fa";
import {Link } from 'react-router-dom';

const FindColleges = () => {
  return (
    <>
        <div className='flex flex-col border w-[75vw] p-7 pb-14 rounded-3xl border-gray-950 bg-white '>
            <div>
                <p className='font-semibold text-2xl md:text-3xl '>Find Colleges</p>
                <p className='text-md'>Explore and compare schools</p>

                <div className='flex flex-col justify-center items-center mt-6 gap-2 md:text-lg'>
                    
                    <Link to="/recommendations">
                        <div className="w-[55vw] container text-center border border-gray-950 font-semibold p-3 rounded-full shadow-md hover:bg-slate-100 md:text-xl ">Get College Recommendations</div>
                    </Link>

                    <Link to="/compare">
                        <div className="w-[55vw] container border flex justify-center items-center gap-2 p-3 border-gray-950 rounded-full shadow-md hover:bg-slate-100">
                        <FaChartBar />
                        <p className=' font-semibold md:text-xl'>Compare Colleges</p>
                        </div>
                    </Link>
                    
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default FindColleges