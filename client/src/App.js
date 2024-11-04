import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';

function App() {
  const [formToShow, setFormToShow] = useState(null); // null means no form is selected yet

  return (
    <div className="App">
      {/* Landing page buttons */}
      {!formToShow && (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => setFormToShow('signUp')}
          >
            Sign Up
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => setFormToShow('signIn')}
          >
            Login
          </button>
        </div>
      )}

      {/* Conditionally render forms based on `formToShow` state */}
      {formToShow === 'signUp' && <RegistrationForm />}
      {formToShow === 'signIn' && <SignIn />}

      {/* Optional back button to go back to the landing page */}
      {formToShow && (
        <div className="mt-4 text-center">
          <button
            className="text-blue-500 underline"
            onClick={() => setFormToShow(null)}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
