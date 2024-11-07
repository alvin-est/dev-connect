import React from 'react';

const Homepage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans justify-center">
      {/* Left Section - App Name and Description */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white shadow-md p-10">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">DevDeploy</h1>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-md">
          A platform for junior developers to showcase their skills and connect with businesses for project-based opportunities.
        </p>
        
        {/* Sign Up and Login Buttons */}
        <div className="flex space-x-4 mt-4">
          <a href="#"
             className="px-6 py-3 text-white bg-blue-500 font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
            Sign Up
          </a>
          <a href="#"
             className="px-6 py-3 text-blue-500 bg-orange-500 font-semibold rounded-lg hover:bg-orange-600 transition duration-200">
            Login
          </a>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center"
           style={{
             backgroundImage: `url('./src/assets/wallpaper.jpg')`
           }}>
      </div>
    </div>
  );
};

export default Homepage;
