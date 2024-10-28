import React from 'react'
import Banner from './banner'
import ServicesBody from './ServicesBody';


const Services = () => {
    return (
        <div>
            <Banner />
            <ServicesBody />
            <div className='bg-primary-700'>
                <div className='case-responsive-container flex flex-col justify-center items-center text-center text-white py-10'>
                    <h4 className='text-4xl font-medium pb-3'>Why Us?</h4>
                    <p className='text-primary-50 font-medium text-lg pb-10'>Transparency | Trust | Agile | Elite Class Architects & Developers</p>
                    <p><span className='font-medium text-lg'>At Techkun</span>,<br /> we bring together the latest technologies, industry best practices, and a commitment to delivering solutions that help businesses thrive.<br /> Whether you&apos;re launching a new product, upgrading your existing systems, or exploring new technological horizons,<br /> we&apos;re here to provide expert guidance every step of the way.</p>
                </div>
            </div>
        </div>
    )
};

export default Services;
