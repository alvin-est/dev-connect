import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import AuthService from '../utils/auth';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* Edit page */
const Edit = () => {
    const [formState, setFormState] = useState({
        photoURL: '',
        role: '',
        location: '',
        githubURL: '',
        resumeURL: '',
        skills: ''
    });

  const navigate = useNavigate();


    const [updateProfile] = useMutation(UPDATE_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        /* Update logged in user's profile */
        try {
            // Parse skills into an array
            const skillsArray = formState.skills.split(',').map(skill => skill.trim());
            
            // Call the mutation
            const { data } = await updateProfile({
                variables: {
                    profile: {
                        photoURL: formState.photoURL,
                        role: formState.role,
                        location: formState.location,
                        githubURL: formState.githubURL,
                        resumeURL: formState.resumeURL,
                        skills: skillsArray,
                        bio: formState.bio
                    }
                }
            });
            console.log('Profile updated:', data);
            // Optionally, redirect or show success message here
            // alert('Profile updated successfully', data);

            navigate('/profile');
        } catch (e) {
            console.error('Update failed:', e);
            // Show error message to user
            alert('Profile update failed. Please try again.', e);
        }
    };
    
    return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-600">About:</label>
                    <input 
                        type="text" 
                        name="bio" 
                        value={formState.bio} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-600">Photo URL:</label>
                    <input 
                        type="text" 
                        name="photoURL" 
                        value={formState.photoURL} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-600">Role:</label>
                    <input 
                        type="text" 
                        name="role" 
                        value={formState.role} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-600">Location:</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={formState.location} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="githubURL" className="block mb-2 text-sm font-medium text-gray-600">Github URL:</label>
                    <input 
                        type="text" 
                        name="githubURL" 
                        value={formState.githubURL} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="resumeURL" className="block mb-2 text-sm font-medium text-gray-600">Resume URL:</label>
                    <input 
                        type="text" 
                        name="resumeURL" 
                        value={formState.resumeURL} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-600">Skills (comma separated):</label>
                    <input 
                        type="text" 
                        name="skills" 
                        value={formState.skills} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
                <br>
                </br>
                
            </form>
            {/* <div className="mt-4">
                <Link to="/user" className="font-semibold text-[#3F94EE] hover:text-[#EB6047]">User Details</Link>
            </div> */}
        </div>
    </div>
    );
}

export default Edit;
