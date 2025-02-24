import React from 'react';
import Banner from './banner'
import ServicesBody from './ServicesBody';

const Services = () => {
    return (
        <div>
              <Banner />
              <ServicesBody />
            <div className='bg-primary-700'>
                <div className='container mx-auto px-4 py-8 md:py-10 flex flex-col justify-center items-center text-center text-white'>
                    <h4 className='text-2xl md:text-4xl font-medium pb-3'>Why Us?</h4>
                    <p className='text-primary-50 font-medium text-base md:text-lg pb-6 md:pb-10'>
                        Transparency | Trust | Agile | Elite Class Architects & Developers
                    </p>
                    <p className='text-sm md:text-base'>
                        <span className='font-medium'>At Techkun</span>,<br className='hidden md:block' /> we bring together the latest technologies, industry best practices, and a commitment to delivering solutions that help businesses thrive.<br className='hidden md:block' /> Whether you&apos;re launching a new product, upgrading your existing systems, or exploring new technological horizons,<br className='hidden md:block' /> we&apos;re here to provide expert guidance every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;