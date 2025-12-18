import React from 'react'
import img1 from '../assets/Logo.png'
import Particles from './Particles';
// Navbar should change color when it comes to this page
const About = () => {
    return (
        <div className='relative w-full h-[400vh] bg-black'>
            <div className='absolute inset-0 z-0 h-full'>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={1000}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="w-full pt-50 flex flex-col">
                <div className='inset-ring-amber-50 w-full h-100 flex text-amber-50 shadow-xl/100'>
                    <div>
                        <h1 className='font-form text-5xl'>SPS GROUPS</h1>
                        <p className='font-form'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur nesciunt fuga odit rerum est dolorum numquam quos omnis. Repudiandae cum velit facilis officiis aut provident unde quaerat distinctio, iste libero? Perspiciatis aliquam iste quas, non similique officia porro beatae ipsam quae. Quidem animi reiciendis deleniti nobis doloribus at? Error tempora voluptatibus accusantium tempore facere, aliquam amet iste quo similique ullam in nihil perspiciatis esse quasi sunt nulla quisquam minus ut at ipsum maxime odio, modi velit numquam. Porro veniam asperiores ullam animi hic dolor, sapiente quos libero maiores quae accusamus debitis dolore laudantium. Quaerat dignissimos consequuntur molestiae odit a.</p>
                    </div>
                    <img src={img1} alt="logo" className='h-60 pl-10 pr-10 pt-10' />
                </div>
            </div>
            <div className="w-full pt-40 flex flex-col">
                <div className='inset-ring-amber-50 w-full h-100 flex text-amber-50 shadow-xl/100'>
                    <img src={img1} alt="logo" className='h-60 pl-10 pr-10 pt-10' />
                    <div>
                        <h1 className='font-form text-5xl'>SPS GROUPS</h1>
                        <p className='font-form'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur nesciunt fuga odit rerum est dolorum numquam quos omnis. Repudiandae cum velit facilis officiis aut provident unde quaerat distinctio, iste libero? Perspiciatis aliquam iste quas, non similique officia porro beatae ipsam quae. Quidem animi reiciendis deleniti nobis doloribus at? Error tempora voluptatibus accusantium tempore facere, aliquam amet iste quo similique ullam in nihil perspiciatis esse quasi sunt nulla quisquam minus ut at ipsum maxime odio, modi velit numquam. Porro veniam asperiores ullam animi hic dolor, sapiente quos libero maiores quae accusamus debitis dolore laudantium. Quaerat dignissimos consequuntur molestiae odit a.</p>
                    </div>
                </div>
            </div>
            <div className="w-full pt-40 flex flex-col">
                <div className='inset-ring-amber-50 w-full h-100 flex text-amber-50 shadow-xl/100'>
                    <div>
                        <h1 className='font-form text-5xl'>SPS GROUPS</h1>
                        <p className='font-form'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur nesciunt fuga odit rerum est dolorum numquam quos omnis. Repudiandae cum velit facilis officiis aut provident unde quaerat distinctio, iste libero? Perspiciatis aliquam iste quas, non similique officia porro beatae ipsam quae. Quidem animi reiciendis deleniti nobis doloribus at? Error tempora voluptatibus accusantium tempore facere, aliquam amet iste quo similique ullam in nihil perspiciatis esse quasi sunt nulla quisquam minus ut at ipsum maxime odio, modi velit numquam. Porro veniam asperiores ullam animi hic dolor, sapiente quos libero maiores quae accusamus debitis dolore laudantium. Quaerat dignissimos consequuntur molestiae odit a.</p>
                    </div>
                    <img src={img1} alt="logo" className='h-60 pl-10 pr-10 pt-10' />
                </div>
            </div>
            <div className="w-full pt-40 flex flex-col">
                <div className='inset-ring-amber-50 w-full h-100 flex text-amber-50 shadow-xl/100'>
                    <img src={img1} alt="logo" className='h-60 pl-10 pr-10 pt-10' />
                    <div>
                        <h1 className='font-form text-5xl'>SPS GROUPS</h1>
                        <p className='font-form'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur nesciunt fuga odit rerum est dolorum numquam quos omnis. Repudiandae cum velit facilis officiis aut provident unde quaerat distinctio, iste libero? Perspiciatis aliquam iste quas, non similique officia porro beatae ipsam quae. Quidem animi reiciendis deleniti nobis doloribus at? Error tempora voluptatibus accusantium tempore facere, aliquam amet iste quo similique ullam in nihil perspiciatis esse quasi sunt nulla quisquam minus ut at ipsum maxime odio, modi velit numquam. Porro veniam asperiores ullam animi hic dolor, sapiente quos libero maiores quae accusamus debitis dolore laudantium. Quaerat dignissimos consequuntur molestiae odit a.</p>
                    </div>
                </div>
            </div>
            <div className="w-full pt-40 flex flex-col">
                <div className='inset-ring-amber-50 w-full h-100 flex text-amber-50 shadow-xl/100'>
                    <div>
                        <h1 className='font-form text-5xl'>SPS GROUPS</h1>
                        <p className='font-form'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur nesciunt fuga odit rerum est dolorum numquam quos omnis. Repudiandae cum velit facilis officiis aut provident unde quaerat distinctio, iste libero? Perspiciatis aliquam iste quas, non similique officia porro beatae ipsam quae. Quidem animi reiciendis deleniti nobis doloribus at? Error tempora voluptatibus accusantium tempore facere, aliquam amet iste quo similique ullam in nihil perspiciatis esse quasi sunt nulla quisquam minus ut at ipsum maxime odio, modi velit numquam. Porro veniam asperiores ullam animi hic dolor, sapiente quos libero maiores quae accusamus debitis dolore laudantium. Quaerat dignissimos consequuntur molestiae odit a.</p>
                    </div>
                    <img src={img1} alt="logo" className='h-60 pl-10 pr-10 pt-10' />
                </div>
            </div>
        </div>
    )
}

export default About