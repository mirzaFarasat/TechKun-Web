import React from "react";
import Link from "next/link";

const bannerStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Images/banner-images/Services banner2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const Banner = () => {
    return (
        <div
            className="relative w-full flex flex-col justify-center items-left text-left"
            style={bannerStyle}
        >
            <div className="case-responsive-container py-56 relative text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Your Vision, Our Expertise: <br />
                    Custom Software to <br />
                    <span className='text-primary-300'>Elevate Your Business</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-200">
                    Custom software solutions tailored to elevate your business.
                </p>
                <button className="mt-6 px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-primary-500 hover:text-white">
                    <Link href="/contact-us">Connect with us</Link>
                </button>
            </div>
        </div>
    );
};

export default Banner;
