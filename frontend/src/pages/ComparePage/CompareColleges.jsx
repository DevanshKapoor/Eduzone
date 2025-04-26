import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const CompareColleges = () => {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('');


  const colleges = [
    {
        name: 'Thapar University',
        cost: '₹20,00,000',
        avgPackage: '₹14,00,000',
        distance: '250 km',
        ranking: 15,
        campusSize: '250 acres',
        website: 'https://www.thapar.edu'
    },
    {
        name: 'National Institute of Technology, Hamirpur',
        cost: '₹10,00,000',
        avgPackage: '₹15,00,000',
        distance: '300 km',
        ranking: 20,
        campusSize: '200 acres',
        website: 'https://nith.ac.in'
    },
    {
        name: 'Indian Institute of Technology, Roorkee',
        cost: '₹8,00,000',
        avgPackage: '₹22,00,000',
        distance: '400 km',
        ranking: 7,
        campusSize: '365 acres',
        website: 'https://www.iitr.ac.in'
    },
    {
        name: 'Amity University, Noida',
        cost: '₹18,00,000',
        avgPackage: '₹7,00,000',
        distance: '20 km',
        ranking: 25,
        campusSize: '1200 acres',
        website: 'https://www.amity.edu/noida'
    },
    {
        name: 'Indian Institute of Technology, Guwahati',
        cost: '₹9,00,000',
        avgPackage: '₹21,00,000',
        distance: '2000 km',
        ranking: 6,
        campusSize: '700 acres',
        website: 'https://www.iitg.ac.in'
    },
    {
        name: 'SRM Institute of Science and Technology',
        cost: '₹15,00,000',
        avgPackage: '₹10,00,000',
        distance: '1500 km',
        ranking: 19,
        campusSize: '250 acres',
        website: 'https://www.srmist.edu.in'
    },
    {
        name: 'Indian Institute of Technology, Ropar',
        cost: '₹9,50,000',
        avgPackage: '₹19,00,000',
        distance: '250 km',
        ranking: 9,
        campusSize: '500 acres',
        website: 'https://www.iitrpr.ac.in'
    },
    {
        name: 'Shiv Nadar University',
        cost: '₹16,00,000',
        avgPackage: '₹12,00,000',
        distance: '50 km',
        ranking: 14,
        campusSize: '286 acres',
        website: 'https://snu.edu.in'
    },
    {
        name: 'Chandigarh University',
        cost: '₹10,00,000',
        avgPackage: '₹8,00,000',
        distance: '300 km',
        ranking: 30,
        campusSize: '200 acres',
        website: 'https://www.cuchd.in'
    },
    {
        name: 'Jamia Millia Islamia, Delhi',
        cost: '₹6,00,000',
        avgPackage: '₹9,00,000',
        distance: '10 km',
        ranking: 11,
        campusSize: '216 acres',
        website: 'https://www.jmi.ac.in'
    },
    {
        name: 'Lovely Professional University',
        cost: '₹12,00,000',
        avgPackage: '₹6,50,000',
        distance: '300 km',
        ranking: 29,
        campusSize: '600 acres',
        website: 'https://www.lpu.in'
    },
    {
        name: 'Indian Institute of Science, Bangalore',
        cost: '₹2,00,000',
        avgPackage: '₹28,00,000',
        distance: '2000 km',
        ranking: 1,
        campusSize: '440 acres',
        website: 'https://www.iisc.ac.in'
    },
    {
        name: 'Indian Institute of Technology, Bhubaneswar',
        cost: '₹10,00,000',
        avgPackage: '₹17,00,000',
        distance: '1800 km',
        ranking: 10,
        campusSize: '936 acres',
        website: 'https://www.iitbbs.ac.in'
    },
    {
        name: 'Indian Institute of Technology, Hyderabad',
        cost: '₹8,50,000',
        avgPackage: '₹20,00,000',
        distance: '1400 km',
        ranking: 8,
        campusSize: '576 acres',
        website: 'https://www.iith.ac.in'
    },
    {
        name: 'Indraprastha Institute of Information Technology, Delhi',
        cost: '₹10,00,000',
        avgPackage: '₹19,00,000',
        distance: '20 km',
        ranking: 17,
        campusSize: '25 acres',
        website: 'https://www.iiitd.ac.in'
    },
    {
        name: 'Bharati Vidyapeeth Deemed University',
        cost: '₹7,00,000',
        avgPackage: '₹5,50,000',
        distance: '1400 km',
        ranking: 32,
        campusSize: '85 acres',
        website: 'https://www.bvuniversity.edu.in'
    },
    {
        name: 'National Institute of Technology, Trichy',
        cost: '₹7,00,000',
        avgPackage: '₹12,00,000',
        distance: '2000 km',
        ranking: 16,
        campusSize: '800 acres',
        website: 'https://www.nitt.edu'
    },
    {
        name: 'Indian Institute of Management, Ahmedabad',
        cost: '₹25,00,000',
        avgPackage: '₹30,00,000',
        distance: '950 km',
        ranking: 3,
        campusSize: '102 acres',
        website: 'https://www.iima.ac.in'
    },
    {
        name: 'National Institute of Technology, Warangal',
        cost: '₹9,00,000',
        avgPackage: '₹13,50,000',
        distance: '1500 km',
        ranking: 18,
        campusSize: '256 acres',
        website: 'https://www.nitw.ac.in'
    },
    {
        name: 'Indian Institute of Technology, Patna',
        cost: '₹10,00,000',
        avgPackage: '₹16,00,000',
        distance: '1700 km',
        ranking: 12,
        campusSize: '501 acres',
        website: 'https://www.iitp.ac.in'
    }
];


  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedColleges = sortBy
    ? filteredColleges.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : filteredColleges;

  return (
    <>
    <div className='flex w-[100vw]'>
      <Navbar/>

    
    <div className="flex flex-col h-screen w-[80vw]">
        <div className="absolute top-24 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-30 z-[-1]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 z-[-1]"></div>

      <div className="  p-4 text-3xl md:text-4xl font-bold">
        Compare Colleges
      </div>
      <div className="p-4 flex flex-col gap-2 pt-6 items-center border-b ">
        <input
          type="text"
          placeholder="Search for a college..."
          className="flex-1 border rounded-lg p-2 mr-2 w-[60vw]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className='text-xl font-semibold'>Sort Colleges</div>
        <div className="flex space-x-2 items-center">
            
          <button
            className={`px-4 py-2 rounded-lg ${
              sortBy === 'cost' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSortBy('cost')}
          >
            Cost
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              sortBy === 'avgPackage' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSortBy('avgPackage')}
          >
            Package
          </button>

          <button
            className={`px-4 py-2 rounded-lg ${
              sortBy === 'campusSize' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSortBy('campusSize')}
          >
            Campus Size
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 ">
        {sortedColleges.map((college, index) => (
          <div
            key={index}
            className="bg-white m-4 rounded-lg shadow-md mb-4"
          >
            <div className="text-lg md:text-xl font-bold bg-blue-700 p-4 text-white rounded-lg">{college.name}</div>
             <div className="grid grid-cols-2 gap-4">
              <div className='p-4'>
                <p className="p-2"><span className='font-semibold'>Cost</span> {college.cost}</p>
                <p className="p-2"><span className='font-semibold'>Avg. Package:</span> {college.avgPackage}</p>
                <p className="p-2"><span className='font-semibold'>Campus Size:</span>  {college.campusSize}</p>
              </div>
            </div>
            <div className='flex justify-center'>
              <a href={college.website} target="_blank">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-4">
              View College Website
            </button>
              </a>

            </div>
          </div>
        ))}
      
      </div>
      
    </div>
    </div>
    </>
  );
};

export default CompareColleges;