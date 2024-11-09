import React from "react";

const Login = () => {

  

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
        <form action="#" method="POST" className="space-y-6">
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
                required
                autoComplete="email"
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
                autoComplete="current-password"
                placeholder="********"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3F94EE] sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#3F94EE] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C4E736] hover:text-black transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F94EE]"
            >
              Sign In
            </button>
          </div>
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
