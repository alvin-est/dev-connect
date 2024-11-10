import React, { useState } from 'react';

/* Developers page */
const Developers = ({ onSelectDeveloper }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [developers] = useState([
    {
      id: 1,
      name: 'Alex Sexwale',
      role: 'Full Stack Developer',
      location: 'Sydney, AU',
      skills: ['React', 'Node.js', 'MongoDB'],
      image: './src/assets/alex_sexwale.jpeg',
    },
    {
      id: 2,
      name: 'Tristan Kennedy',
      role: 'Frontend Developer',
      location: 'Sydney, AU',
      skills: ['React', 'TypeScript', 'Tailwind'],
      image: './src/assets/tristan_kennedy.jpeg',
    },
    {
      id: 3,
      name: 'June Li',
      role: 'Backend Developer',
      location: 'Perth, AU',
      skills: ['Python', 'Django', 'PostgreSQL'],
      image: './src/assets/june_li.jpeg',
    },
    {
      id: 4,
      name: 'Tinaika Pereira',
      role: 'Data Scientist',
      location: 'Melbourne, AU',
      skills: ['python', 'ML', 'Pandas'],
      image: './src/assets/tinaika_pereira.jpeg',
    },
    {
      id: 5,
      name: 'Benjamin Rice',
      role: 'Mobile App Developer',
      location: 'Brisbane, AU',
      skills: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin '],
      image: './src/assets/benjamin_rice.jpeg',
    },
    {
      id: 6,
      name: 'Alvin Estado',
      role: 'DevOps Engineer',
      location: 'Perth, AU',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
      image: './src/assets/alvin_estado.jpeg',
    },
    {
      id: 7,
      name: 'Kate Stapley',
      role: 'UX/UI Developer',
      location: 'Sydney, AU',
      skills: ['React', 'Figma', 'CSS'],
      image: './src/assets/kate_stapley.jpeg',
    },
    {
      id: 8,
      name: 'Kevin Vongmany',
      role: 'Data Analyst',
      location: 'Melbourne, AU',
      skills: ['SQL', 'R', 'Google Analytics'],
      image: './src/assets/kevin_vongmany.jpeg',
    },
    {
      id: 9,
      name: 'Cameron Beattie',
      role: 'Blockchain Developer',
      location: 'Brisbane, AU',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Node.js'],
      image: './src/assets/cameron_beattie.jpeg',
    },
    {
      id: 10,
      name: 'Wendy Xiao',
      role: 'SaaS Product Manager',
      location: 'Perth, AU',
      skills: ['Agile', 'Scrum', 'Product Development', 'User Stories', 'Roadmapping'],
      image: './src/assets/wendy_xiao.jpeg',
    },
    {
      id: 11,  // Ensure the ID is unique
      name: 'Sam Doe',
      role: 'Full Stack Developer',
      location: 'Sydney, AU',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
      image: './src/assets/user.JPG',  // Replace with Sam Doe's profile image path
    },
  ]);

  // Handle filtering developers based on search term
  const filteredDevelopers = developers.filter((dev) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      dev.name.toLowerCase().includes(lowercasedSearchTerm) ||
      dev.skills.some((skill) => skill.toLowerCase().includes(lowercasedSearchTerm)) ||
      dev.location.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  const handleDeveloperClick = (developerId) => {
    if (developerId === 11) {
      window.location.href = `/profile/${developerId}?viewMode=true`;
    } else {
      window.location.href = `/profile/${developerId}`;
    }
  };

  /* Render HTML on return below: */
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Developers</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, skills, or location..."
              className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredDevelopers.length > 0 ? (
            filteredDevelopers.map((dev) => (
              <div
                key={dev.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleDeveloperClick(dev.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleDeveloperClick(dev.id);
                  }
                }}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">{dev.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{dev.role}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                      {/* Remove Location Icon and Text */}
                      <span>{dev.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {dev.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No developers found matching your search criteria.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Developers;
