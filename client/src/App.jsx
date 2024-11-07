// src/App.jsx
import React, { useState } from 'react';
import './index.css';

import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx';

import { Outlet } from 'react-router-dom';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Define the toggleTheme function to switch themes
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
            {/* Pass toggleTheme and isDarkMode as props to Header */}
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default App;
