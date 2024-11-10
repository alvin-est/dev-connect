import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER } from "../utils/mutations";


// const LOGIN_MUTATION = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         name
//         email
//       }
//     }
//   }
// `;

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      if (login.token) {
        // Store the token in localStorage or a global state management solution
        localStorage.setItem('token', login.token);
        // navigate('/dashboard'); // Redirect to dashboard or home page
        alert('Login successful!');
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
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      {/* Logo Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="DevDeploy Logo"
          src="/assets/devdeploy_var_logo_white_bg.jpg" // Use your homepage logo
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
              className="flex w-full justify-center rounded-md bg-[#3F94EE] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C4E736] hover:text-black transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F94EE]"
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </div>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>

        {/* Register Redirect */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-[#3F94EE] hover:text-[#EB6047]"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
