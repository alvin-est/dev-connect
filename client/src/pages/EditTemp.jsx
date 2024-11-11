import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import AuthService from '../utils/auth';

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

    // Use Apollo's useMutation hook
    const [updateProfile, { error }] = useMutation(UPDATE_PROFILE, {
        // Update the local cache after mutation
        update(cache, { data: { updateProfile } }) {
            cache.writeQuery({
                query: GET_ME,
                data: { me: updateProfile }
            });
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateProfile({
                variables: { profile: formState }
            });
            // Optionally, redirect or show success message
            alert('Profile updated successfully!');
        } catch (e) {
            console.error('Error updating profile:', e);
            if (error) alert(error.message);
        }
    };

    return (
    <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
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
        </form>
    </div>
    );
}

export default Edit;
