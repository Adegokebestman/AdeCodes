"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname()

  const links = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'shop', path: '/shop', label: 'Shop' },
    { id: 'blogs', path: '/blogs', label: 'Blogs' },
    { id: 'stack', path: '/stack', label: 'Stack' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
    <header className='absolute flex items-center z-10'>
      <nav className='flex flex-col md:mb-4 md:mt-0 mt-2 items-center md:px-1'>
        <div className='flex cursor-pointer flex-row items-center justify-center space-x-3'>
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={158} height={59} className='object-contain' />
          </Link>
        </div>
      </nav>
      <div className='md:static fixed flex mb-4 ml-8 justify-center items-center md:flex-row md:space-x-2  bottom-0 rounded-full border overflow-hidden bg-white bg-opacity-95 px-1 py-4 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10'>
      <ul className='flex space-x-0 md:space-x-2 justify-center md:justify-start'>
    {links.map((link) => {

      const isActive = pathname === link.path
      return (
        <div key={link.id} className={`group relative ${ link.path ? 'font-medium text-black' : 'text-black dark:text-black'}`}>
        <Link
       className={`px-3 text-sm tracking-wide   dark:hover:text-green-100 md:px-6 md:text-base ${isActive ? ' text-white  active-link' : ''}`}
        href={link.path}
        key={link.id}
      >
        {link.label}
      </Link>
      </div>
      )
    })}
    </ul>
      </div>
    </header>
  );
};

export default Navbar;

