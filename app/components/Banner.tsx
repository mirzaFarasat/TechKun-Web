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
                <div className="w-full md:w-7/12">
                    <h1 className="mb-4 banner-heading" style={{
                        overflowWrap: "normal"
                    }}>
                        <span className="text-primary-700">EMPOWERING INNOVATIONS,</span>
                        <br />
                        DELIVERING EXCELLENCE
                    </h1>
                    <p className="mb-6 banner-subtext text-white">
                        Partnering with medium to large enterprises, we specialize in
                        catalyzing digital business transformations, delivering agile and
                        innovative solutions for competitive growth.
                    </p>
                </div>
                <Link href={"/contact-us"}>
                    <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-primary-500 hover:text-white">
                        Connect with us
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Banner;
