import React, { useState } from "react";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";
import {Link } from 'react-router-dom';
import { FaRobot } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (

      <div
        className={`${
          isOpen ? "md:w-[15vw]" : "w-16"
        } hidden sm:block bg-blue-700 h-screen transition-all duration-300 z-10 pr-2 `}
      >
        {/* Toggle Button */}
        <div className="flex justify-between items-center p-5 text-white">
          <span className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>
            EduZone
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="mt-10 space-y-4">
          <li>
            <Link
              to="/features"
              className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              <FaHome size={20} />
              <span className={`${isOpen ? "ml-4" : "hidden"} text-sm sm:text-lg`}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/recommendations"
              className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              <FaUser size={20} />
              <span className={`${isOpen ? "ml-4" : "hidden"} text-sm sm:text-lg`}>
                Recommendations
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              <FaRobot size={20} />
              <span className={`${isOpen ? "ml-4" : "hidden"} text-sm sm:text-lg`}>
                Chatbot
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/compare"
              className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              <FaUser size={20} />
              <span className={`${isOpen ? "ml-4" : "hidden"} text-sm sm:text-lg`}>
                Compare Colleges
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              <CiLogin size={20} />
              <span className={`${isOpen ? "ml-4" : "hidden"} text-sm sm:text-lg`}>
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>

  );
};

export default Navbar;
