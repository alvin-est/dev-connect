import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

const Homepage = () => {
  // Is user logged in? Returns true or false
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main body container */}
      <div className="flex-grow flex bg-[#F9FAFB] font-body">
        {/* Left Section - App Name and Description */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-[#F9FAFB] shadow-md py-10">
          {/* Logo */}
          <img
            src="/assets/updated_homepage_logo.jpg" // Updated logo for homepage
            alt="DevDeploy Logo"
            className="w-32 h-32 object-contain mb-4" // Mobile: Smaller logo size
          />

          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl font-heading text-[#3F94EE] mb-4 px-4"
            style={{
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)", // Stronger drop shadow for heading
            }}
          >
            DevDeploy!
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-gray-600 text-center mb-8 px-6 max-w-xl">
            A platform for junior developers to showcase their skills and
            connect with businesses for project-based opportunities.
          </p>

          {/* Sign Up and Login Buttons */}
          {/* Conditionally render Sign Up and Login Buttons */}
          {!isLoggedIn && (
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 w-full px-6 justify-center">
              {/* Login Button */}
              <Link
                to="/login"
                className="px-6 py-3 text-black bg-[#C4E736] font-semibold rounded-lg hover:bg-[#3F94EE] hover:text-white transition duration-200 drop-shadow-md text-center"
              >
                Login
              </Link>
              {/* Sign Up Button */}
              <Link
                to="/register"
                className="px-6 py-3 text-white bg-[#EB6047] font-semibold rounded-lg hover:bg-[#3F94EE] hover:text-white transition duration-200 drop-shadow-md text-center"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Right Section - Background Image */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/wallpaper_homepage.jpg')`, // Background image only on desktop
            backgroundSize: "cover", // Ensure the image fills the container
            backgroundPosition: "center", // Center the image
          }}
        ></div>
      </div>
    </div>
  );
};

export default Homepage;
