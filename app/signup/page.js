"use client";
import React from "react";

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Your Account</h2>
                
                <div className="flex flex-col w-full gap-3">
                    <input type="email" placeholder="Enter your email" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />

                    <input type="text" placeholder="Enter your name" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />

                    <input type="password" placeholder="Enter your password" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                
                <div className="flex gap-4 mt-6">
                    <button 
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-purple-700 transition duration-300"
                    >
                        Signup
                    </button>
                    
                    <button 
                        className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-red-600 transition duration-300"
                    >
                        Reset
                    </button>
                </div>

                <div className="mt-4 text-gray-600">
                    Already have an account? 
                    <a href="/login" className="text-blue-600 hover:underline ml-1">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
