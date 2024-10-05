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
        <div className="bg-cover bg-center h-96 w-full flex items-center"
            style={quotesImg}>
            <div className='case-responsive-container font-bold text-white text-6xl'>
                <div>
                    <h1 className=''>Your Vision, Our Expertise:</h1>
                    <h1>Custom Software to</h1>
                    <h1 className='text-primary-400'>Elevate Your Business</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner