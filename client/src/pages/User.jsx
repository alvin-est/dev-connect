import React, { useState, useEffect } from 'react';

/* Profile page */
const User = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
  
  const [profile, setProfile] = useState({
    name: 'Tinaika Pereira',
    role: 'Data Scientist',
    location: 'Melbourne, AU',
    about: 'Data Scientist with 2 years of experience in web development.',
    skills: '',
    github: 'https://github.com/Tinaika19',
    resume: './src/assets/resume.JPG',
    profileImage: './src/assets/tinaika_pereira.jpeg',
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with MERN stack',
        link: 'https://project.com'
      }
    ]
  });

  // Load profile from localStorage on component mount
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

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
  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile.projects]);

  // Handle project deletion
  const handleDeleteProject = (indexToDelete) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      projects: prevProfile.projects.filter((_, index) => index !== indexToDelete)
    }));
  };

  return (
    <main>
      <div className="max-w-4xl mx-auto p-8 relative">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src={profile.profileImage}
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              className="object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>

          {/* Edit Profile Button */}
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
          >
            Edit Profile
          </button>

          {/* Profile Details */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-lg text-gray-600">{profile.role}</p>
            <p className="text-gray-500 mb-4">{profile.location}</p>

            {/* Links styled as buttons */}
            <div className="flex justify-center gap-6 mt-4">
              <a 
                href={profile.github} 
                className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 transition duration-200 font-medium"
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
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
}

export default User;
