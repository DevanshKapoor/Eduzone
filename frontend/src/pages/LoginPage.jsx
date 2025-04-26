import React, { useState } from 'react';
import { AlertCircle, Lock, User } from 'lucide-react';
import bg from '../assets/bg_landing_page.jpg';
import FeaturePage from './FeaturePage/FeaturePage';

// Sample user credentials JSON (in a real app, this would come from a backend)
const userCredentials = [
  { username: 'devansh', password: '123', name: 'Devansh Kapoor' },
  { username: 'admin', password: 'admin123', name: 'Admin User' }
];

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Find user in credentials array
    const user = userCredentials.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  // If already logged in, you might want to render a different component
  if (isLoggedIn) {
    return (
      <FeaturePage/>
    );
  }

  return (
    <div className='h-[90vh]'>

<div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-30 z-[-1]"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 z-[-1]"></div>
  
    <h1 className='text-center m-10 mb-20 font-bold text-6xl md:text-8xl text-blue-700 z-10'>EduZone</h1>
    <div className=" flex items-center justify-center ">
      
      <div className="bg-slate-100 p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">LOG IN</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="mb-4 flex items-center text-red-500">
              <AlertCircle className="mr-2" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;