'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Overlay, { OverlayRef } from './Overlay';

const scrollThreshold = 50;
const links = [
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'About Us', href: '/about-us' }
];

const serviceLinks = [
    { label: 'Web Development', href: '/services/web-development', description: 'Modern web solutions for your business' },
    { label: 'App Development', href: '/services/app-development', description: 'Native and cross-platform mobile apps' },
    { label: 'Cloud Solutions', href: '/services/cloud-solutions', description: 'Scalable cloud infrastructure services' },
    { label: 'AI Integration', href: '/services/ai-integration', description: 'Smart AI solutions for your needs' },
];

const testimonial = {
    quote: "TechKun transformed our business with their innovative solutions. The team's expertise and dedication were exceptional.",
    author: "John Smith",
    role: "CTO, InnovateX"
};

const Navbar = () => {
    const currentPath = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isBelowScrollThreshold, setBelowScrollThreshold] = useState(true);
    const overlayRef = useRef<OverlayRef>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const checkScrollPosition = useCallback(() => {
        if (typeof window !== 'undefined') {
            const isBelow = window.scrollY <= scrollThreshold;
            if (isBelow !== isBelowScrollThreshold) {
                setBelowScrollThreshold(isBelow);
            }
        }
    }, [isBelowScrollThreshold]);

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, [checkScrollPosition]);

    const MegaDropdown = () => (
        <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white shadow-lg transform transition-all duration-300 ease-in-out border-t border-gray-100"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="p-8">
                <div className="flex items-start gap-12">
                    {/* Services Grid - Left Section */}
                    <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                        {serviceLinks.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                                    {service.label}
                                    <span className="inline-block opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                        →
                                    </span>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors line-clamp-2">
                                    {service.description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* Testimonial Card - Right Section */}
                    <div className="w-64 bg-gradient-to-br from-gray-50 to-white rounded-lg p-5 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <div className="h-px flex-grow bg-gray-200"></div>
                        </div>
                        <blockquote className="text-sm text-gray-600 leading-relaxed mb-4">
                            {testimonial.quote}
                        </blockquote>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-900">{testimonial.author}</p>
                                <p className="text-xs text-gray-500">{testimonial.role}</p>
                            </div>
                            <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-primary-700">IX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Mobile menu content
    const menuContent = (
        <div className="shadow-md border-t-2 w-full p-2 bg-white flex flex-col items-stretch">
            {links.map((link) => (
                <div key={link.href} className="w-full">
                    <Link
                        className={`
                            w-full py-4 px-4 font-medium transition-colors block rounded-lg
                            ${link.href === currentPath ? "bg-primary-50 text-primary-900" : "text-primary-600 hover:text-primary-900 hover:bg-gray-50"}
                        `}
                        href={link.href}
                        onClick={(e) => {
                            e.preventDefault(); // Prevent immediate navigation
                            overlayRef.current?.hide();
                            setMenuOpen(false);
                            // Navigate after menu closes
                            setTimeout(() => {
                                window.location.href = link.href;
                            }, 300);
                        }}
                    >
                        {link.label}
                    </Link>
                    {link.hasDropdown && isMenuOpen && (
                        <div className="mt-2 space-y-1 px-4">
                            {serviceLinks.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block py-3 px-4 text-sm text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent immediate navigation
                                        overlayRef.current?.hide();
                                        setMenuOpen(false);
                                        // Navigate after menu closes
                                        setTimeout(() => {
                                            window.location.href = service.href;
                                        }, 300);
                                    }}
                                >
                                    <div className="font-medium">{service.label}</div>
                                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <Link href="/contact-us" className='w-full mt-4 px-4'>
                <button 
                    className="w-full bg-primary-700 hover:bg-primary-800 px-4 py-4 font-medium text-white rounded-lg transition-colors"
                    onClick={(e) => {
                        e.preventDefault();
                        overlayRef.current?.hide();
                        setMenuOpen(false);
                        setTimeout(() => {
                            window.location.href = '/contact-us';
                        }, 300);
                    }}
                >
                    Contact Us
                </button>
            </Link>
        </div>
    );

    return (
        <nav
            className={`
                fixed top-0 w-full h-16 z-50 transition-all duration-300
                ${isBelowScrollThreshold && !isMenuOpen ?
                    "bg-transparent text-white" :
                    "bg-white shadow-md border-b text-primary-900"
                }
            `}
        >
            <div className="case-responsive-container h-full flex justify-between items-center gap-8">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="w-10 md:w-12">
                        <Image src={techkunLogo} alt="techkun-logo" className="w-full" />
                    </Link>
                    <h1 className={`text-lg md:text-xl font-medium ${isBelowScrollThreshold && !isMenuOpen ? "text-white": "text-primary-900"}`}>
                        TechKun
                    </h1>
                </div>

                <div className="hidden md:flex gap-4 ml-auto">
                    {links.map((link) => (
                        <div
                            key={link.href}
                            className="relative"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                className={`
                                    rounded-md px-3 py-2 font-medium transition-colors inline-block
                                    ${currentPath === link.href ? "bg-primary-50 text-primary-900" :
                                    (isBelowScrollThreshold ? "text-white hover:text-gray-300" : "text-primary-600 hover:text-gray-600")}
                                `}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                            {link.hasDropdown && activeDropdown === 'services' && <MegaDropdown />}
                        </div>
                    ))}
                </div>

                <Link href="/contact-us" className="hidden md:block">
                    <button className='rounded-md bg-primary-700 hover:bg-primary-800 px-4 py-2 font-medium text-white'>
                        Contact Us
                    </button>
                </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className={`focus:outline-none ${isBelowScrollThreshold && !isMenuOpen ? "text-white" : "text-primary-600"}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (isMenuOpen) {
                                overlayRef.current?.hide();
                            } else {
                                overlayRef.current?.show();
                            }
                            setMenuOpen(!isMenuOpen);
                        }}
                    >
                        {isMenuOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
                    </button>
                </div>
            </div>

            <Overlay ref={overlayRef} isOpen={isMenuOpen} onToggle={setMenuOpen}>
                {menuContent}
            </Overlay>
        </nav>
    );
};

export default Navbar;