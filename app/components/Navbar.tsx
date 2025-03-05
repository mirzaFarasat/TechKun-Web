'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Overlay from './Overlay';

const Navbar = () => {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 50);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: 'Services', href: '/services' },
        { label: 'About Us', href: '/about-us' }
    ];

    return (
        <nav
            className={classNames(
                "fixed top-0 w-full h-16 z-50 transition-all duration-300",
                {
                    "bg-white shadow-md border-b text-primary-900": isScrolled,
                    "bg-transparent text-white": !isScrolled,
                }
            )}
        >
            <div className="case-responsive-container h-full flex justify-between items-center gap-8">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="w-10 md:w-12">
                        <Image src={techkunLogo} alt="techkun-logo" className="w-full" />
                    </Link>
                    <h1 className={classNames("text-lg md:text-xl font-medium", {
                        "text-primary-900": isScrolled,
                        "text-white": !isScrolled
                    })}>
                        TechKun
                    </h1>
                </div>


                <div className="hidden md:flex gap-4 ml-auto">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            className={classNames(
                                "rounded-md px-3 py-2 font-medium transition-colors",
                                { "bg-primary-50 text-primary-900": link.href === currentPath },
                                {
                                    "text-primary-600 hover:text-gray-600": isScrolled && link.href !== currentPath,
                                    "text-white hover:text-gray-300": !isScrolled && link.href !== currentPath
                                }
                            )}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link href={"/contact-us"} className="hidden md:block">
                    <button className='rounded-md bg-primary-700 hover:bg-primary-800 px-4 py-2 font-medium text-white'>
                        Contact Us
                    </button>
                </Link>

                <button
                    className="md:hidden text-primary-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
                </button>
            </div>

            <Overlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <div className="w-full bg-white shadow-md border-b">
                    <div className="flex flex-col items-center space-y-4 px-4 py-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                className={classNames(
                                    "w-full text-center py-2 font-medium transition-colors",
                                    { "bg-primary-50 text-primary-900": link.href === currentPath },
                                    { "text-primary-600 hover:text-gray-600": link.href !== currentPath }
                                )}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href={"/contact-us"} className='w-full'>
                            <button className="rounded-md w-full bg-primary-700 hover:bg-primary-800 px-4 py-2 font-medium text-white">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </Overlay>
        </nav>
    );
};

export default Navbar;