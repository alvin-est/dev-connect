
import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER } from "../utils/mutations";
import { Link } from "react-router-dom";

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      if (login.token) {
        // Store the token in localStorage or a global state management solution
        localStorage.setItem('token', login.token);
        alert('Login successful!');
        navigate('/'); // Redirect to dashboard or home page
      }
    },
    onError(error) {
      console.error('Login error:', error);
      // Display an error message to the user
      alert('Login unsuccessful. Please try again.');
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      login({ variables: formState });
    }
    catch (e) {
      console.error(e);
    }
  };

  

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-[#F9FAFB]">
      {/* Body Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
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

        {/* Logo Section */}
        <img
          alt="DevDeploy Logo"
          src="/assets/updated_homepage_logo.jpg"
          className="mx-auto h-20 w-20 object-contain"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      {/* Form Section */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formState.email}
                required
                placeholder="you@example.com"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3F94EE] sm:text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required 
                onChange={handleChange} 
                value={formState.password} 
                placeholder="********"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3F94EE] sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-[#C4E736] px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-[#3F94EE] hover:text-white transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4E736]">
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </div>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>

        {/* Register Redirect */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#3F94EE] hover:text-[#EB6047]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
