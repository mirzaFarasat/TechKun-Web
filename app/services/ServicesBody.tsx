import React from 'react'
import Image from 'next/image'
import imageKarke from '@/public/Images/services-images/services-layout.jpg';
import imageKarkk from '@/public/Images/services-images/services-layout2.jpg'

export default function ServicesBody() {
    return (
        <div>
            <div className='case-responsive-container bg-primary-50'>
                <div className='flex flex-col items-center text-center my-24'>
                    <h1 className=' text-5xl font-bold pr-2 text-gray-700'><span className='text-blue-700'>Our Area of Expertise </span>Encompasses...</h1>
                </div>
                <div className=' grid grid-cols-2 place-content-center'>
                    <div className='flex flex-col font-semibold justify-center items-center text-center text-3xl text-blue-800'>
                        <h1 >Full stack Development <br />using modern frameworks <br />and languages like React,<br /> Node.js, Python, and <br /><span className='text-gray-600'>more....</span></h1>
                    </div>
                    <div>
                        <Image className='h-80 rounded-lg' src={imageKarke} alt='karke' style={{ objectFit: "cover" }} />
                    </div>
                    <div className='my-24'>
                        <Image className='h-80 rounded-lg' src={imageKarkk} alt='karkk' style={{ objectFit: "cover" }} />
                    </div>
                    <div className='flex flex-col font-semibold justify-center items-center text-center text-3xl text-blue-800'>
                        <h1>API Development & Integration <br />to connect different systems and services.</h1>
                    </div>

                </div>
            </div>
            <div>
                <div className=''>
                    <div className='flex flex-row items-center py-24'>

                        <div className='w-1/2 font-semibold text-center text-3xl text-primary-900'>
                            <h1 >Full stack Development <br />using modern frameworks <br />and languages like React,<br /> Node.js, Python, and <br /><span className='text-gray-600'>more....</span></h1>
                        </div>

                        <div className='w-1/2'>
                            <Image className='w-full h-80 rounded-lg' src={imageKarke} alt='karke' style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
