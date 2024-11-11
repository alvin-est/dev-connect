import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations';
import { GET_USER_BY_EMAIL } from '../utils/queries';

/* Profile page */
const User = () => {

    /* Getter */
    const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, {
      variables: { email: '' } // Replace with logged in user's email
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;



  
    return (
      <div>
        <h1>User Details</h1>
        {data.getUserByEmail && (
          <>
            <p>Name: {data.getUserByEmail.name}</p>
            <p>Email: {data.getUserByEmail.email}</p>
            <p>ID: {data.getUserByEmail._id}</p>
          </>
        )}
      </div>
    );



}

export default User;
