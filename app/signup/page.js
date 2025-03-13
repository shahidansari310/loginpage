"use client"
import React from 'react'

const Signup = () => {
    return (
        <div>
            <div>
                <input type="email" placeholder='enter your email' />
                <input type="text" placeholder='enter your name' />
                <input type="password" placeholder='enter your password' />
            </div>
            <div>
                <button>Signup</button>
                <button>Reset</button>
            </div>
            <div>
                Already have a account ? <a href="/Login">Login</a>
            </div>

        </div>
    )
}

export default Signup
