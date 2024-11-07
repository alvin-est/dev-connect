import { Link, useLocation } from 'react-router-dom';
import './../assets/css/Header.css';


function Header() {
  const currentPage = useLocation().pathname;

  return (

<header className="custom-header w-full flex justify-between items-center p-4 border-b shadow-md bg-white dark:bg-gray-800">
<div className="flex items-center space-x-2">
    {/* Set logo size with inline styles */}
    <img
        src="./src/assets/Devdeploy.jpg"
        alt="Logo"
        style={{ height: '40px', width: '40px' }} 
    />
    <h1 className="text-lg font-semibold text-gray-800 dark:text-white">DevDeploy</h1>
</div>
<button
    onClick={toggleTheme}
    className="custom-theme-toggle border p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
>
    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
</button>
</header>

);
}

export default Header;