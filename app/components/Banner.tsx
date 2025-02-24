import React from "react";
import Link from "next/link";

const Banner = () => {
  const bannerImg = {
    backgroundImage: "url('/Images/banner-images/Banner2.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "80vh",
  };

  return (
    <div className="bg-primary-50">
      <div style={bannerImg} className="case-responsive-container flex flex-col items-center text-center md:text-left md:flex-row justify-between px-6 md:px-20 py-16">
        
        {/* Left Side: Text Content */}
        <div className="max-w-2xl bg-white bg-opacity-80 p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl sm:text-3xl font-bold">
            <span className="text-primary-700">EMPOWERING INNOVATIONS,</span>
            <br />
            DELIVERING EXCELLENCE
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Partnering with medium to large enterprises, we specialize in
            catalyzing digital business transformations, delivering agile and
            innovative solutions for competitive growth.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-primary-500 hover:text-white">
            <Link href="/contact-us">Connect with us</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
