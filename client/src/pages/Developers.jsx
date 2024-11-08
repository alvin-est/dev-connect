import React, { useState } from 'react';

/* Developers page */
const Developers = ({ onSelectDeveloper }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [developers] = useState([
    {
      id: 1,
      name: 'Carlos Rivera',
      role: 'Full Stack Developer',
      location: 'Melbourne, AU',
      skills: ['React', 'Node.js', 'MongoDB'],
      image: './src/assets/carlos.JPG',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Frontend Developer',
      location: 'Sydney, AU',
      skills: ['React', 'TypeScript', 'Tailwind'],
      image: './src/assets/person2.jpg',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Backend Developer',
      location: 'Perth, AU',
      skills: ['Python', 'Django', 'PostgreSQL'],
      image: './src/assets/mike.jpg',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'UI/UX Developer',
      location: 'Melbourne, AU',
      skills: ['React', 'Figma', 'CSS'],
      image: './src/assets/sara.jpg',
    },
    {
      id: 5,
      name: 'John David',
      role: 'Mobile App Developer',
      location: 'Brisbane, AU',
      skills: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin '],
      image: './src/assets/person3.jpg',
    },
    {
      id: 6,
      name: 'Priya Patel',
      role: 'DevOps Engineer',
      location: 'Perth, AU',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
      image: './src/assets/priya.JPG',
    },
    {
      id: 7,
      name: 'Emily Chen',
      role: 'Data Scientist',
      location: 'Sydney, AU',
      skills: ['Python', 'ML', 'Pandas'],
      image: './src/assets/emily.png',
    },
    {
      id: 8,
      name: 'William Page',
      role: 'Data Analyst',
      location: 'Melbourne, AU',
      skills: ['SQL', 'R', 'Google Analytics'],
      image: './src/assets/william.JPG',
    },
    {
      id: 9,
      name: 'Sophia Rossi',
      role: 'Blockchain Developer',
      location: 'Brisbane, AU',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Node.js'],
      image: './src/assets/sphie.JPG',
    },
    {
      id: 10,
      name: 'Lucas Nguyen',
      role: 'SaaS Product Manager',
      location: 'Perth, AU',
      skills: ['Agile', 'Scrum', 'Product Development', 'User Stories', 'Roadmapping'],
      image: './src/assets/lucas.jpg',
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
    if (onSelectDeveloper) {
      onSelectDeveloper(developerId);
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
