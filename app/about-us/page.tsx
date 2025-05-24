import React from 'react';
import Image, { StaticImageData } from 'next/image';
import DarkPatternBanner from '../components/DarkPatternBanner';
import missionImage from '@/public/Images/mission-image/Mission-image.webp';
import profilePlaceholder from "@/public/Images/profile-placeholder.jpg";

import emergingTech from "@/public/Images/aboutus-banner/Embracing Emerging Technologies.jpeg";
import futuristicStrategy from "@/public/Images/aboutus-banner/Futuristic Strategy Meeting.jpeg";
import sustainable from  "@/public/Images/aboutus-banner/Sustainable AI for Environmental Protection and Development.jpeg"
import continuousLearning from  "@/public/Images/aboutus-banner/continuous learning.jpeg"
import WhyChooseUs from '../components/WhyChooseUs';


const bannerImg = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Images/aboutus-banner/about-us-banner2.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};

export default function AboutUs() {

    const zigzagItems:{
        title: string;
        description: string;
        image: StaticImageData;
        imageAltText: string;
    }[] = [{
        title: "Empowering Business",
        description: "At TechKun, our mission is to revolutionize businesses through innovative technology solutions that drive agility, scalability, and growth. We believe in delivering simple yet powerful digital transformations, ensuring our clients thrive in an evolving digital landscape.",
        image: missionImage,
        imageAltText: "No image found"
    }, {
        title: "Embracing Emerging Technologies",
        description: "We stay ahead of the curve by continuously exploring and integrating AI, blockchain, cloud computing, and IoT into our solutions. By leveraging these technologies, we create scalable, intelligent, and future-ready systems that help businesses stay competitive in an ever-evolving landscape.",
        image:emergingTech,
        imageAltText:"No image found"
    },
    {
        title: "Collaboration-Driven Innovation",
        description: "Great innovation happens through collaboration. We work closely with clients, partners, and industry experts to develop tailored solutions that address real-world challenges. By fostering a culture of co-creation and agile development, we ensure that our innovations align with industry needs and market demands.",
        image:futuristicStrategy,
        imageAltText:"No image found"
    },
    {
        title: "Sustainability & Ethical Tech",
        description: "At TechKun, we don&apos;t just innovate—we do it responsibly. Our focus is on building sustainable and ethical technology that enhances productivity while minimizing environmental impact. Whether it's through energy-efficient computing or responsible AI, we ensure that our innovations contribute to a better tomorrow.",
        image:sustainable,
        imageAltText:"No image found"
    },
    {
        title: "Continuous Learning & Adaptation",
        description: "The tech industry evolves rapidly, and so do we. Our team thrives on continuous learning, R&D, and experimentation to push the boundaries of what&apos;s possible. Through ongoing upskilling, certifications, and cutting-edge research, we remain at the forefront of innovation, delivering solutions that shape the future",
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
            className="mb-16 w-full flex flex-col justify-center items-center text-center"
            style={bannerImg}
        >
            {/* Banner Content */}
            <div className="case-responsive-container py-56 text-white">
                <h1 className="banner-heading">
                    At <span className='text-primary-500 font-semibold'>TechKun,</span> <br />
                    Empowering Innovation,  <br />
                    Engineering the Future
                </h1>
            </div>
        </div>

        <div>
            <h2 className='section-heading text-center text-primary-700'>Innovating For The Future</h2>
            {zigzagItems.map((item, index) => (
                <div key={index} className={`py-12 md:py-24 ${index % 2 !== 0 ? "bg-primary-50" : ""}`}>
                    <div className={`case-responsive-container mx-auto flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center gap-8`}>
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                            <h3 className="mb-5 item-title text-primary-700">{item.title}</h3>
                            <p className="text-gray-700">{item.description}</p>
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

        <WhyChooseUs />

        <div className="bg-primary-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="mb-4 section-heading text-primary-700">Meet Our Team</h2>
                <p className="mb-2 section-subtext text-gray-700">We’ve got an entire team dedicated to supporting you and your business</p>
                <p className="mb-12 section-subtext font-medium text-gray-700">Get help 24/7, with our award-winning support network of payments experts.</p>
                <div className="flex flex-wrap justify-center gap-8">
                    {team.map((member, index) => (<div key={index} className="w-full sm:w-1/2 md:w-1/3 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src={member.imageSrc}
                            alt="Profile Image"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="mb-2 item-title text-gray-800">{member.name}</h3>
                        <p className="item-subtitle text-gray-600">{member.position}</p>
                    </div>))}
                </div>
            </div>
        </div>
    </>)
}