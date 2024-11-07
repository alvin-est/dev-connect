import React, { useState } from 'react';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sam Doe',
    role: 'Full Stack Developer',
    location: 'Sydney, AU',
    about: 'Passionate developer with 2 years of experience in web development. Focused on creating user-friendly applications with modern technologies.',
    skills: 'React, Node.js, MongoDB, Express, TypeScript, Tailwind CSS', // Skills as a string
    github: 'https://github.com/johndoe',
    website: 'https://johndoe.dev',
    profileImage: './src/assets/user.JPG', // Add the actual path for the user's profile image
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with MERN stack',
        link: 'https://project.com'
      }
    ]
  });

  const handleSkillsChange = (e) => {
    setProfile({
      ...profile,
      skills: e.target.value
    });
  };

  const handleSave = () => {
    console.log("Profile saved", profile);
    // Save profile data to server or localStorage here.
  };

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      {/* Profile Header */}
      <div className="relative bg-white rounded-lg shadow-md p-8 mb-8">
        {/* Profile Image */}
        <div className="absolute top-4 left-4">
          <img
            src={profile.profileImage}
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} // Inline styles for custom size
            className="object-cover border-2 border-gray-300 shadow-sm"
          />
        </div>

        {/* Edit Profile Button */}
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
        >
          Edit Profile
        </button>

        {/* Profile Details */}
        <div className="mt-10 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <p className="text-lg text-gray-600">{profile.role}</p>
          <p className="text-gray-500 mb-4">{profile.location}</p>

          {/* Links styled as buttons */}
          <div className="flex gap-6 mt-4">
            <a 
              href={profile.github} 
              className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 transition duration-200 font-medium"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
            <a 
              href={profile.website} 
              className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-500 transition duration-200 font-medium"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Personal Website
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-gray-600">{profile.about}</p>
      </div>

      {/* Skills Section as Textarea */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <textarea
          value={profile.skills}
          onChange={handleSkillsChange}
          className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg shadow-sm resize-none"
          placeholder="Enter your skills here, separated by commas"
        ></textarea>
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
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

      {/* Save Button */}
      <div className="absolute bottom-6 left-6">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition duration-200 font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
}
