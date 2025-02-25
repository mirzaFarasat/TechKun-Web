import React from "react";
import Link from "next/link";

const bannerStyle = {
  backgroundImage: "url('/Images/banner-images/Services banner2.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <div
      className="relative h-[30rem] w-full flex flex-col justify-center items-left text-left px-6 sm:px-12"
      style={bannerStyle}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Banner Content */}
      <div className="case-responsive-container relative z-10 max-w-3xl text-white">
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
