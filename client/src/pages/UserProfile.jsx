import React, { useEffect, useState } from 'react';
import skillColors from '../constants/skills';
import { useQuery, gql } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const UserProfile = () => {

  /* All other logic */
  
  const [profile, setProfile] = useState({
    name: 'Alvin Estado',
    role: 'DevOps Engineer',
    location: 'Sydney, AU',
    about: 'Passionate developer with 2 years of experience in web development.',
    skills: '',
    github: 'https://github.com/johndoe',
    resume: './src/assets/resume.JPG',
    profileImage: './src/assets/user.JPG',
    projects: [
      {
        title: 'Student Note Taker App',
        description: 'A dynamic note-taker app created using Node.js.',
        link: 'https://note-taker-h5y5.onrender.com/',
      },
    ],
  });

  // Load profile from localStorage on component mount
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  /* User Info Getter */
  const { loading, error, data } = useQuery(GET_ME);
  console.log('Succesfully fetched user data:', data);

  return (
    <main className="bg-[#F9FAFB] font-body min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src={data.me.profile.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>

          {/* Profile Details */}
          <div className="mt-4">
            <h1 className="text-3xl font-heading text-gray-900">{data.me.name}</h1>
            <p className="text-lg text-gray-600">{data.me.profile.role}</p>
            <p className="text-gray-500 mb-4">{data.me.profile.location}</p>
            {/* Links styled as buttons */}
            <div className="flex justify-center gap-6 mt-4">
              <a
                href={data.me.profile.githubURL}
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow-sm font-medium transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
              <a 
                href="./src/assets/resume.JPG" 
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-500 transition duration-200 font-medium"
                target="_blank" 
                rel="noopener noreferrer"
                download="resume.JPG"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* Edit Profile Button */}
          <div className="mt-6">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200"
              onClick={() => window.location.href = '/user'}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-heading mb-4">About</h2>
          <p className="text-gray-600 font-body">{data.me.profile.bio}</p>
        </div>

        {/* Skills Section as Textarea */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          {/* <textarea
            value={profile.skills}
            readOnly
            className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg shadow-sm resize-none bg-gray-100 cursor-not-allowed"
            placeholder="Enter your skills here, separated by commas"
          ></textarea> */}
          <ul>
            {data.me.profile.skills && data.me.profile.skills.length > 0 ? (
              data.me.profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))
            ) : (
              <li>No skills provided</li>
            )}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.projects.map((project, index) => (
              <div key={index} className="relative border rounded-lg overflow-hidden shadow-sm">
                {/* Project Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <a
                    href={project.link}
                    className="bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-500 transition duration-200 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project → 
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
