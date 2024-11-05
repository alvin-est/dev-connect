
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
            <header className="custom-header w-full flex justify-between items-center p-4 border-b shadow-md bg-white">
                <div className="flex items-center space-x-2">
                    {/* Set logo size with inline styles */}
                    <img
                        src="./src/assets/Devdeploy.jpg"
                        alt="Logo"
                        style={{ height: '40px', width: '40px' }} 
                    />
                    <h1 className="text-lg font-semibold text-gray-800">DevDeploy</h1>
                </div>
                <button
                    onClick={toggleTheme}
                    className="custom-theme-toggle border p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>

            {/* Main Content */}
            <Homepage isDarkMode={isDarkMode} />

            {/* Footer */}
            <footer className="custom-footer p-4 text-center w-full border-t bg-white shadow-md">
            <p className="text-gray-600">
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

