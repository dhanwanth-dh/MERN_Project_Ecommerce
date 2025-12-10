import React from 'react';
import image from '../assets/Logo.png'
import { FaBowlRice } from "react-icons/fa6";
import { LuWheat } from "react-icons/lu";
import { BiCookie } from "react-icons/bi";
import { GiSoap, GiChocolateBar, GiPowder } from "react-icons/gi";
import { RiOilFill, RiDrinks2Fill, RiAccountPinBoxFill } from "react-icons/ri";
import { MdFoodBank } from "react-icons/md";
import { Pagination } from 'antd';
import { FaSearch } from "react-icons/fa";

const Products = () => {
    return (
        <>
            <div className='flex flex-row gap-2 h-screen w-screen bg-amber-700 p-3'>
                <div className='flex flex-col items-center h-[99%] w-60 bg-amber-50 rounded-md p-0'>
                    <div className='flex items-center justify-center w-full h-15 transition-discrete duration-[2s] hover:scale-110'>
                        <img src={image} alt="" className='h-10 w-10' />
                        <h1 className='text-2xl font-ig text-shadow-lg'>Angaadi</h1>
                    </div>
                    <p className='pt-0'>-----------------------------------</p>
                    <div className='flex-1 w-[99%] pl-1 pt-10'>
                        <ul className='flex flex-col gap-2'>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><FaBowlRice />Rice</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><LuWheat />Wheat</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><BiCookie />Biscuit</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><GiSoap />Soap</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><GiChocolateBar />Chocolates</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><RiOilFill />Oil</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><GiPowder />Masala</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><RiDrinks2Fill />Drinks</button>
                            <button className='flex items-center pl-20 border-2 w-[99%]'><MdFoodBank />Other</button>
                        </ul>
                    </div>
                    <div className='w-[99%] pl-1 pb-2'>
                        <button className='flex items-center pl-20 border-2 w-[99%]'><RiAccountPinBoxFill />Account</button>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-[90%] h-[99%]'>
                    <div className='flex gap-2 items-center justify-center h-20 w-full bg-amber-50 rounded-md'>
                        <input type="text" className='bg-white border-2 rounded-2xl w-[80%] h-15 px-3 py-1.5 font-form text-2xl' />
                        <button className='flex items-center justify-center border-2 h-15 rounded-2xl bg-white w-30'><FaSearch /></button>
                    </div>
                    <div className='relative flex-1 w-full bg-amber-50 rounded-md '>
                        <Pagination defaultCurrent={1} total={50} className='absolute bottom-2 right-125 ' />
                    </div>
                </div>
            </div>
        </>)
};
export default Products;