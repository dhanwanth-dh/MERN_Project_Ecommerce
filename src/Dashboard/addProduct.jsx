import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image2 from '../assets/Logo.png'
import axios from 'axios'

const Addproducts = () => {
    const navigate = useNavigate()
    const [productimg, setProductImg] = useState('')
    const [productname, setProductName] = useState('')
    const [productrate, setProductRate] = useState('')
    const [productdesc, setProductDesc] = useState('')
    const [status, setStatus] = useState(false)
    const postProduct = async () => {
        try {
            await axios.post("https://angaadi-server.onrender.com/sps/addproducts", {
                imag: productimg,
                name: productname,
                rating: productrate,
                description: productdesc

            })
            setStatus(true)
            setTimeout(() => navigate("/admindashboard"), 3000);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <div className='flex flex-col h-screen w-screen bg-amber-700 items-center justify-center'>
                <div className='mt-10 bg-amber-50 h-150 w-[30%] rounded-4xl rounded-tl-4xl shadow-xl/100 font-form'>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="">
                            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                Add Product
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Image address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                            value={productimg}
                                            onChange={(e) => setProductImg(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Product Name
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                            value={productname}
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Price
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                            value={productrate}
                                            onChange={(e) => setProductRate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Description
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                                            value={productdesc}
                                            onChange={(e) => setProductDesc(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={postProduct}
                                        // type="submit"
                                        className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                    >
                                        Add product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproducts