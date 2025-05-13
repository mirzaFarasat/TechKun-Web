'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { FaGlobe, FaCloud, FaMobile, FaRobot } from 'react-icons/fa';

const links = [
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about-us' }
];

const services = [
    {
        title: 'Web App Development',
        description: 'Custom web applications built with modern technologies',
        href: '/services/web-development',
        icon: FaGlobe
    },
    {
        title: 'Cloud AI Solutions',
        description: 'Intelligent cloud-based solutions for your business',
        href: '/services/cloud-solutions',
        icon: FaCloud
    },
    {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications',
        href: '/services/app-development',
        icon: FaMobile
    },
    {
        title: 'AI Integration',
        description: 'Integrate AI capabilities into your existing systems',
        href: '/services/ai-integration',
        icon: FaRobot
    }
];

const testimonial = {
    text: "TechKun transformed our business with their innovative solutions. The team's expertise and dedication were exceptional.",
    author: "John Smith",
    role: "CTO, Tech Innovations"
};

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (href: string) => {
        setIsMenuOpen(false);
        router.push(href);
    };

    return (
        <nav className={`
            fixed top-0 w-full z-50 transition-all duration-300
            ${isScrolled || isMenuOpen ? 'shadow-md' : ''}
        `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3">
                            <Image 
                                src={techkunLogo} 
                                alt="Logo" 
                                className="h-10 w-auto md:h-12" // Increased size
                                width={48}
                                height={48}
                            />
                            <span className={`text-xl font-Poppins md:text-2xl transition-colors ${isScrolled ? 'text-[#2196f3]' : 'text-white'}`}>
                                TechKun
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {/* Services Dropdown */}
                        <div className="relative group">
                            <Link
                                href="/services"
                                className={`
                                    text-base font-medium transition-colors
                                    ${pathname === '/services'
                                        ? (isScrolled ? 'text-[#2196f3]' : 'text-white')
                                        : (isScrolled ? 'text-gray-700 hover:text-[#2196f3]' : 'text-white/90 hover:text-white')
                                    }
                                `}
                            >
                                Services
                            </Link>
                            {/* Mega Menu Dropdown */}
                            <div className="
                                absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] opacity-0 invisible
                                group-hover:opacity-100 group-hover:visible transition-all duration-300
                                bg-white/50 backdrop-blur-md rounded-xl shadow-2xl p-8 grid grid-cols-3 gap-8
                                border border-white/20
                            ">
                                {/* Services Grid */}
                                <div className="col-span-2 grid grid-cols-2 gap-8">
                                    {services.map((service) => {
                                        const Icon = service.icon;
                                        return (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="group/item p-4 rounded-lg hover:bg-blue-50 transition-all duration-300
                                                    transform hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <Icon className="h-5 w-5 text-[#2196f3] group-hover/item:text-blue-600 transition-colors" />
                                                    <h3 className="text-gray-900 font-semibold text-base group-hover/item:text-[#2196f3]">
                                                        {service.title}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                            </Link>
                                        );
                                    })}
                                </div>
                                {/* Testimonial Card */}
                                <div className="col-span-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6
                                    transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="mb-4">
                                        <svg className="h-8 w-8 text-[#2196f3] opacity-50" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                    </div>
                                    <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-4">"{testimonial.text}"</blockquote>
                                    <div className="mt-3">
                                        <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Us Link */}
                        <Link
                            href="/about-us"
                            className={`
                                text-base font-medium transition-colors
                                ${pathname === '/about-us'
                                    ? (isScrolled ? 'text-[#2196f3]' : 'text-white')
                                    : (isScrolled ? 'text-gray-700 hover:text-[#2196f3]' : 'text-white/90 hover:text-white')
                                }
                            `}
                        >
                            About Us
                        </Link>

                        {/* Contact Us Button */}
                        <button 
                            onClick={() => handleNavigation('/contact-us')}
                            className="bg-[#2196f3] text-white px-6 py-2 rounded-md text-base font-medium hover:bg-[#1e88e5] transition-colors"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile menu button and menu */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md inline-flex items-center justify-center ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">
                                {isMenuOpen ? 'Close menu' : 'Open menu'}
                            </span>
                            {isMenuOpen ? (
                                <RiCloseFill className="h-6 w-6" />
                            ) : (
                                <RiMenu3Fill className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`
                    md:hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                `}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(link.href);
                            }}
                            className={`
                                block px-3 py-2 rounded-md text-base font-medium
                                ${pathname === link.href
                                    ? 'bg-[#2196f3] text-white'
                                    : isScrolled
                                        ? 'text-gray-800 hover:text-[#2196f3]'
                                        : 'text-white hover:text-white/80'
                                }
                            `}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => handleNavigation('/contact-us')}
                        className="w-full text-left px-3 py-2 text-base font-medium text-white bg-[#2196f3] rounded-md hover:bg-[#1e88e5] transition-colors"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;