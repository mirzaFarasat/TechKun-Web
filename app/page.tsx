'use client';
import Image, { StaticImageData } from 'next/image';
import { RxExternalLink } from "react-icons/rx";
import Link from 'next/link';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import { useState } from 'react';

// Image imports
import imageMobileApp1 from '@/public/Images/landing-page-images/Health Tech.jpeg';
import imageMobileApp2 from '@/public/Images/landing-page-images/Ed-tech.jpeg';
import imageMobileApp3 from '@/public/Images/landing-page-images/Food-tech.jpeg';
import imageMobileApp4 from '@/public/Images/landing-page-images/Logistics.jpeg';
import aiimg from '@/public/Images/service-landing-page/ai2.webp';
import mobimg from '@/public/Images/service-landing-page/App Development.jpeg';
import imLogo from "@/public/Images/logos/im-logo.webp";
import productivitiLogo from "@/public/Images/logos/productiviti-logo.png";
import hiretalenttLogo from "@/public/Images/logos/hiretalentt-logo.png";
import productivitiImage from "@/public/Images/productiviti-images/productiviti.webp";
import hiretalenttImage from "@/public/Images/hiretalentt-images/hiretalentt.png";

// Client Slider Component (Integrated directly)
const clients = [
  { name: 'Amazon', logo: '/logos/amazon.png' },
  { name: 'Google', logo: '/logos/google.png' },
  { name: 'Microsoft', logo: '/logos/microsoft.png' },
  { name: 'Flipkart', logo: '/logos/flipkart.png' },
  { name: 'Apple', logo: '/logos/apple.png' },
  { name: 'Tesla', logo: '/logos/tesla.png' },
  { name: 'Meta', logo: '/logos/meta.png' },
  { name: 'Netflix', logo: '/logos/netflix.png' },
];

const ClientSliderSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const allClients = [...clients, ...clients];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Trusted by Leading Clients
        </h2>
        <div 
          className="relative overflow-hidden w-full h-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex space-x-16 absolute whitespace-nowrap ${isPaused ? 'animate-pause' : 'animate-scroll'}`}
            style={{
              animationDuration: '30s',
              animationIterationCount: 'infinite',
            }}
          >
            {allClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex items-center justify-center h-20 w-32 md:w-40 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation-name: scroll; }
        .animate-pause { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default function Home() {
    const services = [
        {
            title: 'AI & Machine Learning Solutions',
            description: 'Leverage the power of artificial intelligence to transform your business operations.',
            image: aiimg,
        },
        {
            title: 'Mobile Application Development',
            description: "We deliver mobile applications that provide exceptional user experiences.",
            image: mobimg,
        },
    ];

    const cardItems = [
        {
            title: "Health Tech",
            discription: "Empowering healthcare with advanced digital solutions...",
            image: imageMobileApp1,
            imageAltText: "Health Tech"
        },
        {
            title: "Ed-Tech",
            discription: "Transforming education through technology. Our software solutions are designed to create engaging learning experiences, offering tools for online education and personalized learning paths.",
            image: imageMobileApp2,
            imageAltText: "hi"
        }, {
            title: "Food Tech",
            discription: "Redefining the food industry with smart tech. We build solutions for food delivery, inventory management, and customer engagement, making it easier for businesses to serve and satisfy customers efficiently.",
            image: imageMobileApp3,
            imageAltText: "kadak"
        }, {
            title: "Logistics",
            discription: "Optimizing logistics with intelligent software. Our solutions improve supply chain management, automate processes, and enhance real-time tracking for streamlined operations and better delivery outcomes.",
            image: imageMobileApp4,
            imageAltText: "hhahahah"
        },
    
    
            ];

    return (
        <div>
            <Banner /> {/* TechKun Header */}
            <AboutUs />
            
            {/* Client Logo Slider - Now perfectly positioned */}
            <ClientSliderSection />
            
            {/* Our Products Section */}
            <div className="case-responsive-container py-16 bg-white">
    <h2 className="mb-1 section-heading text-primary-700 text-center">Our Products</h2>
    <p className="mb-16 section-subtext text-gray-700 text-center">Discover Innovation. Experience Excellence.</p>
    <div className="flex flex-col gap-y-36">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-5/12 item-subtitle text-gray-600">
                <p className='mb-4'>In collaboration with <Link href={"https://www.infomover.io"}><Image src={imLogo} alt='infomover-logo' className='w-24 inline' /></Link></p>
                <h3 className="mb-4 item-title text-blue-600"><Link href={"https://www.productiviti.io"}>Productiviti <RxExternalLink size={22} className='mb-1 inline' /></Link></h3>
                <p className="mb-4">
                    Productiviti is an employee-monitoring software that provides real-time insights into employee productivity, activity logging, and productivity analytics.
                </p>
                <ul className="mb-10 list-disc pl-5 flex flex-col space-y-2">
                    <li><strong>Dynamic Real-Time Tracking:</strong> Monitor remote teams with automated timekeeping and activity logging, ensuring compliance and proactive issue identification.</li>
                    <li><strong>In-Depth Data Analytics:</strong> Utilize advanced analytics to derive actionable insights into employee performance, optimizing workflows and resource allocation.</li>
                    <li><strong>Centralized Workforce Management:</strong> Manage diverse enterprise workforces from a unified platform with role-based access controls for secure oversight.</li>
                    <li><strong>Automated Attendance and Resource Tracking:</strong> Streamline attendance management and asset tracking, providing a holistic view of employee availability and resource utilization.</li>
                    <li><strong>Customizable Reporting and Compliance Framework:</strong> Access interactive reporting tools with customizable dashboards to ensure adherence to industry standards and enhance transparency.</li>
                </ul>
                <Link href={"https://www.productiviti.io"}>
                    <Image src={productivitiLogo} alt='productiviti-logo' className='w-36' />
                </Link>
            </div>
            <div className="md:w-7/12 flex justify-center">
                <Image
                    src={productivitiImage}
                    alt="Productiviti"
                    className="w-full h-auto"
                />
            </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-5/12 md:pr-12 item-subtitle text-gray-600">
                <p className='mb-4'>In collaboration with <Link href={"https://www.infomover.io"}><Image src={imLogo} alt='infomover-logo' className='w-24 inline' /></Link></p>
                <h3 className="item-title text-blue-600 mb-4"><Link href={"https://www.hiretalentt.com"}>HireTalentt <RxExternalLink size={22} className='mb-1 inline' /></Link></h3>
                <p className="mb-4">
                    Discover HireTalentt, the cutting-edge platform designed to transform your hiring experience. Our mission is to connect businesses with exceptional talent efficiently and effectively.
                </p>
                <ul className="mb-10 list-disc pl-5 flex flex-col space-y-2">
                    <li><strong>Extensive Talent Pool:</strong> Access a diverse and continuously updated database of qualified candidates across various industries to find the perfect fit for your team.</li>
                    <li><strong>Advanced Search Filters:</strong> Utilize sophisticated filters to pinpoint candidates based on specific criteria, streamlining your selection process for optimal results.</li>
                    <li><strong>Integrated Applicant Tracking System (ATS):</strong> Manage applications and track candidate progress seamlessly, enhancing collaboration among hiring teams.</li>
                    <li><strong>AI-Powered Candidate Matching:</strong> Leverage artificial intelligence to match candidates to job openings, improving the quality and relevance of your hires.</li>
                    <li><strong>Comprehensive Analytics Dashboard:</strong> Gain valuable insights into your recruitment efforts with data-driven analytics, allowing for informed decision-making and strategy optimization.</li>
                </ul>
                <Link href={"https://www.hiretalentt.com"}>
                    <Image src={hiretalenttLogo} alt='hiretalentt-logo' className='w-36' />
                </Link>
            </div>
            <div className="md:w-7/12 flex justify-center">
                <Image
                    src={hiretalenttImage}
                    alt="HireTalentt"
                    className="w-full h-auto"
                />
            </div>
        </div>
    </div>
</div>

            {/* Services Section */}
            <div className='bg-primary-50'>
                <div className="case-responsive-container text-center py-16">
                <h2 className="mb-1 section-heading text-primary-700">Our Services</h2>
                    <p className="mb-16 section-subtext text-gray-700">Your Vision, Our Expertise</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-8 text-center">
                                    <h3 className="mb-2 item-title text-gray-700">{service.title}</h3>
                                    <p className="item-subtitle text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* What We Do Section */}
            <div className='case-responsive-container justify-center items-center text-center py-24'>
            <div className='mb-16 mx-auto w-full md:w-2/3'>
                    <h2 className='mb-1 section-heading text-primary-700'>What We Can Do For You?</h2>
                    <p className='section-subtext text-gray-700'>We can provided you services which can help to grow your business. We are open to take new ideas and also worked in a wide range of domains which encompasses...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cardItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:bg-primary-50 hover:scale-[1.05] hover:shadow-2xl"
                        >
                            <div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="mb-2 item-title text-gray-700">
                                    {item.title}
                                </h3>
                                <p className="item-subtitle text-gray-700">{item.discription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <WhyChooseUs />
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-500 to-indigo-600 text-white py-20 text-center">
            <div className='case-responsive-container'>
                    <h2 className="mb-2 section-heading">
                        Transform Your Business with Cutting-Edge Digital Solutions
                    </h2>
                    <p className="mb-8 mx-auto w-10/12 section-subtext">
                        Our innovative IT solutions are designed to streamline your operations, enhance productivity, and drive growth.
                        Partner with us to
                        unlock your business&apos;s full potential.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-white text-primary-700 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition duration-300 transform hover:scale-105 font-semibold">
                            <Link href="/contact-us">
                                Contact Us Today
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}