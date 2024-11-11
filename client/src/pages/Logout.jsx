import React, { useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthService from '../utils/auth';

/* Logout functionality here */
const Logout = () => {

    /* Call the logout function from AuthService */
    // AuthService.logout();

    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);


    /* Render HTML on return below: */
    return (
        <p>Logging you out...</p>
    );
};

export default Logout;
