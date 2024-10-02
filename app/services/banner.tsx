import React from 'react'
import Image from 'next/image';

const quotesImg = {
    backgroundImage: "url('/Images/banner-images/banner.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-96 w-full flex justify-start items-center font-bold text-white text-6xl"
            style={quotesImg}>
            <div className='flex ml-80'>
                <div>
                    <h1 className=''>Your Vision, Our Expertise:</h1>
                    <h1>Custom Software to</h1>
                    <h1 className=' text-blue-500'>Elevate Your Business</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner