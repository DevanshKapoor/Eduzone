import React from 'react';
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <>
        <div className="bg-slate-900 text-zinc-200 ">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between p-6 md:py-10 gap-8 md:gap-16 border-b border-zinc-700">
            {/* About Section */}
            <div className="flex-1">
              <p className="text-3xl text-white font-semibold ">About EduZone</p>
              <p className="text-sm font-extralight mt-2">
                EduZone is your trusted partner in higher education planning. We help
                students find their perfect college match through personalized guidance
                and comprehensive resources.
              </p>
              <div className="flex gap-4 mt-4 text-lg">
              <a href="https://www.facebook.com" target='_blank'><FaFacebookF className="cursor-pointer hover:text-blue-500" /></a>
              <a href="https://www.twitter.com" target='_blank'>  <FaTwitter className="cursor-pointer hover:text-blue-400" /></a>
              <a href="https://www.linkedin.com" target='_blank'> <FaLinkedinIn className="cursor-pointer hover:text-blue-600" /></a>
              <a href="https://www.instagram.com/tushar_x_goyal" target='_blank'> <FaInstagram className="cursor-pointer hover:text-pink-400" /></a>
              </div>
            </div>
  
            {/* Quick Links Section */}
            <div className="flex-1">
              <p className="text-lg font-semibold">Quick Links</p>
              <ul className="mt-2 space-y-2 text-sm font-extralight">
                <li className="hover:text-white cursor-pointer">Compare Colleges</li>
                <li className="hover:text-white cursor-pointer">AI Chatbot</li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div className="flex-1">
              <p className="text-lg font-semibold">Contact Us</p>
              <div className="flex items-center gap-4 mt-4">
                <IoMailSharp className="text-lg" />
                <p className="text-sm font-extralight">
                    <a href="mailto:eduzone@thapar.edu">eduzone@thapar.edu</a>
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <FaPhoneAlt className="text-lg" />
                <p className="text-sm font-extralight">+91-00000-000000</p>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center text-sm py-4 bg-slate-900">
            <p>© 2024 EduZone. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
              <p className="hover:text-white cursor-pointer">Terms of Service</p>
              <p className="hover:text-white cursor-pointer">Cookie Policy</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  