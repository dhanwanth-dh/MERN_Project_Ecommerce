import React from 'react'
import image from '../assets/Logo.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
            <div className="h-screen w-25 bg-red-400 flex flex-col justify-between items-center box-decoration-slice bg-linear-to-r from-amber-800 to-yellow-600 fixed z-50">
                <div className="h-10 w-20 pt-10 ">
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col justify-between gap-8 text-black'>
                    <Link to='/'>
                        <h1><i className='bx bxs-store'></i></h1>
                    </Link>

                    <Link to="/products">
                        <h1><i className='bx bx-baguette'></i></h1>
                    </Link>

                    <Link to="/delivery">
                        <h1><i className='bx bxs-truck' ></i></h1>
                    </Link>

                    <Link to="/deals">
                        <h1><i className='bx bxs-offer' ></i></h1>
                    </Link>

                    <Link to="/about">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="15" viewBox="0 0 24 24">
                            <path d="M 12 2 C 10.343 2 9 3.343 9 5 C 9 6.657 10.343 8 12 8 C 13.657 8 15 6.657 15 5 C 15 3.343 13.657 2 12 2 z M 9 10 A 1.0001 1.0001 0 1 0 9 12 L 10 12 L 10 20 L 9 20 A 1.0001 1.0001 0 1 0 9 22 L 15 22 A 1.0001 1.0001 0 1 0 15 20 L 14 20 L 14 11 C 14 10.448 13.552 10 13 10 L 11 10 L 9 10 z"></path>
                        </svg></h1>
                    </Link>

                    <Link to="/help">
                        <h1><i className='bx bx-help-circle'></i></h1>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Link to="/settings">
                        <h1><i className='bx bx-cog' ></i></h1>
                    </Link>

                    <Link to="/login">
                        <h1><i className='bx bxs-user-account' ></i></h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar