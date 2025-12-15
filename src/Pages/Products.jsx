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

import DomeGallery from './Dome';
const Products = () => {
    return (
        <>
            <div style={{ width: '100vw', height: '100vh' }}>
                <DomeGallery />
            </div>





        </>)
};
export default Products;







{/* <div className='flex flex-row gap-2 h-screen w-screen bg-amber-700 p-3'>
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
            <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-2xl shadow-xl">
                <a href="#">
                    <img className="rounded-base mb-6" src="https://i.ytimg.com/vi/y_vzst8GFhk/maxresdefault.jpg" alt="product image" />
                </a>
                <div>
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                        </div>
                        <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">4.8 out of 5</span>
                    </div>
                    <a href="#">
                        <h5 className="text-xl text-heading font-semibold tracking-tight">Apple Watch Series 7 GPS, Aluminium Case, Starlight</h5>
                    </a>
                    <div className="flex items-center justify-between mt-6">
                        <span className="text-3xl font-extrabold text-heading">$599</span>
                        <button type="button" className="inline-flex items-center  text-black bg-brand hover:bg-brand-strong box-border border border-black focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                            <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" /></svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <Pagination defaultCurrent={1} total={50} className='absolute bottom-2 right-125 ' />
        </div>
    </div>
</div> */}