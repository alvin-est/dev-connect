
// src/App.jsx
import React, { useState } from 'react';
import './index.css';
import Header from './src/components/Header.jsx';
import Footer from './src/components/Footer.jsx';
import Homepage from './pages/Homepage.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Developers from './pages/Developers.jsx';
import { Outlet } from 'react-router-dom';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
        < Header/>

            <main>
                <Outlet/>
            </main>

        <Footer/>
        </div>
    );
}

export default App;