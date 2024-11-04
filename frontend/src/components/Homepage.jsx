// src/components/Homepage.jsx
import React from 'react';

const Homepage = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center items-center w-1/2 p-8 border-r">
        <h1 className="text-3xl font-semibold mb-2">Welcome to DevDeploy</h1>
        <p className="text-center mb-6">
          Connect with opportunities that match your skills and availability.
        </p>

        <form className="flex flex-col items-center w-full max-w-xs">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-3 w-full border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 w-full border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <p className="text-center mt-4">
            New here? <a href="/signup" className="text-blue-500 underline">Sign In</a>
          </p>
        </form>
      </div>

      {/* Right Section - Placeholder Image */}
      <div className="flex justify-center items-center w-1/2">
  <div
    className="w-full h-full border flex justify-center items-center bg-cover bg-center"
    style={{
      backgroundImage: "url('./src/assets/wallpaper.png')",
      backgroundSize: "contain",  // Adjusts the image to fit within the container
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      backgroundPosition: "right center", // Aligns the image to the right center
    }}
  >
    {/* Optional text if needed */}
    <span className="text-gray-500">Image</span>
  </div>
</div>
    </div>
  );
};

export default Homepage;
