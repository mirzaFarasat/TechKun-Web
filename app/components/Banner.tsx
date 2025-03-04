import React from "react";
import Link from "next/link";

const Banner = () => {
    const bannerImg = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Images/landing-page-banner/landing-banner3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
            className="relative w-full flex flex-col justify-center items-left"
            style={bannerImg}
        >
            <div className="case-responsive-container py-56 text-left text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                    <span className="text-primary-700">EMPOWERING INNOVATIONS,</span>
                    <br />
                    DELIVERING EXCELLENCE
                </h1>
                <p className="text-white text-lg md:text-xl mt-4">
                    Partnering with medium to large enterprises, we specialize in<br className='hidden md:block' />
                    catalyzing digital business transformations, delivering agile and<br className='hidden md:block' />
                    innovative solutions for competitive growth.
                </p>
                <button className="mt-6 px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-primary-500 hover:text-white">
                    <Link href="/contact-us">Connect with us</Link>
                </button>
            </div>
        </div>

    );
};

export default Banner;
