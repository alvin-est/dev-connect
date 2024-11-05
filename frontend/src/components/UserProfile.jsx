
import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100 p-10">
      {/* Left Section - Profile Picture and Buttons */}
      <div className="flex flex-col items-center w-1/4 space-y-4">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-center">
          <span>Profile Picture</span>
        </div>

        {/* Edit Profile Button */}
        <button className="w-32 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
          Edit Profile
        </button>

        {/* Edit Resume Button */}
        <button className="w-32 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
          Edit Resume
        </button>
      </div>

      {/* Right Section - Form Fields */}
      <div className="flex flex-col w-3/4 space-y-6 ml-10">
        {/* Skills Section */}
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">Skills</label>
          <textarea
            className="w-full p-3 h-20 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your skills here"
          ></textarea>
        </div>

        {/* Interests Section */}
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">Interests</label>
          <textarea
            className="w-full p-3 h-20 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your interests here"
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-200">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
