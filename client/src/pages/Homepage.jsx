import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main body container */}
      <div className="flex-grow flex bg-gray-50 font-body">
        {/* Left Section - App Name and Description */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white shadow-md py-10">
          {/* Logo */}
          <img
            src="/assets/devdeploy_var_logo_white_bg.jpg"
            alt="DevDeploy Logo"
            className="w-40 h-40 object-contain mt-6 mb-2"
          />

          {/* Heading */}
          <h1
            className="text-4xl font-heading text-[#3F94EE] mb-2"
            style={{
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)", // Stronger drop shadow
            }}
          >
            DevDeploy!
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-gray-600 text-center mb-2 px-6 max-w-2xl">
            A platform for junior developers to showcase their skills and
            connect with businesses for project-based opportunities.
          </p>

          {/* Sign Up and Login Buttons */}
          <div className="flex space-x-4 mt-4">
            {/* Login Button */}
            <Link
              to="/login"
              className="px-6 py-3 text-black bg-[#C4E736] font-semibold rounded-lg hover:bg-[#3F94EE] hover:text-white transition duration-200 drop-shadow-md"
            >
              Login
            </Link>
            {/* Sign Up Button */}
            <Link
              to="/register"
              className="px-6 py-3 text-white bg-[#EB6047] font-semibold rounded-lg hover:bg-[#3F94EE] hover:text-white transition duration-200 drop-shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right Section - Background Image */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/wallpaper_homepage.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Homepage;
