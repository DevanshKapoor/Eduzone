import React from 'react';
import { FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FPHeader from './FPHeader';
import FindColleges from './FindColleges';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slideshow from './Slideshow';

const FeaturePage = () => {
  return (
    <>
      <div className="relative flex">
        {/* Blue Circles in Background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20"></div>

        {/* Main Content */}
        <Navbar />
        <div className="flex flex-col items-center gap-10 relative z-10 mb-32">
          <FPHeader />
          <Slideshow/>
          <FindColleges />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FeaturePage;
