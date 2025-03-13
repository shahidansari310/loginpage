import React from 'react'
export const metadata = {
    title: "Login Page",
    description: "This is the login page",
  };
  

const Login = () => {
  return (
    <div className='flex justify-center items-center bg-green-300 h-[50vh] w-[50vw]'>
      <div>
        <input type="email" placeholder='enter your email' />
        <input type="password" placeholder='enter your password' />
      </div>
      <div>
        <button>Login</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default Login
