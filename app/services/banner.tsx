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
            className="relative w-full flex flex-col justify-center items-left"
            style={bannerStyle}
        >
            <div className="case-responsive-container py-56 text-white">
                <div className="w-full md:w-7/12" style={{
                    overflowWrap: "normal"
                }}>
                    <h1 className="mb-4 banner-heading">
                        Your Vision, Our Expertise: <br />
                        Custom Software to <span className='text-primary-500'>Elevate Your Business</span>
                    </h1>
                    <p className="mb-6 banner-subtext text-white">
                        Custom software solutions tailored to elevate your business.
                    </p>
                </div>
                <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-primary-500 hover:text-white">
                    <Link href="/contact-us">Connect with us</Link>
                </button>
            </div>
        </div>
    );
};

export default Banner;
