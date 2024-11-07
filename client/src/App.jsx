
// src/App.jsx
import React, { useState } from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import './index.css';
//import Homepage from './components/Homepage.jsx';
import UserProfile from './components/UserProfile.jsx';
//import Developers from './components/Developers.jsx';

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
           <Homepage /> {/* Replaced UserProfile with Homepage*/}

            {/* <UserProfile /> Render UserProfile here */}
      < Footer/>
        </div>
    );
}

export default App;