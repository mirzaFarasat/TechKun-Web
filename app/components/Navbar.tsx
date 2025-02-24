'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: 'Services', href: '/services' },
        { label: 'About Us', href: '/about-us' }
    ];

    return (
        <nav className="fixed top-0 shadow border-b w-full h-16 bg-white z-50">
            <div className="case-responsive-container h-full flex justify-between items-center gap-8">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="w-10 md:w-12">
                        <Image src={techkunLogo} alt="techkun-logo" className="w-full" />
                    </Link>
                    <h1 className="text-lg md:text-xl font-semibold">TechKun</h1>
                </div>
                <div className="hidden md:flex gap-4 ml-auto">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            className={classNames(
                                "rounded-md px-3 py-2 font-semibold transition-colors",
                                { "bg-primary-50 text-primary-900": link.href === currentPath },
                                { "text-primary-600 hover:text-gray-600": link.href !== currentPath }
                            )}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:block">
                    <Button size="3" color="blue">Contact Us</Button>
                </div>
                <button
                    className="md:hidden text-primary-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md border-b">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                className={classNames(
                                    "w-full text-center py-2 font-semibold transition-colors",
                                    { "bg-primary-50 text-primary-900": link.href === currentPath },
                                    { "text-primary-600 hover:text-gray-600": link.href !== currentPath }
                                )}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button size="3" color="blue" className="w-full text-center">
                            Contact Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
