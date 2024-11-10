import React, { useEffect, useState } from 'react';
import skillColors from '../constants/skills';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Alvin Estado',
    role: 'DevOps Engineer',
    location: 'Sydney, AU',
    about: 'Passionate developer with 2 years of experience in web development.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    github: 'https://github.com/alvin-est',
    website: 'https://www.linkedin.com/in/alvin-estado/',
    profileImage: './src/assets/alvin_estado.jpeg',
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
    if (storedProfile) setProfile(storedProfile);
  }, []);

  return (
    <main className="bg-[#F9FAFB] font-body min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>
          {/* Profile Details */}
          <div className="mt-4">
            <h1 className="text-3xl font-heading text-gray-900">{profile.name}</h1>
            <p className="text-lg text-gray-600">{profile.role}</p>
            <p className="text-gray-500 mb-4">{profile.location}</p>
            {/* Links styled as buttons */}
            <div className="flex justify-center gap-6 mt-4">
              <a
                href={profile.github}
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow-sm font-medium transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
              <a
                href={profile.website}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm font-medium transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
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
          <p className="text-gray-600 font-body">{profile.about}</p>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-heading mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs font-body"
                style={{
                  backgroundColor: skillColors[skill] || '#E0E0E0',
                  color: skillColors[skill] === '#FFFFFF' ? '#000' : '#FFF',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-heading mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 relative">
                <h3 className="font-semibold font-heading">{project.title}</h3>
                <p className="text-gray-600 font-body">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
