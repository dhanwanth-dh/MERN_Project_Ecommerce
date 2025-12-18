import React, { useState } from 'react'
import image from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Navbar = ({ col }) => {
    //Search bar:
    const [visible, setVisible] = useState(false)
    const search = () => {
        if (visible == false) {
            setVisible(true)
            return;
        } else {
            setVisible(false)
        }

        alert("hiii")
    }

    return (
        <div className={`${col}`}>
            {visible && (
                <div className='flex justify-around items-center' style={{ position: 'absolute', top: '65px', backgroundImage: "-webkit-linear-gradient(rgb(208, 119, 17),rgb(229, 176, 16)", height: "70px", width: "100%" }}>
                    <input type="text" className='bg-gray-700 w-[90%] h-[60%] text-amber-50 font-form text-2xl p-5 border-amber-500 border-4 rounded-4xl' />
                    <button className='bg' ><FaSearch /></button>
                </div>
            )}
            <div className="h-10 w-screen flex  gap-10 items-center box-decoration-slice  fixed z-50">
                <div className={`flex justify-between gap-10 text-black relative left-10 ${col}`} >
                    <Link to="/products">
                        <h1>Shop</h1>
                    </Link>
                    <Link to="/about">
                        <h1>About</h1>
                    </Link>
                    {/* <Link to='/'>
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
                    </Link> */}
                </div>
                <Link to='/'>
                    <div className="h-10 w-15 absolute right-[40%] left-[48%] top-2">
                        <img src={image} alt="" />
                    </div>
                </Link>
                <div className="flex pr-5 gap-15 z-50 absolute right-10">
                    {/* <Dropdown trigger={['click']} popupRender={ddsearch}>
                        <a onClick={e => e.preventDefault()}>
                            <Space onClick={search}>
                                Search
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown> */}

                    <button onClick={search}>Search</button>
                    <Link to="/login">
                        <h1>Account</h1>
                    </Link>
                    <h1>Cart</h1>
                    {/* <Link to="/settings">
                        <h1><i className='bx bx-cog' ></i></h1>
                    </Link>

                    <Link to="/login">
                        <h1><i className='bx bxs-user-account' ></i></h1>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar