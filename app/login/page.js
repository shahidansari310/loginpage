"use client"; // Important for using hooks

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        const response = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login Successful!");
            router.push("/home"); // Redirect to home page
        } else {
            alert(data.detail);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login to Your Account</h2>

                <div className="flex flex-col w-full gap-3">
                    <input type="email" placeholder="Enter your email" onChange={handleChange} name="email"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <input type="password" placeholder="Enter your password" onChange={handleChange} name="password"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        type="button"
                        onClick={handleLogin}
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
