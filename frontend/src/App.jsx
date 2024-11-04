// src/App.jsx
import React, { useState } from 'react';
import './index.css';
import Homepage from './components/Homepage.jsx';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle('dark');
    };
  
    return (
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
        {/* Header */}
        <header className="custom-header w-full flex justify-between items-center p-2 border-b">
          <div className="flex items-center">
            <img src="./src/assets/Devdeploy.jpg" alt="Logo" className="h-4 mr-2" /> {/* Adjusted thumbnail size */}
            <h1 className="text-xl font-bold">DevDeploy</h1>
          </div>
          <button
            onClick={toggleTheme}
            className="custom-theme-toggle border p-2 rounded"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
  
        {/* Main Content */}
        <Homepage />
  
        {/* Footer */}
        <footer className="custom-footer p-8 text-center w-full border-t">
          <p>
            &copy; 2024
            <a href="https://github.com/alvin-est" target="_blank" className="text-blue-500 hover:underline"> Alvin</a>,
            <a href="https://github.com/cameron-profile" target="_blank" className="text-blue-500 hover:underline"> Cameron</a>,
            <a href="https://github.com/tanaika-profile" target="_blank" className="text-blue-500 hover:underline"> Tanaika</a> &amp;
            <a href="https://github.com/KateHanSta17" target="_blank" className="text-blue-500 hover:underline"> Kate</a>
          </p>
        </footer>
      </div>
    );
  }
  
  export default App;