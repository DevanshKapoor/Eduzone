import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from "./Footer";

const CollegeRecommendations = () => {
  const [preferences, setPreferences] = useState({
    major: "",
    budget: 50000,
    location: "",
    campusSize: "",
    careerGoals: "",
  });

  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);

  // Fetch data from Data.json
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debug log
        setColleges(data);
      })
      .catch((error) => console.error("Error fetching data:", error)); // Error log
  }, []);
  

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSliderChange = (e) => {
    setPreferences({ ...preferences, budget: parseInt(e.target.value) });
  };

  // Filter colleges on "Get Recommendations"
  const handleRecommendations = () => {
    console.log("Preferences:", preferences); // Debug log
    const filtered = colleges.filter((college) => {
      const matchesMajor = !preferences.major || college.engineering_branches
        ?.toLowerCase()
        .includes(preferences.major.toLowerCase());
      const matchesLocation = !preferences.location || college.location.toLowerCase().includes(preferences.location.toLowerCase());
      const matchesCampusSize = !preferences.campusSize || getCampusSize(college.campus_area_acres) === preferences.campusSize;
      const matchesBudget = college.annual_fees_inr <= preferences.budget;
  
      console.log(`Checking college: ${college.college_name}`, {
        matchesMajor,
        matchesLocation,
        matchesCampusSize,
        matchesBudget,
      });
  
      return matchesMajor && matchesLocation && matchesCampusSize && matchesBudget;
    });
  
    console.log("Filtered colleges:", filtered); // Debug log
    setFilteredColleges(filtered);
  };
  
  useEffect(() => {
    console.log("Updated filtered colleges:", filteredColleges);
  }, [filteredColleges]);
  

  const getCampusSize = (area) => {
    if (area < 100) return "Small";
    if (area < 500) return "Medium";
    return "Large";
  };

  return (
    <>
    <div className="float-left">
        <Navbar/>

    </div>
        <div className="flex flex-col items-center px-6 py-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-30 z-[-1]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 z-[-1]"></div>
      <h1 className="text-3xl font-bold mb-6">Get College Recommendations</h1>


      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mb-20">
        <h2 className="text-xl font-semibold mb-5">Your Preferences</h2>
        <form className="space-y-4">
          <label htmlFor="major" className="block  font-medium mb-1">Branch Preference</label>
          <input
            type="text"
            name="major"
            placeholder="e.g. Computer Science"
            value={preferences.major}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
          />
          <div>
            <label htmlFor="budget" className="block font-medium mb-1">
              Budget (per year)
            </label>
            <input
              type="range"
              name="budget"
              id="budget"
              min="50000"
              max="1000000"
              step="10000"
              value={preferences.budget}
              onChange={handleSliderChange}
              className="w-full"
            />
            <p className="text-right text-gray-600">Rs {preferences.budget}</p>
          </div>
          <label htmlFor="location" className="block font-medium mb-1">
              Location Preference
            </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Patiala"
            value={preferences.location}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
          />
          <div className="space-y-2">
            <label className="block font-medium mb-1">Campus Size</label>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="campusSize"
                  value="Small"
                  onChange={handleInputChange}
                />{" "}
                Small
              </label>
              <label>
                <input
                  type="radio"
                  name="campusSize"
                  value="Medium"
                  onChange={handleInputChange}
                />{" "}
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  name="campusSize"
                  value="Large"
                  onChange={handleInputChange}
                />{" "}
                Large
              </label>
            </div>
          </div>
          <label className="block font-medium mb-1">Career Goals</label>
          <input
            type="text"
            name="careerGoals"
            placeholder="e.g. Software Engineer at a tech startup"
            value={preferences.careerGoals}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
          />
        </form>
        <button
          onClick={handleRecommendations}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Get Recommendations
        </button>
      </div>

      {/* Filtered Colleges */}
      {filteredColleges.length > 0 && (
        <div className="w-full max-w-2xl bg-white mt-6 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recommended Colleges</h2>
          <ul>
            {filteredColleges.map((college, index) => (
              <li key={index} className="border-b py-2">
                <div className="flex justify-between items-center">
                  <span>{college.college_name}</span>
                  <span className="text-gray-500">
                    Rs {college.annual_fees_inr}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {college.location}, {college.state}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default CollegeRecommendations;
