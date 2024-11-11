import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';


/* Profile page */
const User = () => {

    /* Getter */
    const { loading, error, data } = useQuery(GET_ME); // Fetch logged in user's details
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;



  
    return (
      <div>
        <h1>User Details</h1>
        {data.me && (
          <>
            <h2>{data.me.name}'s Profile</h2>
            <p>Name: {data.me.name}</p>
            <p>Email: {data.me.email}</p>
            <h2>More Details</h2>
            <p>Photo: {data.me.profile.photoURL}</p>
            <p>Role: {data.me.profile.role}</p>
            <p>Location: {data.me.profile.location}</p>
            <p>GitHub URL: {data.me.profile.githubURL}</p>
            <p>Resume URL: {data.me.profile.resumeURL}</p>
            {/* Skills */}
            <h2>Skills</h2>
            <ul>
            {data.me.profile.skills && data.me.profile.skills.length > 0 ? (
              data.me.profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))
            ) : (
              <li>No skills provided</li>
            )}
          </ul>
          </>
        )}
      </div>
    );



}

export default User;
