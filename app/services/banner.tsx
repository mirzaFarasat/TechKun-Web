import React from 'react'
import Image from 'next/image';

const quotesImg = {
    backgroundImage: "url('/Images/banner-images/services-banner-updated.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[28rem] w-full flex items-center"
            style={quotesImg}>
            <div className='case-responsive-container font-bold text-white text-6xl'>
                <h1 className=''>Your Vision, Our Expertise: <br />Custom Software to <br /> <span className='text-primary-300'>Elevate Your Business</span></h1>
            </div>
        </div>
    )
}

export default Banner