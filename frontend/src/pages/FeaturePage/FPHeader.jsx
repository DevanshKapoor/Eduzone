import React from 'react'
import { IoChatbubbleOutline } from "react-icons/io5";
import {Link } from 'react-router-dom';

const FPHeader = () => {
  return (
    <>
    <div className='flex w-[90vw] flex-col items-center justify-around mt-5'>
        <div className='flex flex-row justify-between w-[75vw]'>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Welcome back, Devansh Kapoor!</h1>
                <p className='md:text-lg md:mt-2'>Continue your college search journey</p>
            </div>

            <Link to="/chatbot">
            <div className='bg-slate-950 flex flex-row p-4 rounded-full gap-2 items-center m-2 shadow-xl'>
                <IoChatbubbleOutline className='text-white text-3xl'/>
                
                    <p className='text-white sm:block hidden m-2 text-lg '>Chat With Counsellor</p>
                
            </div>
            </Link>

        </div>
    </div>
   </>
  )
}

export default FPHeader