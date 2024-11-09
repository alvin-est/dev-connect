import React from 'react';

/* Homepage */
const Homepage = () => {
  return (
    <main>
      <div className="flex min-h-screen bg-gray-50 font-body justify-center">
        {/* Left Section - App Name and Description */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white shadow-md p-10">
          {/* Heading */}
          <h1 className="text-5xl font-heading text-[#042d62] mb-4 drop-shadow-md">
            DevDeploy!
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-md">
            A platform for junior developers to showcase their skills and connect with businesses for project-based opportunities.
          </p>
          
          {/* Sign Up and Login Buttons */}
          <div className="flex space-x-4 mt-4">
            {/* Login Button */}
            <a
              href="#"
              className="px-6 py-3 text-black bg-[#C4E736] font-semibold rounded-lg hover:bg-[#EB6047] hover:text-white transition duration-200 drop-shadow-md"
            >
              Login
            </a>
            {/* Sign Up Button */}
            <a
              href="#"
              className="px-6 py-3 text-white bg-[#3F94EE] font-semibold rounded-lg hover:bg-[#EB6047] hover:text-white transition duration-200 drop-shadow-md"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Right Section - Background Image */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/wallpaper_homepage.jpg')`, // Adjust path for the public folder
          }}
        ></div>
      </div>
    </main>
  );
};

export default Homepage;

