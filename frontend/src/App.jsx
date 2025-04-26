import { useState,useEffect } from 'react'
import LandingPage_C1 from './pages/LandingPage/LandingPage_C1'
import Landing_Page from './pages/LandingPage/Landing_Page'
import Footer from './components/Footer'
import FeaturePage from './pages/FeaturePage/FeaturePage'
import Chatbot from './pages/Chatbot/Chatbot'
import ChatApp from './pages/Chatbot/ChatbotApp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompareColleges from './pages/ComparePage/CompareColleges'
import Navbar from './components/Navbar'
import CollegeRecommendations from './components/CollegeRecommendations'
import Register from './pages/LoginPage'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'

function App() {
  useEffect(() => {
    document.title = 'EduZone';
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing_Page/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/features" element={<FeaturePage/>} />
          <Route path="/chatbot" element={<Chatbot/>}/>
          <Route path="/compare" element={<CompareColleges/>}/>
          <Route path="/recommendations" element={<CollegeRecommendations/>}/>
          <Route path="/signup" element={<Signup/>}/>

        </Routes>
      </Router>
      
       {/* <div className='flex bg-black'>
          <Navbar/>
       </div> */}
      </>
  )
}

export default App
