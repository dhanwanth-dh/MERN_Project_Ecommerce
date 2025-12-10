import React from 'react'
import image from '../assets/Cart-1-removebg-preview-2.png'
import image2 from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex h-screen w-screen bg-amber-700 z-[-1]'>
            <div className='relative w-[50%] h-screen'>
                <h1 className='absolute top-[20%] left-[17%] text-8xl font-ig text-shadow-lg animate-pulse transition-discrete duration-[2s] hover:scale-110'>Angaadi</h1>
                {/* <img className='absolute left-[35%] h-[20%]' src={image2} alt="" /> */}
                <h1 className='absolute top-[38%] left-[22%] text-2xl italic font-form text-shadow-lg transition-discrete duration-[2s] hover:scale-110'>Grocery at your door step</h1>
                <img className='absolute bottom-0 h-[50%] w-[80%]' src={image} alt="" />
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
                        <form action="#" method="POST" className="space-y-6">
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
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

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