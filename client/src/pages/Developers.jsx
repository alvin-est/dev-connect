// src/pages/Developers.jsx
import { useState } from 'react';

const SearchIcon = () => (
  <img src="/assets/camera.png" alt="Search" className="w-5 h-5" />
);

const LocationIcon = () => (
  <img src="/assets/camera.png" alt="Location" className="w-4 h-4" />
);

export default function Developers({ onSelectDeveloper }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [developers] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Full Stack Developer',
      location: 'San Francisco, CA',
      skills: ['React', 'Node.js', 'MongoDB'],
      image: "/assets/camera.png",
    },
    // Add other developers...
  ]);

  const filteredDevelopers = developers.filter((dev) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      dev.name.toLowerCase().includes(lowercasedSearchTerm) ||
      dev.skills.some((skill) => skill.toLowerCase().includes(lowercasedSearchTerm)) ||
      dev.location.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  const handleDeveloperClick = (developerId) => {
    if (typeof onSelectDeveloper === 'function') {
      onSelectDeveloper(developerId); // Only call if onSelectDeveloper is provided
    } else {
      window.location.href = `/profile/${developerId}`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Developers</h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, skills, or location..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {filteredDevelopers.length > 0 ? (
          filteredDevelopers.map((dev) => (
            <div
              key={dev.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer w-60"
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
                    <LocationIcon />
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
  );
}
