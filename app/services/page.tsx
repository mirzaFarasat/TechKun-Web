import React from 'react'
import Banner from './banner'
import Image, { StaticImageData } from 'next/image'
import imageKarke from '@/public/Images/services-images/services-layout.jpg';
import imageKarkk from '@/public/Images/services-images/services-layout2.jpg';



const Services = () => {
    const zigzagItems: {
        title: string;
        discription: string;
        subItems: string[];
        image: StaticImageData;
        imageAltText: string;
    }[] = [{
        title: "Full stack Development using modern frameworks and languages like React, Node.js, Python, and more.",
        discription:"",
        subItems:[],
        image: imageKarke,
        imageAltText: "karke"
    },
  {
    title: "API Development & Integration to connect different systems and services.",
    discription:"",
    subItems:[],
    image: imageKarkk,
    imageAltText: "karkk"
  }];

    return (
        <div>
            <Banner />

            <div className='py-24'>
                <div className='case-responsive-container mb-8 flex flex-col items-center text-center'>
                    <h2 className='text-5xl font-bold pr-2 text-gray-700'><span className='text-primary-700'>Our Area of Expertise </span>Encompasses...</h2>
                </div>
                <div className=''>
                    {zigzagItems.map((item, index) => (
                        <div className={`py-24 ${index % 2 !== 0? "bg-primary-50": ""}`}>
                            <div className={`case-responsive-container flex ${index % 2 === 0? "flex-row": "flex-row-reverse"} items-center`}>
                                <div className='w-1/2'>
                                    <h3 className='mx-auto w-3/4 text-3xl font-semibold text-primary-900 text-center' >{item.title}</h3>
                                </div>
                                <div className='w-1/2'>
                                    <Image className='h-80 rounded-lg' src={item.image} alt={item.imageAltText} style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Services;
