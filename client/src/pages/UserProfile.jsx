import React, { useState, useEffect } from 'react';
import skillColors from '../constants/skills';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
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

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) setProfile(storedProfile);
  }, []);

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map((skill) => skill.trim());
    setProfile({ ...profile, skills: skillsArray });
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
  };

  const handleAddProject = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      projects: [...prevProfile.projects, newProject],
    }));
    setNewProject({ title: '', description: '', link: '' });
    setIsModalOpen(false);
  };

  const handleDeleteProject = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      projects: prevProfile.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <main className="bg-[#F9FAFB] font-body min-h-screen">
      <div className="max-w-4xl mx-auto p-8 relative">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
          <div className="mt-4">
            <h1 className="text-3xl font-heading text-gray-900">{profile.name}</h1>
            <p className="text-lg text-gray-600">{profile.role}</p>
            <p className="text-gray-500 mb-4">{profile.location}</p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href={profile.github}
                className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
              <a
                href={profile.website}
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          {isEditing ? (
            <textarea
              value={profile.about}
              onChange={(e) => setProfile({ ...profile, about: e.target.value })}
              className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg"
            ></textarea>
          ) : (
            <p className="text-gray-600">{profile.about}</p>
          )}
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          {isEditing ? (
            <textarea
              value={profile.skills.join(', ')}
              onChange={handleSkillsChange}
              className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg"
            ></textarea>
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: skillColors[skill] || '#E0E0E0',
                    color: skillColors[skill] === '#FFFFFF' ? '#000' : '#FFF',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 relative">
                <button
                  onClick={() => handleDeleteProject(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                  X
                </button>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            Add Project
          </button>
        </div>
      </div>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Project</h2>
            <input
              type="text"
              placeholder="Project Title"
              className="w-full mb-2 border rounded p-2"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
            <textarea
              placeholder="Project Description"
              className="w-full mb-2 border rounded p-2"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            ></textarea>
            <input
              type="url"
              placeholder="Project Link"
              className="w-full mb-2 border rounded p-2"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black rounded px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserProfile;
