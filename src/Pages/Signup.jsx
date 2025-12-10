import React from 'react'
import image from '../assets/Cart-1-removebg-preview-2.png'
import image2 from '../assets/Logo.png'
const Signup = () => {
    return (
        <div className='h-screen w-screen bg-amber-700 z-[-1]'>
            <div className='flex flex-col items-center w-[100%] h-screen'>
                <div className='pt-5 pb-5'>
                    <h1 className='text-8xl font-ig text-shadow-lg animate-pulse transition-discrete duration-[2s] hover:scale-110'>Angaadi</h1>
                    {/* <img className='absolute left-[35%] h-[20%]' src={image2} alt="" /> */}
                    <h1 className='pl-7 text-2xl italic font-form text-shadow-lg transition-discrete duration-[2s] hover:scale-110'>Grocery at &nbsp;&nbsp; your door step</h1>
                    {/* <img className='absolute bottom-0 h-[50%] w-[80%]' src={image} alt="" /> */}
                </div>
                <div className='bg-amber-50 h-[75%] w-[80%] shadow-xl/100'>
                    <div className='pt-5'>
                        <img alt="SPS" src={image2} className="mx-auto h-10 w-auto" />
                    </div>
                    <div className='flex justify-between pl-5 pr-5 pt-10'>
                        <div>
                            <h1>First Name</h1>
                            <input type="text" placeholder='Enter your first name' className="w-90 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                        <div>
                            <h1>Last Name</h1>
                            <input type="text" placeholder='Enter your last name' className="w-90 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                        <div>
                            <h1>Shop Name(Optional)</h1>
                            <input type="text" placeholder='Enter your shop name(optional)' className="w-90 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                    </div>
                    <div className='w-full pl-5 pr-5 pt-10'>
                        <h1>Address</h1>
                        <div className='w-full'>
                            <input type="text" placeholder='Door No.' className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                        <div className='pt-2 w-full'>
                            <input type="text" placeholder='Street' className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                        <div className='pt-2 w-full'>
                            <input type="text" placeholder='City' className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                    </div>
                    <div className='flex justify-between pl-5 pr-5 pt-10'>
                        <div>
                            <h1>Username</h1>
                            <input type="text" placeholder='Username' className="w-90 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                        <div>
                            <h1>Password</h1>
                            <input type="text" placeholder='Password' className="w-90 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                        <div>
                            <h1>Confirm password</h1>
                            <input type="text" placeholder='Confirm password' className="w-90 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center pl-5 pr-5 pt-10'>
                        <h1>Already have an account ?<a href="">Sign in</a></h1>
                        <button className="flex w-90 justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup






// LOGO and Heading
// <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//     <img
//         alt="SPS"
//         src={image2}
//         className="mx-auto h-10 w-auto"
//     />
//     <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//         Sign in to your account
//     </h2>
// </div>



// Email input
// <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//     Email address
// </label>
// <div className="mt-2">
//     <input
//         id="email"
//         name="email"
//         type="email"
//         required
//         autoComplete="email"
//         className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
//     />
// </div>


//Password input
// <div className="flex items-center justify-between">
//     <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//         Password
//     </label>
//     <div className="text-sm">
//         <a href="#" className="font-semibold text-orange-700 hover:text-orange-900">
//             Forgot password?
//         </a>
//     </div>
// </div>
// <div className="mt-2">
//     <input
//         id="password"
//         name="password"
//         type="password"
//         required
//         autoComplete="current-password"
//         className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
//     />
// </div>

// Sign in
// <button
//     type="submit"
//     className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
// >
//     Sign in
// </button>


// Sign up anchor
// <p className="mt-10 text-center text-sm/6 text-gray-500">
//     Not a member?{' '}
//     <a href="#" className="font-semibold text-orange-700 hover:text-orange-900">
//         Sign Up
//     </a>
// </p>


// Classes and divs

//     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">


//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form action="#" method="POST" className="space-y-6">
//                 <div>

//                 </div>

//                 <div>

//                 </div>

//                 <div>

//                 </div>
//             </form>


//         </div>
//     </div>