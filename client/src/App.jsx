
// src/App.jsx
import React, { useState } from 'react';
import './index.css';
import { Header, Footer } from './components';
import {Homepage, UserProfile, Developers} from './pages';
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