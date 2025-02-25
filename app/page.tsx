'use client';
import Image, { StaticImageData } from 'next/image'
import imageMobileApp from '@/public/Images/landing-page-images/landing-page-image-1.jpg';
import imageMobileApp1 from '@/public/Images/landing-page-images/updated.jpg';
import imageMobileApp2 from '@/public/Images/landing-page-images/updated1.jpg';
import imageMobileApp3 from '@/public/Images/landing-page-images/food.jpg';
import imageMobileApp4 from '@/public/Images/landing-page-images/logistics.jpg';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import aiimg from '@/public/Images/service-landing-page/ai2.webp';
import mobimg from '@/public/Images/service-landing-page/mobf.webp';

export default function Home() {
    const services = [
        {
          title: 'AI & Machine Learning Solutions',
          description:
            'Leverage the power of artificial intelligence to transform your business operations. Our AI and machine learning solutions help you uncover insights, automate processes, and improve decision-making.',
          image: aiimg,
        },
        {
          title: 'Mobile Application Development',
          description:
            "We deliver mobile applications that provide exceptional user experiences and meet the demands of today's digital landscape. From concept to launch, we guide you through the entire mobile app development process.",
          image: mobimg,
        },

    ];
    const cardItems: {
        title: string,
        discription: string,
        image: StaticImageData,
        imageAltText: string
    }[] = [{
        title: "Health Tech",
        discription: "Empowering healthcare with advanced digital solutions. From telemedicine to patient management systems, we develop software that streamlines medical workflows.",
        image: imageMobileApp1,
        imageAltText: "kkr"
    }, {
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
            <Banner />
            <AboutUs />
            <div className="case-responsive-container flex py-24 justify-center items-center text-center lg:text-left ">
                <div className="flex flex-col gap-7">
                    <h1 className="text-5xl sm:text-5xl lg:text-6xl  font-semibold"><span className="text-primary-700"> AT TECHKUN </span> <br />WHEN YOU SAY TO DO IT, <br />IT&apos;S ALREADY DONE!</h1>
                    <p className="text-gray-500 text-base sm:text-lg">Give your business wings that can help you fly beyond the sky. <br />Trust is our principle and privacy is the motto, on the mission to Help revolutionize <br />the world to embrace technology and make the world a better place with Techkun. </p>
                    <button className="bg-primary-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors w-full sm:w-60">
                        Give Us A Try
                    </button>
                </div>
            </div>


            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-blue-600">Our Services</h2>
                    <p className="text-gray-500 mt-2">Your Vision, Our Expertise</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                                    <p className="text-gray-600 mt-4 text-sm">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <div className="bg-primary-50 md:">
                <div className="case-responsive-container flex flex-col justify-center items-center text-center py-16 gap-10 pb-24">
                    <h2 className="text-3xl lg:text-5xl sm:text-4xl font-bold"><span className="text-primary-700"> We Are</span> TechKun</h2>
                    <p className="text-gray-600 text-base  sm:text-lg">Techkun is a pioneerring technology consulting firm, that specializes in catalyzing the success of digital business trasformation for medium to large enterprise. Our goal has been to create simple solutions that can bring agility to any business. We bring digital innovation to business processes by collaborating with our customers (business and technology teams) that provides a competitive edge, scalability, and growth.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center text-lg sm:text-xl text-white font-semibold w-full sm:w-1/2 bg-primary-600 rounded-md">
                        <div className="w-full sm:w-1/3 p-4 border-b sm:border-b-0 sm:border-r border-white">
                            Authenticity
                        </div>
                        <div className="w-full sm:w-1/3 p-4 border-b sm:border-b-0 sm:border-r border-white">
                            Adaptability
                        </div>
                        <div className="w-full sm:w-1/3 p-4">
                            Independence
                        </div>
                    </div>
                    <div>
                        <Image className='max-h-[34rem] rounded-lg' src={imageMobileApp} alt={"kerk"} style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </div>




            <div className="case-responsive-container py-16 bg-white font-sans">
                <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-8">Our Products</h2>
                <p className="text-center text-xl text-gray-700 mb-12">Crafting Tailored Software for Your Needs</p>
                <div className="space-y-24">
                    <div className="flex flex-col md:flex-row items-start md:space-x-8">
                        <div className="md:w-1/2 ">
                            <h3 className="text-3xl font-semibold text-blue-600 mb-4">Productiviti.io</h3>
                            <p className="text-gray-600 mb-4">
                                Transform your organization's productivity with Productiviti, a sophisticated application designed for real-time workforce tracking and analytics.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li><strong>Dynamic Real-Time Tracking:</strong> Monitor remote teams with automated timekeeping and activity logging, ensuring compliance and proactive issue identification.</li>
                                <li><strong>In-Depth Data Analytics:</strong> Utilize advanced analytics to derive actionable insights into employee performance, optimizing workflows and resource allocation.</li>
                                <li><strong>Centralized Workforce Management:</strong> Manage diverse enterprise workforces from a unified platform with role-based access controls for secure oversight.</li>
                                <li><strong>Automated Attendance and Resource Tracking:</strong> Streamline attendance management and asset tracking, providing a holistic view of employee availability and resource utilization.</li>
                                <li><strong>Customizable Reporting and Compliance Framework:</strong> Access interactive reporting tools with customizable dashboards to ensure adherence to industry standards and enhance transparency.</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            {/* <Image
              src={productivitiIo}
              alt="Productiviti.io"
              width={350}
              height={250}
              className="object-contain"
            /> */}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-start md:space-x-8">
                        <div className="md:w-1/2 md:pr-12">
                            <h3 className="text-3xl font-semibold text-blue-600 mb-4">HireTalentt</h3>
                            <p className="text-gray-600 mb-4">
                                Discover HireTalent, the cutting-edge platform designed to transform your hiring experience. Our mission is to connect businesses with exceptional talent efficiently and effectively.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li><strong>Extensive Talent Pool:</strong> Access a diverse and continuously updated database of qualified candidates across various industries to find the perfect fit for your team.</li>
                                <li><strong>Advanced Search Filters:</strong> Utilize sophisticated filters to pinpoint candidates based on specific criteria, streamlining your selection process for optimal results.</li>
                                <li><strong>Integrated Applicant Tracking System (ATS):</strong> Manage applications and track candidate progress seamlessly, enhancing collaboration among hiring teams.</li>
                                <li><strong>AI-Powered Candidate Matching:</strong> Leverage artificial intelligence to match candidates to job openings, improving the quality and relevance of your hires.</li>
                                <li><strong>Comprehensive Analytics Dashboard:</strong> Gain valuable insights into your recruitment efforts with data-driven analytics, allowing for informed decision-making and strategy optimization.</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            {/* <Image
              src={hireTalentt}
              alt="HireTalentt"
              width={350}
              height={250}
              className="object-contain"
            /> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className='case-responsive-container flex flex-col justify- items-center text-center py-24 gap-10'>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-700'>What We Can Do For You</h3>
                <p className='text-gray-700 pb-14'>We can provided you services which can help to grow your business. We are open to take new ideas and also worked in a wide range of domains which encompasses...</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {cardItems.map((items, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-primary-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-t-2xl"
                        >
                            <div className="flex justify-center items-center text-center p-5 bg-primary-700 rounded-t-2xl">
                                <h2 className="text-lg font-semibold">{items.title}</h2>
                            </div>
                            <div className="flex flex-col justify-center items-center p-6 gap-4">
                                <div className="w-full h-48 overflow-hidden rounded-lg">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={items.image}
                                        alt={items.imageAltText}
                                    />
                                </div>
                                <p className="text-sm text-gray-100">{items.discription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


