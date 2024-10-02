'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import classNames from 'classnames';
import { FaBug } from "react-icons/fa";
const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        {lable:'About Us', href:'/about-us'},
        {lable:'Our Work', href:'/services'},
        {lable:'Carriers', href:'/'},
        {lable:'Contact Us', href:'/contact-us'}
    ]
  return (
    <nav className='flex space-x-8 border-b px-8 h-20 bg-slate-200 items-center'>
        <Link href="/"><FaBug className='hover:text-zinc-500 transition-colors'/></Link>
        <ul className='space-x-6'>
            {links.map(link => 
            <Link 
            key={link.href} className={classNames({
                'text-zinc-900': link.href===currentPath,
                'text-zinc-500': link.href!==currentPath,
                'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}>{link.lable}</Link>)}
        </ul>
    </nav> 
  )
}

export default NavBar