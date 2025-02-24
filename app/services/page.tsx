import React from 'react';
import Banner from './banner'
import ServicesBody from './ServicesBody';
import Image from 'next/image';
import trusticon from '@/public/Images/services-why-choose-us/trust.png'
import transparencyicon from '@/public/Images/services-why-choose-us/transparency.png'
import agileicon from '@/public/Images/services-why-choose-us/Agile.png'
import eliteClass from '@/public/Images/services-why-choose-us/Elite Class Architects & Developers.png'


const Services = () => {
    return (
        <div>
              <Banner />
              <ServicesBody />
            <div className='bg-primary-700 flex justify-center rounded-5xl py-12 px-8 mb-20'>
                <div className='mx-auto px-4 py-8 md:py-10 flex flex-col justify-center items-center text-center text-white'>
                    <h4 className='text-white text-2xl md:text-5xl font-medium pb-3'>Why Us?</h4>
                    <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-10">
        
        {/* Transparency Box */}
        <div className="flex-1 min-w-[180px] max-w-[220px] h-20 flex flex-col items-center justify-center text-primary-700 rounded-xl shadow-lg px-6 py-3 md:py-4 text-sm md:text-lg font-semibold bg-white">
          <Image src={transparencyicon} alt="Transparency Icon" className="w-6 h-6 md:w-8 md:h-8 mb-2" />
          Transparency
        </div>

        {/* Trust Box */}
        <div className="flex-1 min-w-[180px] max-w-[220px] h-20 flex flex-col items-center justify-center text-primary-700 rounded-xl shadow-lg px-6 py-3 md:py-4 text-sm md:text-lg font-semibold bg-white">
          <Image src={trusticon} alt="Trust Icon" className="w-6 h-6 md:w-8 md:h-8 mb-2" />
          Trust
        </div>

        {/* Agile Box */}
        <div className="flex-1 min-w-[180px] max-w-[220px] h-20 flex flex-col items-center justify-center text-primary-700 rounded-xl shadow-lg px-6 py-3 md:py-4 text-sm md:text-lg font-semibold bg-white">
          <Image src={agileicon} alt="Agile Icon" className="w-6 h-6 md:w-8 md:h-8 mb-2 image-bold" />
          Agile
        </div>

        {/* Elite Class Architects & Developers Box */}
        <div className="flex-1 min-w-[180px] max-w-[220px] h-20 flex flex-col text-lg items-center justify-center text-primary-700 rounded-xl shadow-lg px-6 py-3 md:py-4 text-sm md:text-lg font-semibold bg-white">
          Elite Class Architects & Developers
        </div>
      </div>
                    <p className='text-sm md:text-base'>
                        <span className='font-medium text-white text-2xl'>At Techkun,</span><span className='text-white'><br className='hidden md:block' /> we bring together the latest technologies, industry best practices, and a commitment to delivering solutions that help businesses thrive.<br className='hidden md:block' /> Whether you&apos;re launching a new product, upgrading your existing systems, or exploring new technological horizons,<br className='hidden md:block' /> we&apos;re here to provide expert guidance every step of the way.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;