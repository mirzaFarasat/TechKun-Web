'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import classNames from 'classnames';
import { FaBug } from "react-icons/fa";
import { Button } from '@radix-ui/themes';


const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        { lable: 'Our Work', href: '/services' },
        // { lable: 'Carriers', href: '/' },
        { lable: 'About Us', href: '/about-us' },
        // { lable: 'Contact Us', href: '/contact-us' }
    ];

    return (
        <nav className='fixed top-0 shadow border-b w-full h-16 bg-white'>
            <div className='case-responsive-container h-full flex justify-between items-center'>
                <div className='flex flex-row items-center space-x-16'>
                    <div className='flex flex-row items-center space-x-2 text-lg font-semibold'>
                        <Link className='' href="/">
                            <FaBug className='hover:text-zinc-500 transition-colors' />
                        </Link>
                        <div>Techkun</div>
                    </div>

                    <ul className='space-x-12'>
                        {links.map(link =>
                            <Link key={link.href} className={classNames({
                                    'text-zinc-900': link.href === currentPath,
                                    'text-zinc-500': link.href !== currentPath,
                                    'hover:text-zinc-800 font-semibold transition-colors': true
                                })}
                                href={link.href}>
                                {link.lable}
                            </Link>)}
                    </ul>
                </div>

                <Button size={"3"} color="blue">Contact Us</Button>
            </div>
        </nav>
    )
};

export default NavBar;
