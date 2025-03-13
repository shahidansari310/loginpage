"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold mb-6 animate-fadeIn">Welcome to Our Platform</h1>
      <p className="text-lg opacity-90 mb-8">Join us today and explore the amazing features.</p>

      <div className="flex gap-6">
        <button 
          onClick={() => router.push('/login')} 
          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          Login
        </button>

        <button 
          onClick={() => router.push('/signup')} 
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
