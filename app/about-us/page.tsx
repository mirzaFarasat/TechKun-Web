import React from 'react';
import Image, { StaticImageData } from 'next/image';
import missionImage from '@/public/Images/mission-image/Mission-image.webp';
import profilePlaceholder from "@/public/Images/profile-placeholder.jpg";
import bus from "@/public/Images/bus.jpg";
import umbrella from "@/public/Images/umbrella.jpg";
import star from "@/public/Images/star.jpg";

import emergingTech from "@/public/Images/aboutus-banner/Embracing Emerging Technologies.jpeg";
import futuristicStrategy from "@/public/Images/aboutus-banner/Futuristic Strategy Meeting.jpeg";
import sustainable from  "@/public/Images/aboutus-banner/Sustainable AI for Environmental Protection and Development.jpeg"
import continuousLearning from  "@/public/Images/aboutus-banner/continuous learning.jpeg"



export default function AboutUs() {

    const bannerImg = {
        backgroundImage: "url('/Images/aboutus-banner/about-us-banner2.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    };

    const zigzagItems:{
        title: string;
        discription: string;
        image: StaticImageData;
        imageAltText: string;
    }[] = [{
        title: "Embracing Emerging Technologies",
        discription: "We stay ahead of the curve by continuously exploring and integrating AI, blockchain, cloud computing, and IoT into our solutions. By leveraging these technologies, we create scalable, intelligent, and future-ready systems that help businesses stay competitive in an ever-evolving landscape.",
        image:emergingTech,
        imageAltText:"No image found"
    },
    {
        title: "Collaboration-Driven Innovation",
        discription: "Great innovation happens through collaboration. We work closely with clients, partners, and industry experts to develop tailored solutions that address real-world challenges. By fostering a culture of co-creation and agile development, we ensure that our innovations align with industry needs and market demands.",
        image:futuristicStrategy,
        imageAltText:"No image found"
    },
    {
        title: "Sustainability & Ethical Tech",
        discription: "At TechKun, we don&apos;t just innovate—we do it responsibly. Our focus is on building sustainable and ethical technology that enhances productivity while minimizing environmental impact. Whether it's through energy-efficient computing or responsible AI, we ensure that our innovations contribute to a better tomorrow.",
        image:sustainable,
        imageAltText:"No image found"
    },
    {
        title: "Continuous Learning & Adaptation",
        discription: "The tech industry evolves rapidly, and so do we. Our team thrives on continuous learning, R&D, and experimentation to push the boundaries of what&apos;s possible. Through ongoing upskilling, certifications, and cutting-edge research, we remain at the forefront of innovation, delivering solutions that shape the future",
        image:continuousLearning,
        imageAltText:"No image found"
    }
        ]


    const team: {
        imageSrc: string | StaticImageData;
        name: string;
        position: string;
    }[] = [{
        imageSrc: profilePlaceholder,
        name: "Khizar Shakir",
        position: "Chief Executive Officer"
    }, {
        imageSrc: profilePlaceholder,
        name: "Uzair Mirza",
        position: "Managing Director"
    }, {
        imageSrc: profilePlaceholder,
        name: "Naved M. Usmani",
        position: "Chief Technology Officer"
    }];

    return (<>
        {/* Banner */}
        <div
            className="relative h-[30rem] w-full flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 bg-cover bg-center"
            style={bannerImg}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Banner Content */}
            <div className="relative z-10 max-w-3xl text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    At <span className='text-primary-500 font-bold'>TechKun,</span> <br />
                    Empowering Innovation,  <br />
                    Engineering the Future
                </h1>
            </div>
        </div>

        {/* Our Mission */}
        <div className="bg-primary-50 py-16">
            <h1 className='mb-16 text-center text-primary-700 uppercase font-bold text-5xl'>Innovating for the Future</h1>
            <div className='px-5 md:px-12 lg:px-24'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
                    {/* Left side text content */}
                    <div className='md:w-1/2 text-center md:text-left'>
                        <h2 className='text-primary-600 font-semibold text-2xl'>EMPOWERING BUSINESS</h2>
                        <h1 className=' md:text-5xl font-bold text-black-900 leading-tight mb-4'>Innovating Technology for a Smarter Future</h1>
                        <p className='text-gray-500'>
                            At TechKun, our mission is to revolutionize businesses through innovative technology solutions that drive agility, scalability, and growth. We believe in delivering simple yet powerful digital transformations, ensuring our clients thrive in an evolving digital landscape.
                        </p>
                    </div>
                    {/* Right side image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={missionImage}
                            alt="TechKun Mission"
                            className=" shadow-lg rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div>
            {zigzagItems.map((item, index) => (
                <div key={index} className={`py-12 md:py-24 ${index % 2 !== 0 ? "bg-primary-50" : ""}`}>
                    <div className={`case-responsive-container mx-auto px-4 flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center gap-8`}>
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                            <h3 className="text-2xl md:text-4xl font-semibold text-primary-900 pb-5">{item.title}</h3>
                            <p className="text-gray-500 pb-5 mb-6">{item.discription}</p>
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


        <div className="py-24 bg-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8 text-blue-600">Why Choose Us?</h1>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-80 self-stretch">
                        <div className="flex items-center justify-center mb-4">
                            <Image
                                src={bus}
                                alt="Icon of a delivery truck"
                                className="rounded w-12 h-12"
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-blue-600"> Post-Launch Support</h2>
                        <p className="text-gray-600">Our partnership doesn’t end at deployment. We offer ongoing support, maintenance, and upgrades</p>
                    </div>
                    <div className="bg-blue-500 shadow-lg rounded-lg p-6 w-80 self-stretch">
                        <div className="flex items-center justify-center mb-4">
                            <Image
                                src={umbrella}
                                alt="Icon of an umbrella"
                                className="rounded w-12 h-12"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">INNOVATIVE SOLUTIONS</h2>
                        <p className="text-white">We don’t just build software—we craft cutting-edge solutions that drive business success.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 w-80 self-stretch">
                        <div className="flex items-center justify-center mb-4">
                            <Image
                                src={star}
                                alt="Icon of a star badge"
                                className="rounded w-12 h-12"
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-blue-600">Security & Scalability</h2>
                        <p className="text-gray-600">We build software with security, scalability, and performance in mind, ensuring your business is future-proof</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h1>
                <p className="text-xl font-semibold mb-2 text-gray-700">We’ve got an entire team dedicated to supporting you and your business</p>
                <p className="text-gray-600 mb-12">Get help 24/7, with our award-winning support network of payments experts.</p>
                <div className="flex flex-wrap justify-center gap-8">
                    {team.map((member, index) => (<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src={member.imageSrc}
                            alt="Profile Image"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
                        <p className="text-gray-600">{member.position}</p>
                    </div>))}
                </div>
            </div>
        </div>
    </>)
}