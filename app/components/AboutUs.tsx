import React from 'react'
import TechKunLogoSvg from './TechKunLogoSvg'

function AboutUs() {
    return (
        <div className="bg-primary-50">
            <div className='case-responsive-container py-12'>
                <div className='relative'>
                    <div className=''>
                        <TechKunLogoSvg size={400} length={1175} />
                    </div>
                    <div className='absolute top-[6.75rem] left-[20rem] flex flex-col gap-y-20'>
                        <h2 className="ml-32 text-3xl lg:text-5xl sm:text-4xl font-bold text-gray-800">
                            We are <span className="text-primary-700">TechKun</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-3xl">
                            TechKun is a pioneering technology consulting firm specializing in digital business transformation for medium to large enterprises.
                            Our goal is to create simple solutions that enhance agility, scalability, and growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;
