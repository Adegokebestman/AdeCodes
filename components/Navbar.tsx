"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter();
  // const [activeLink, setActiveLink] = useState('home');
  const [mobileActiveLink, setMobileActiveLink] = useState('home'); // Separate state for mobile
  // Use localStorage to store active link state
  const storedActiveLink = localStorage.getItem('activeLink');
  const initialActiveLink = storedActiveLink || 'home';
  const [activeLink, setActiveLink] = useState(initialActiveLink);


  useEffect(() => {
    // Store active link in localStorage whenever it changes
    localStorage.setItem('activeLink', activeLink);
  }, [activeLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  return (
    <header className='absolute flex items-center z-10'>
      <nav className='flex flex-col md:mb-4 md:mt-0 mt-2 items-center md:px-5'>
        <div className='flex cursor-pointer flex-row items-center justify-center space-x-3'>
          <Link href='/' onClick={() => handleLinkClick('home')}>
            <Image src='/logo.svg' alt='logo' width={158} height={59} className='object-contain' />
          </Link>
        </div>
      </nav>
      <div className='md:static fixed flex mb-4 ml-8 justify-center items-center md:flex-row md:space-x-2  bottom-0 rounded-full border overflow-hidden bg-white bg-opacity-95 px-1 py-4 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10'>
        <ul className='flex space-x-0 md:space-x-2 justify-center md:justify-start'>
          <li className={`group relative ${activeLink === 'home' ? 'font-medium text-white active-link' : 'text-black dark:text-black'}`}>
            <Link href='/' onClick={() => handleLinkClick('home')} className={`px-3 text-sm tracking-wide   dark:hover:text-green-100 md:px-6 md:text-base ${activeLink === 'home' ? 'rounded-full bg-green-100 py-4 px-2   slide-left' : ''}`}>
              Home
              {/* <div className='underline transform-none'></div> */}
            </Link>
          </li>
          <li className={`group relative ${activeLink === 'shop' ? 'font-medium text-white active-link' : 'text-black dark:text-black'}`}>
            <Link href='/shop' onClick={() => handleLinkClick('shop')} className={`px-3 text-sm tracking-wide   dark:hover:text-green-100 md:px-6 md:text-base ${activeLink === 'shop' ? 'rounded-full border bg-green-100 py-4 px-2  slide-left' : ''}`}>
              Shop
            </Link>
          </li>
          <li className={`group relative ${activeLink === 'blogs' ? 'font-medium text-white active-link' : 'text-black dark:text-black'}`}>
            <Link href='/blogs' onClick={() => handleLinkClick('blogs')} className={`px-3 text-sm tracking-wide   dark:hover:text-green-100 md:px-6 md:text-base ${activeLink === 'blogs' ? 'rounded-full border bg-green-100 py-4 px-2  slide-left' : ''}`}>
              Blogs
            </Link>
          </li>
          <li className={`group relative ${activeLink === 'stack' ? 'font-medium text-white active-link' : 'text-black dark:text-whiblackte'}`}>
            <Link href='/stack' onClick={() => handleLinkClick('stack')} className={`px-3 text-sm tracking-wide   dark:hover:text-green-100 md:px-6 md:text-base ${activeLink === 'stack' ? 'rounded-full border bg-green-100 py-4 px-2  slide-left' : ''}`}>
              Stack
            </Link>
          </li>
          <li className={`group relative ${activeLink === 'contact' ? 'font-medium text-white active-link' : 'text-black dark:text-black'}`}>
            <Link href='/contact' onClick={() => handleLinkClick('contact')} className={`px-3 text-sm tracking-wide   dark:hover:text-green-100 md:px-6 md:text-base ${activeLink === 'contact' ? 'rounded-full border bg-green-100 py-4 px-2  slide-left' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Navbar;
