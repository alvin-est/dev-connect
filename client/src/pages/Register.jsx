import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'; // You'll need to create this file with the mutation definition

import AuthService from '../utils/auth';

import { Link } from "react-router-dom"; // Import for navigation


const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Use mutation for adding a new user
  const [addUser, { error }] = useMutation(ADD_USER);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Hit onsubmit`);


    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear error message on successful validation
    setErrorMessage("");

    // Logic to send the formData to the backend
    try {
      console.log(`Attempting mutation`);

      // Attempt to add user with GraphQL mutation
      const { data } = await addUser({
        variables: {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      });

      console.log('Auth data:', data);

      // Assuming the mutation returns a token, save it
      if (data && data.addUser.token) {
        console.log(`Saving token`);
        AuthService.login(data.addUser.token);
      } else {
        setErrorMessage('Something went wrong with registration.');
      }

      // Inform user
      alert('Registration successful!');
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'An error occurred while registering.');
      alert('Registration failed. Please try again.');
      }
    };
    // console.log("Form submitted: ", formData);


  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-[#F9FAFB]">
      {/* Logo Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
        {/* Back to Homepage Icon */}
        <Link
          to="/"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
          aria-label="Back to Homepage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>

        {/* Logo */}
        <img
          alt="DevDeploy Logo"
          src="/assets/updated_homepage_logo.jpg" // Adjusted to match the homepage logo
          className="mx-auto h-20 w-20 object-contain"
        />

        {/* Heading */}
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create Your Account
        </h2>
      </div>

      {/* Form Section */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3F94EE] focus:ring-[#3F94EE] sm:text-sm"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3F94EE] focus:ring-[#3F94EE] sm:text-sm"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3F94EE] focus:ring-[#3F94EE] sm:text-sm"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3F94EE] focus:ring-[#3F94EE] sm:text-sm"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-sm text-red-600 text-center">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#C4E736] px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-[#3F94EE] hover:text-white transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
