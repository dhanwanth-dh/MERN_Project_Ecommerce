import React from 'react'
import '../Pages/Dash.css'
const Dashboard = () => {
    return (
        <div className='relative text-black w-screen h-screen flex items-center justify-end'>
            <div className='absolute title right-20 flex flex-col items-center gap-10'>
                <h1 className='text-6xl font-ig text-shadow-lg'>Welcome to Angaadi...</h1>
                <p className='tile para '>Presented by SPS Groups</p>
            </div>
        </div>
    )
}

export default Dashboard