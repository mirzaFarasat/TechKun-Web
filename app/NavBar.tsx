import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const links = [
        {lable:'About Us', href:'/about-us'},
        {lable:'Our Work', href:'/services'},
        {lable:'Carriers', href:'/'},
        {lable:'Contact Us', href:'/contact-us'}
    ]
  return (
    <nav className='flex space-x-8 border-b mb-7 px-5 h-14 items-center'>
        <Link href="/">Black Stone Technologies</Link>
        <ul className='space-x-6'>
            {links.map(link => 
            <Link 
            key={link.href} className='text-zinc-200 hover:text-zinc-500 transition-colors'
            href={link.href}>{link.lable}</Link>)}
        </ul>
    </nav> 
  )
}

export default NavBar