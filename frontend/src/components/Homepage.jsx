// src/components/Homepage.jsx
import React from 'react';

const Homepage = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100 relative">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center items-center w-1/2 p-10 border-r bg-white shadow-md relative">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DevDeploy</h1>
        <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
          Connect with opportunities that match your skills and availability.
        </p>

        <form className="flex flex-col items-center w-full max-w-sm">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
          <p className="text-gray-600 mt-6 flex items-center">
            New here? <a href="/signup" className="text-blue-500 hover:underline ml-1">Sign In</a>
            {/* Right Corner Image */}
            <img
              src="./src/assets/wallpaper.png" // Replace with your image path
              alt="Right Corner"
              style={{ marginLeft: '800px', width: '600px', height: 'auto',marginTop: '-140px' }} // Inline styles for size
            />
          </p>
        </form>
      </div>

      {/* Right Section - Placeholder Image */}
      <div
        className="flex justify-center items-center w-full md:w-1/2 bg-gray-50"
        style={{
          backgroundImage: `url('./src/assets/wallpaper.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-3/4 h-3/4 shadow-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Homepage;
