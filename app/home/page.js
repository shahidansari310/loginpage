import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Welcome to Your Dashboard</h1>
      <p className="text-lg mb-6 opacity-90">
        You have successfully logged in! Explore and manage your account.
      </p>
      <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Explore Now
      </button>
    </div>
  );
};

export default Home;
