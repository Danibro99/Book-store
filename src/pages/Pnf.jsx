import React from "react";


export default function Pnf() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 text-center">
      <div className="max-w-md">
        
        {/* GIF */}
        <img
          src='/pnf-img.gif'
          alt="Page Not Found"
          className="w-64 mx-auto mb-6"
        />

        {/* Code */}
        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>

        {/* Title */}
        <h2 className="text-2xl text-gray-600 font-semibold mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
