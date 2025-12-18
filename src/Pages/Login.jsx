import React, { useState } from 'react'
import image from '../assets/Cart-1-removebg-preview-2.png'
import image2 from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Ballpit from '../Pages/Ballpit'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = async () => {
        // Checks if both email and password are filled
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }
        try {
            const res = await axios.post("https://angaadi-server.onrender.com/sps/login", { email, password });
            // localStorage.setItem("token", res.data.jwt);
            if (res.data.role == "admin") navigate("/adminDashboard")
            if (res.data.role == "public") navigate("/")
            console.log("Login successful", res.data);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='flex h-screen w-screen bg-amber-700 z-[-1]'>

            <div className='relative w-[50%] h-screen'>
                <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100%' }}>
                    <Ballpit
                        count={200}
                        gravity={0.3}
                        friction={1}
                        wallBounce={0.5}
                        followCursor={true}
                        colors={[
                            "rgb(208, 119, 17)",
                            "rgb(145, 72, 3)",
                            "rgb(145, 102, 3)",
                            "rgb(176, 95, 52)",
                            "rgb(208, 119, 17)"
                        ]}
                    />
                </div>

                <h1 className='absolute top-[20%] left-[17%] text-8xl font-ig text-shadow-lg transition-discrete duration-[2s] hover:scale-110 text-amber-50'>Angaadi</h1>
                {/* <img className='absolute left-[35%] h-[20%]' src={image2} alt="" /> */}
                <h1 className='absolute top-[38%] left-[22%] text-2xl italic font-form text-shadow-lg transition-discrete duration-[2s] hover:scale-110'>Grocery at your door step</h1>
            </div>
            <div className='bg-amber-50 h-screen w-[50%] rounded-bl-4xl rounded-tl-4xl shadow-xl/100 font-form'>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            alt="Your Company"
                            src={image2}
                            className="mx-auto h-10 w-auto"
                        />
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-orange-700 hover:text-orange-900">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={login}
                                    // type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Not a member?{' '}
                            <Link to="/signup" className="font-semibold text-orange-700 hover:text-orange-900">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login