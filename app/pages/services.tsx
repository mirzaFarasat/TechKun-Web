'use client';
import Image from 'next/image';
import Link from 'next/link';
import { RxExternalLink } from 'react-icons/rx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aiimg from '@/public/Images/service-landing-page/ai2.webp';
import mobimg from '@/public/Images/service-landing-page/App Development.jpeg';

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: 'AI & Machine Learning Solutions',
      description:
        'Leverage the power of artificial intelligence to transform your business operations.',
      image: aiimg,
      icon: RxExternalLink,
    },
    {
      title: 'Mobile Application Development',
      description:
        'We deliver mobile applications that provide exceptional user experiences.',
      image: mobimg,
      icon: RxExternalLink,
    },
    {
      title: 'Web Development',
      description:
        'Build modern, responsive websites with cutting-edge technologies.',
      image: '/images/web-dev.jpg',
      icon: RxExternalLink,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block text-primary-600 font-medium mb-3 tracking-widest text-sm uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Comprehensive <span className="text-primary-600">Services</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
            <div className="w-4 h-1 bg-primary-300 rounded-full mx-2"></div>
            <div className="w-2 h-1 bg-primary-200 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:border-primary-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <service.icon
                    className="w-6 h-6 text-primary-600 group-hover:text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors duration-300 group-hover:translate-x-1 group-hover:text-primary-700">
                    Discover more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20" data-aos="zoom-in" data-aos-delay="300">
          <Link href="/services">
            <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-primary-600 hover:to-primary-700 transform hover:-translate-y-1">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}