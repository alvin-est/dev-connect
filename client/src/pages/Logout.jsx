import React from 'react';

import AuthService from '../utils/auth';

/* Logout functionality here */
const Logout = () => {

    /* Call the logout function from AuthService */
    AuthService.logout();

    /* Render HTML on return below: */
    return (
        <p>Logging you out...</p>
    );
};

export default Logout;
