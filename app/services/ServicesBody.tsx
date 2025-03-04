import React from 'react';
import Image, { StaticImageData } from 'next/image';
import imageMobileApp from '@/public/Images/services-images/services-layout.jpg';
import imageCustomDev from '@/public/Images/services-images/services-layout3.jpg';
import imageServices from '@/public/Images/services-images/services-layout6.png';
import imageServices1 from '@/public/Images/services-images/services-layout4.jpg';
import imageAiML from '@/public/Images/services-images/services-layout7.jpg';

export default function ServicesBody() {
    const zigzagItems: {
        title: string;
        discription: string;
        subItems: string[];
        image: StaticImageData;
        imageAltText: string;
    }[] = [
        {
            title: "AI & Machine Learning Solutions",
            discription: "Leverage the power of artificial intelligence to transform your business operations. Our AI and machine learning solutions help you uncover insights, automate processes, and improve decision-making.",
            subItems: ["Data Science & Analytics", "Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision"],
            image: imageAiML,
            imageAltText: "karkk",
        },
        {
            title: "Mobile Application Development",
            discription: "We deliver mobile applications that provide exceptional user experiences and meet the demands of today's digital landscape. From concept to launch, we guide you through the entire mobile app development process.",
            subItems: ["Native App Development", "Hybrid App Development", "UI/UX Design", "App Store Deployment & Support"],
            image: imageMobileApp,
            imageAltText: "karkk",
        },
        {
            title: "Custom Software Development",
            discription: "We design and build bespoke software solutions tailored to your specific business needs. Whether you're looking to develop a new product or enhance existing systems, our custom software development services ensure that your solution is fully aligned with your goals.",
            subItems: ["Performance Optimization", "Cross-Platform Development", "API Development & Integration", "Full-Stack Development"],
            image: imageCustomDev,
            imageAltText: "karke",
        },
        {
            title: "Cloud Development & Migration",
            discription: "Harness the power of the cloud with our cloud development and migration services, designed to optimize your infrastructure and reduce costs while ensuring scalability and security.",
            subItems: ["Cloud-Native Development", "Cloud Migration", "Serverless Architectures", "Cloud Security"],
            image: imageServices1,
            imageAltText: "karkk",
        },
        {
            title: "Enterprise Software Solutions",
            discription: "Our enterprise-grade software development services focus on building robust, scalable systems that streamline operations and enhance business efficiency.",
            subItems: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Data Management Systems"],
            image: imageServices,
            imageAltText: "karkk",
        },
    ];

    return (
        <div>
            <div className="py-12 md:py-24">
                <div className="case-responsive-container mx-auto px-4 mb-8 flex flex-col items-center text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700">
                        <span className="text-primary-700">Our Area of Expertise </span>Encompasses...
                    </h2>
                </div>
                <div>
                    {zigzagItems.map((item, index) => (
                        <div key={index} className={`py-12 md:py-24 ${index % 2 !== 0 ? "bg-primary-50" : ""}`}>
                            <div className={`case-responsive-container mx-auto px-4 flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse": "md:flex-row"} items-center justify-center gap-8`}>
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                                    <h3 className="text-2xl md:text-4xl font-semibold text-primary-900 pb-5">{item.title}</h3>
                                    <p className="text-gray-500 pb-5">{item.discription}</p>
                                    <ul className="list-disc pl-5">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex} className="font-bold text-primary-800 py-1">{subItem}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Image
                                        className="w-full h-auto max-h-[20rem] md:max-h-[34rem] rounded-lg"
                                        src={item.image}
                                        alt={item.imageAltText}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
