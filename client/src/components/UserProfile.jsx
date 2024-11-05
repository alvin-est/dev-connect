import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100 p-10">
    {/* Left Section - Profile Picture and Buttons */}
<div className="flex flex-col items-center w-1/4 bg-white p-6 rounded-lg shadow-md space-y-6">
  {/* Profile Picture */}
  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-300 shadow-lg mb-4">
    <img
      src=".src/assets/profile.png"  // Replace with the actual path to your image
      alt="Profile"
      className="object-cover w-full h-full"
    />
  </div>


        {/* Edit Profile and Resume Buttons */}
        <button className="w-40 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md">
          Edit Profile
        </button>
        <button className="w-40 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md">
          Edit Resume
        </button>
      </div>

      {/* Right Section - Form Fields */}
      <div className="flex flex-col w-3/4 bg-white p-10 rounded-lg shadow-md ml-10 space-y-8">
        {/* Skills Section */}
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">Skills</label>
          <textarea
            className="w-full p-4 h-24 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Enter your skills here"
          ></textarea>
        </div>

        {/* Interests Section */}
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">Interests</label>
          <textarea
            className="w-full p-4 h-24 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Enter your interests here"
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition duration-200 shadow-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
