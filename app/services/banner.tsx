import React from 'react';

const quotesImg = {
    backgroundImage: "url('/Images/banner-images/services-banner-updated.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};

const Banner = () => {
    return (
        <div
            className="bg-cover bg-center h-[28rem] w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
            style={quotesImg}>
            <div className='font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
                <h1>
                    Your Vision, Our Expertise: <br />
                    Custom Software to <br />
                    <span className='text-primary-300'>Elevate Your Business</span>
                </h1>
            </div>
        </div>
    );
}

export default Banner;

