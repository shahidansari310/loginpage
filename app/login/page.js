"use client"; // Important for using hooks

import React from "react";
import { useRouter,useState } from "next/navigation";

// const [form, setform] = useState("")

const Login = () => {
    const router = useRouter(); // Initialize router

    const sub = () => {
        router.push("/home"); // Navigate to home page
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login to Your Account</h2>
                
                <div className="flex flex-col w-full gap-3">
                    <input type="email" placeholder="Enter your email" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    
                    <input type="password" placeholder="Enter your password" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                
                <div className="flex gap-4 mt-6">
                    <button 
                        type="button" 
                        onClick={sub} 
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                    
                    <button 
                    type="reset"
                        className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-red-600 transition duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
