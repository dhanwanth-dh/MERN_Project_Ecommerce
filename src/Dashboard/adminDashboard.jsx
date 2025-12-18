import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const ad = () => {
        navigate("/addproduct")
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-amber-950 h-50 w-100 rounded-4xl flex flex-col justify-center items-center gap-5'>
                <button onClick={ad} className='w-[90%] bg-amber-50 rounded-4xl h-10 font-form'>Add Product</button>
                <button className='w-[90%] bg-amber-50 rounded-4xl h-10 font-form'>Add Admin</button>
                <button className='w-[90%] bg-amber-50 rounded-4xl h-10 font-form'>Logout</button>
            </div>
        </div>
    )
}

export default AdminDashboard