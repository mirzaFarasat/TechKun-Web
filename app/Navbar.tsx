'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import classNames from 'classnames';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";

const Navbar = () => {
    const currentPath = usePathname();
    const links = [
        { lable: 'Services', href: '/services' },
        { lable: 'Carriers', href: '/' },
        { lable: 'About Us', href: '/about-us' }
        
        // { lable: 'Contact Us', href: '/contact-us' }
    ];

    return (
        <nav className='fixed top-0 shadow border-b w-full h-16 bg-white'>
            <div className='case-responsive-container h-full flex justify-between items-center'>
                <div className='flex flex-row items-center space-x-16'>
                    <div className='flex flex-row items-center space-x-4'>
                        <Link className='w-12' href="/">
                            <Image src={techkunLogo} alt='techkun-logo' className='w-full'/>
                        </Link>
                        <h1 className='text-xl font-semibold'>TechKun</h1>
                    </div>

                    <div className='flex flex-row space-x-6 '>
                        {links.map(link =>
                            <Link key={link.href} className={classNames({
                                    'bg-primary-50 text-primary-900': link.href === currentPath,
                                    'text-primary-600 hover:text-gray-600': link.href !== currentPath,
                                    'rounded-md px-3 py-2 font-semibold transition-colors': true
                                })}
                                href={link.href}>
                                {link.lable}
                            </Link>)}
                    </div>
                </div>

                <Button size={"3"} color="blue">Contact Us</Button>
            </div>
        </nav>
    )
};

export default Navbar;
