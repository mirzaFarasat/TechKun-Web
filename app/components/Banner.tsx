import React from "react";
import Link from "next/link";

const Banner = () => {
  const bannerImg = {
    backgroundImage: "url('/Images/landing-page-banner/landing-banner3.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  };

  return (
    <div
      className="case-responsive-container relative h-screen bg-cover bg-center"
      style={bannerImg} 
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-10 md:px-20 text-left text-white">
        <h1 className="text-3xl md:text-5xl sm:text-4xl font-bold">
          <span className="text-primary-400">EMPOWERING INNOVATIONS,</span>
          <br />
          DELIVERING EXCELLENCE
        </h1>
        <p className="text-white text-lg mt-4">
          Partnering with medium to large enterprises, we specialize in<br className='hidden md:block'/>
          catalyzing digital business transformations, delivering agile and<br className='hidden md:block'/>
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
