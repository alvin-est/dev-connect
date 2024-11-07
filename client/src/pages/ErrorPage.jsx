// src/pages/ErrorPage.jsx
import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  // Use useRouteError to get details of the error if available
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-8">Something went wrong. We couldn't load the page you're looking for.</p>
      
      {/* If there's an error message, display it here */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4 max-w-md text-center">
          <p className="font-semibold">Error Details:</p>
          <pre className="text-sm">{error.statusText || error.message}</pre>
        </div>
      )}

      <a 
        href="/"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Go back to Homepage
      </a>
    </div>
  );
}

export default ErrorPage;
