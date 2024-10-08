import React from 'react'
import Banner from './banner'
import Image, { StaticImageData } from 'next/image'
import imageKarke from '@/public/Images/services-images/services-layout.jpg';
import imageKarkk from '@/public/Images/services-images/services-layout3.jpg';
import imageKarkkk from '@/public/Images/services-images/services-layout6.png';
import imageKarkkkk from '@/public/Images/services-images/services-layout4.jpg';
import imagekarkkkkk from '@/public/Images/services-images/services-layout7.jpg'


const Services = () => {
    const zigzagItems: {
        title: string;
        discription: string;
        subItems: string[];
        image: StaticImageData;
        imageAltText: string;
    }[] = [{
        title: "AI & Machine Learning Solutions",
        discription: "Leverage the power of artificial intelligence to transform your business operations. Our AI and machine learning solutions help you uncover insights, automate processes, and improve decision-making.",
        subItems: ["Data Science & Analytics", "Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision"],
        image: imagekarkkkkk,
        imageAltText: "karkk"
    }, {
        title: "Mobile Application Development",
        discription: "We deliver mobile applications that provide exceptional user experiences and meet the demands of today's digital landscape. From concept to launch, we guide you through the entire mobile app development process.",
        subItems: ["Native App Development", "Hybrid App Development", "UI/UX Design", "App Store Deployment & Support"],
        image: imageKarke,
        imageAltText: "karkk"
    }, {
        title: "Custom Software Development",
        discription: "We design and build bespoke software solutions tailored to your specific business needs. Whether you're looking to develop a new product or enhance existing systems, our custom software development services ensure that your solution is fully aligned with your goals.",
        subItems: ["Performance Optimization", "Cross-Platform Development", "API Development & Integration", "Full-Stack Development"],
        image: imageKarkk,
        imageAltText: "karke"
    },{
        title: "Cloud Development & Migration",
        discription: "Harness the power of the cloud with our cloud development and migration services, designed to optimize your infrastructure and reduce costs while ensuring scalability and security.",
        subItems: ["Cloud-Native Development", "Cloud Migration", "Serverless Architectures", "Cloud Security"],
        image: imageKarkkkk,
        imageAltText: "karkk"
    }, {
        title: "Enterprise Software Solutions",
        discription: "Our enterprise-grade software development services focus on building robust, scalable systems that streamline operations and enhance business efficiency.",
        subItems: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Data Management Systems"],
        image: imageKarkkk,
        imageAltText: "karkk"
    } 
        ];

    return (
        <div>
            <Banner />

            <div className='py-24'>
                <div className='case-responsive-container mb-8 flex flex-col items-center text-center'>
                    <h2 className='text-5xl font-bold pr-2 text-gray-700'><span className='text-primary-700'>Our Area of Expertise </span>Encompasses...</h2>
                </div>
                <div className=''>
                    {zigzagItems.map((item, index) => (
                        <div className={`py-24 ${index % 2 !== 0 ? "bg-primary-50" : ""}`}>
                            <div className={`case-responsive-container flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-center items-center`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? "pr-14" : "pl-24"}`}>
                                    <div className={`${index % 2 === 0 ? "w-11/12" : ""}`}>
                                        <h3 className='text-4xl font-semibold text-primary-900 pb-5' >{item.title}</h3>
                                        <p className=' text-gray-500 pb-5'>{item.discription}</p>
                                    </div>
                                    {item.subItems.map((subItem) => (
                                        <div>
                                            <ul className='list-disc py-2 px-4 font-semibold'>
                                                <li className='text-primary-800'>{subItem}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className='w-1/2'>
                                    <Image className='max-h-[34rem] rounded-lg' src={item.image} alt={item.imageAltText} style={{ objectFit: "cover" }} />
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
