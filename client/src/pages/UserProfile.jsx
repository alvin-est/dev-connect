import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useNavigate } from "react-router-dom";

/* Profile page */
const UserProfile = () => {
  // const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    name: 'Sam Doe',
    role: 'Full Stack Developer',
    location: 'Sydney, AU',
    about: 'Passionate developer with 2 years of experience in web development.',
    skills: '',
    github: 'https://github.com/johndoe',
    website: "./src/assets/Sam.pdf",
    profileImage: './src/assets/user.JPG',
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with MERN stack',
        link: 'https://project.com'
      }
    ]
  });

  /* User Info Getter */
  const { loading, error, data } = useQuery(GET_ME); // Fetch logged in user's details

  /* Early Return - Avoids error on data load */
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if(!data?.me) {
    return (
      <div>
        <h1>User Details</h1>
        <p>No user found</p>
      </div>
    );
  }

  console.log('UserProfile.jsx:', data);

  // Load profile from localStorage on component mount
  // useEffect(() => {
    
  //   const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
  //   if (storedProfile) {
  //     setProfile(storedProfile);
  //   }
  // }, []);

  const handleSkillsChange = (e) => {
    setProfile({
      ...profile,
      skills: e.target.value
    });
  };

  const handleSave = () => {
    // Save profile data to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
    console.log("Profile saved", profile);
  };

  // Handle project addition
  const handleAddProject = () => {
    setProfile(prevProfile => ({
      ...prevProfile,
      projects: [...prevProfile.projects, newProject]
    }));
    setNewProject({ title: '', description: '', link: '' }); // Reset form
    setIsModalOpen(false); // Close modal
  };

  // Save updated projects list to localStorage
  // useEffect(() => {
  //   localStorage.setItem('userProfile', JSON.stringify(profile));
  // }, [profile.projects]);

  // Handle project deletion
  const handleDeleteProject = (indexToDelete) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      projects: prevProfile.projects.filter((_, index) => index !== indexToDelete)
    }));
  };

  /* Early Return - Avoids error on data load */
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  


  return (
    <main>
      <div className="max-w-4xl mx-auto p-8 relative">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src={data.me.profile.photoURL}
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              className="object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>

          {/* Edit Profile Button */}
          <button 
            onClick={() => navigate('/edit')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
          >
            Edit Profile
          </button>

          {/* Profile Details */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900">{data.me.name}</h1>
            <p className="text-lg text-gray-600">{data.me.profile.role}</p>
            <p className="text-gray-500 mb-4">{data.me.profile.location}</p>

            {/* Links styled as buttons */}
            <div className="flex justify-center gap-6 mt-4">
              <a 
                href={data.me.profile.githubURL} 
                className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 transition duration-200 font-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
              <a 
                href={data.me.profile.resumeURL} 
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-500 transition duration-200 font-medium"
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
          <p className="text-gray-600">{data.me.profile.bio}</p>
        </div>

        {/* Skills Section as Textarea */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          {/* <textarea
            value={data.me.profile.skills}
            onChange={handleSkillsChange}
            className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg shadow-sm resize-none"
            placeholder="Enter your skills here, separated by commas"
          ></textarea>
         */}
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
          <h2 className="text-xl font-semibold mb-4 flex justify-between">
            Projects
            <button 
  onClick={() => setIsModalOpen(true)}
  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-0.5 px-2 rounded-md shadow-sm"
>
  Add Project
</button>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.projects.map((project, index) => (
              <div key={index} className="relative border rounded-lg overflow-hidden shadow-sm">
                {/* Delete Button */}
                <button
  onClick={() => handleDeleteProject(index)}
  className="absolute top-1 right-1 bg-red-500 text-white font-bold text-xs py-0.5 px-1 rounded-full hover:bg-red-700"
>
  X
</button>
                
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

        {/* Modal for Adding New Project */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-xl font-semibold mb-4">Add New Project</h3>
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full mb-3 p-2 border border-gray-300 rounded resize-none"
              ></textarea>
              <input
                type="url"
                placeholder="Project URL"
                value={newProject.link}
                onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddProject}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="absolute bottom-9 right-9">
          {/* <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
          >
            Save
          </button> */}
        </div>
      </div>
    </main>
  );
}

export default UserProfile;