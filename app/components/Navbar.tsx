'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Overlay, { OverlayRef } from './Overlay';

const scrollThreshold = 50;
const links = [
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about-us' }
];

const Navbar = () => {
    const currentPath = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isBelowScrollThreshold, setBelowScrollThreshold] = useState(true);
    const overlayRef = useRef<OverlayRef>(null);

    const checkScrollPosition = useCallback(() => {
        if (window.scrollY <= scrollThreshold !== isBelowScrollThreshold)
            setBelowScrollThreshold(!isBelowScrollThreshold)
    }, [isBelowScrollThreshold]);

    useEffect(checkScrollPosition, [checkScrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, [checkScrollPosition]);

    const menuContent = useMemo(() => <div className="shadow-md border-t-2 w-full p-2 bg-white flex flex-col items-center">
        {links.map((link, index) => (
            <Link
                key={link.href}
                className={`
                    w-full text-center py-4 font-medium transition-colors",
                    ${
                        link.href === currentPath ? "bg-primary-50 text-primary-900":
                        "text-primary-600 hover:text-gray-600"
                    }
                    ${index !== (links.length - 1) ? "border-b": ""}
                `}
                href={link.href}
                onClick={() => overlayRef.current?.hide()}
            >
                {link.label}
            </Link>
        ))}
        <Link href={"/contact-us"} className='w-full'>
            <button className="w-full bg-primary-700 hover:bg-primary-800 px-4 py-4 font-medium text-white">
                Contact Us
            </button>
        </Link>
    </div>, [currentPath]);

    return (
        <nav
            className={`
                fixed top-0 w-full h-16 z-50 transition-all duration-300
                ${ isBelowScrollThreshold && !isMenuOpen ?
                    "bg-transparent text-white":
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
                    <h1 className={`text-lg md:text-xl font-medium ${
                        isBelowScrollThreshold && !isMenuOpen ? "text-white": "text-primary-900"
                    }`}>
                        TechKun
                    </h1>
                </div>

                <div className="hidden md:flex gap-4 ml-auto">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            className={`
                                rounded-md px-3 py-2 font-medium transition-colors
                                ${
                                    currentPath === link.href ? "bg-primary-50 text-primary-900":
                                    (isBelowScrollThreshold ? "text-white hover:text-gray-300": "text-primary-600 hover:text-gray-600")
                                }
                            `}
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
                    onClick={() => overlayRef.current?.toggle()}
                >
                    {isMenuOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
                </button>
            </div>

            <Overlay ref={overlayRef} isOpen={isMenuOpen} onToggle={setMenuOpen}>
                {menuContent}
            </Overlay>
        </nav>
    );
};

export default Navbar;