
// src/App.jsx
import React, { useState } from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import './index.css';
import Homepage from './pages/Homepage.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Developers from './pages/Developers.jsx';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>

           <Header/>

            {/* Main Content */}
           {/* <Homepage /> {/* Replaced UserProfile with Homepage */}
            <UserProfile /> {/* Render UserProfile here */}

            {/* Footer */}
            <footer className="custom-footer p-4 text-center w-full border-t bg-white shadow-md dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300">
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