import React from 'react'
import { FaBookOpen } from "react-icons/fa";

const Features = ({Icon=FaBookOpen, heading="Comprehensive Database",content="Access detailed information about over 300 colleges"}) => {
  return (
    <>
        <div className='container bg-white w-[80vw] flex flex-col border shadow-md rounded-lg m-3 mx-auto p-3 pl-4'>
            <Icon className='m-1 text-3xl text-blue-700' />
            <h2 className='m-1 text-2xl font-semibold'>{heading}</h2>
            <p className='m-1 font-light'>{content}</p>
        </div>
    </>
  )
}

export default Features