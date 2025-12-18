import React from 'react'
import '../Pages/Dash.css'
import Threads from './Threads'


const Dashboard = () => {
    return (
        <>
            <Threads
                amplitude={1.5}
                distance={0}
                enableMouseInteraction={true}
                className="back"
            />
            <div className='title text-black w-[95%] h-screen flex justify-center items-center -z-2' >
                {/* style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }} */}
                <div className='pl-20 fixed  items-center justify-center flex flex-col gap-10 -z-2'>
                    <h1 className='text-6xl title font-ig text-shadow-lg inline'>Welcome to Angaadi...</h1>
                    <p className='para'>Presented by SPS Groups</p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='pt-20 flex flex-col gap-20 justify-center items-center h-[110vh] w-full bg-amber-50 rounded-t-4xl'>
                    {/* <div className='flex justify-between gap-20'>
                        <div className='flex flex-col gap-5 items-center  h-80 w-100 rounded-4xl shadow-xl/100 transition-discrete duration-[1.5s] hover:scale-110'>
                            <img src={prodimage} alt="@image" className='h-60 w-full rounded-t-3xl' />
                            <h1 className='font-form'>Explore Products</h1>
                        </div>
                        <div className='flex flex-col gap-5 items-center h-80 w-100 rounded-4xl shadow-xl/100 transition-discrete duration-[1.5s] hover:scale-110'>
                            <img src={dealsimage} alt="@image" className='h-60 w-full rounded-t-3xl' />
                            <h1 className='font-form'>Explore deals</h1>
                        </div>
                        <div className='flex flex-col gap-5 items-center h-80 w-100 rounded-4xl shadow-xl/100 transition-discrete duration-[1.5s] hover:scale-110'>
                            <img src={aboutimg} alt="@image" className='h-60 w-full rounded-t-3xl' />
                            <h1 className='font-form'>About the company</h1>
                        </div>
                    </div>
                    <div className='flex justify-around gap-40'>
                        <div className='flex flex-col gap-5 items-center h-80 w-100 rounded-4xl shadow-xl/100 transition-discrete duration-[1.5s] hover:scale-110'>
                            <img src={cust} alt="@image" className='h-60 w-full rounded-t-3xl' />
                            <h1 className='font-form'>Customer Service</h1>
                        </div>
                        <div className='flex flex-col gap-5 items-center h-80 w-100 rounded-4xl shadow-xl/100 transition-discrete duration-[1.5s] hover:scale-110'>
                            <img src={sign} alt="@image" className='h-60 w-full rounded-t-3xl' />
                            <h1 className='font-form'>Sign in</h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Dashboard