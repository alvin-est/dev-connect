import React, { useState, useEffect } from 'react';

/* Profile page */
const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [otherSkill, setOtherSkill] = useState('');

  const skillOptions = [
    "HTML", "CSS", "JavaScript", "Python", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "Git", "GitHub", "Django", "Tailwind CSS", "SASS/SCSS", "Bootstrap", "TypeScript", "PHP", "Java",
    "SQL", "Firebase", "C#", "Jest", "Docker", "MySQL", "Vue.js", "Ruby", "Ruby on Rails", "Angular"
  ];

  const [profile, setProfile] = useState({
    name: 'Sam Doe',
    role: 'Full Stack Developer',
    location: 'Sydney, AU',
    about: 'Passionate developer with 2 years of experience in web development.',
    skills: [], // This will store selected skills
    github: 'https://github.com/johndoe',
    resume: './src/assets/resume.JPG',
    profileImage: './src/assets/user.JPG',
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
      setSelectedSkills(storedProfile.skills || []); // Load selected skills from profile
    }
  }, []);

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(selectedSkills.filter(skill => skill !== value));
    }
  };

  const handleOtherSkillChange = (e) => {
    setOtherSkill(e.target.value);
  };

  const handleSave = () => {
    // Save profile data to localStorage
    const updatedProfile = {
      ...profile,
      skills: [...selectedSkills, otherSkill].filter(Boolean) // Include "Other" skill if entered
    };

    setProfile(updatedProfile);
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    setIsEditing(false);
    console.log("Profile saved", updatedProfile);
  };

  const handleAddProject = () => {
    setProfile(prevProfile => ({
      ...prevProfile,
      projects: [...prevProfile.projects, newProject]
    }));
    setNewProject({ title: '', description: '', link: '' }); // Reset form
    setIsModalOpen(false); // Close modal
  };

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

        {/* Skills Section with Checkboxes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skillOptions.map((skill, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={handleSkillChange}
                  className="mr-2"
                />
                <label className="text-gray-600">{skill}</label>
              </div>
            ))}
            {/* Other Skill Option */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="otherSkillCheckbox"
                className="mr-2"
                onChange={() => setOtherSkill('')}
              />
              <label htmlFor="otherSkillCheckbox" className="text-gray-600">Other</label>
            </div>
            {otherSkill && (
              <input
                type="text"
                placeholder="Enter custom skill"
                value={otherSkill}
                onChange={handleOtherSkillChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              />
            )}
          </div>
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
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
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
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="url"
                placeholder="Project Link"
                value={newProject.link}
                onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <div className="flex justify-between">
                <button
                  onClick={handleAddProject}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow-md"
                >
                  Cancel
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
};

export default UserProfile;
