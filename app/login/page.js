"use client"; // Important for using hooks

import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter(); // Initialize router

    const sub = () => {
        router.push('/home'); // Navigate to home page
    };

    return (
        <div className="flex flex-col justify-center items-center bg-green-300 h-[50vh] w-[50vw] p-4">
            <div className="flex flex-col gap-2 mb-4">
                <input type="email" placeholder="Enter your email" className="p-2 border border-gray-400 rounded" />
                <input type="password" placeholder="Enter your password" className="p-2 border border-gray-400 rounded" />
            </div>
            <div className="flex gap-4">
                <button type="button" onClick={sub} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Login
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Login;
