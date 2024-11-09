import React, { useState } from "react";

const skillOptions = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Django",
  "Tailwind CSS",
  "SASS/SCSS",
  "Bootstrap",
  "TypeScript",
  "PHP",
  "Java",
  "SQL",
  "Firebase",
  "C#",
  "Jest",
  "Docker",
  "MySQL",
  "Vue.js",
  "Ruby",
  "Ruby on Rails",
  "Angular",
];

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    role: "",
    location: "",
    skills: [],
    profilePicture: null,
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle skill selection
  const handleSkillChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => {
      if (prevData.skills.includes(value)) {
        return { ...prevData, skills: prevData.skills.filter((skill) => skill !== value) };
      }
      return { ...prevData, skills: [...prevData.skills, value] };
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear error message on successful validation
    setErrorMessage("");

    console.log("Form submitted: ", formData);
    // TODO: Add logic to send the formData to the backend
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <img
          alt="DevDeploy Logo"
          src="/assets/devdeploy_var_logo_white_bg.jpg"
          className="mx-auto h-20 w-20 object-contain"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
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
          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          {/* Remaining Fields (First Name, Last Name, etc.) */}
          {/* The rest of the fields remain the same */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#3F94EE] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C4E736] hover:text-black transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
