import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='absolute flex items-center z-10'>
      <nav className='flex flex-col md:mb-4 md:mt-0 mt-2 items-center md:px-5'>
        <div className='flex cursor-pointer flex-row items-center justify-center space-x-3'>
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={158} height={59} />
          </Link>
        </div>
      </nav>
      <div className='md:static fixed flex mb-4 ml-4 items-center md:flex-row md:space-x-2 bottom-0 rounded-full border overflow-hidden
       bg-white bg-opacity-95 px-1 py-4 shadow-xl
       backdrop-blur-sm backdrop-filter dark:border-slate-100/10 '>
        <ul className='flex space-x-0 md:space-x-2 justify-center md:justify-start'>
          <li className='group relative'>
            <Link href='/' className='px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-green-100 md:px-6 md:text-base text-white dark:text-white'>
              Home
              <div className='underline transform-none'></div>
            </Link>
          </li>
          <li className='group relative'>
            <Link href='/' className='px-3 text-sm tracking-wide transition duration-300 ease-in-out dark:hover:text-green-100 md:px-6 md:text-base text-black dark:text-black'>
              Shop
            </Link>
          </li>
          <li className='group relative'>
            <Link href='/' className='px-3 text-sm tracking-wide transition duration-300 ease-in-out dark:hover:text-green-100 md:px-6 md:text-base text-black dark:text-black'>
              Blogs
            </Link>
          </li>
          <li className='group relative'>
            <Link href='/' className='px-3 text-sm tracking-wide transition duration-300 ease-in-out dark:hover:text-green-100 md:px-6 md:text-base text-black dark:text-black'>
              Stack
            </Link>
          </li>
          <li className='group relative'>
            <Link href='/' className='px-3 text-sm tracking-wide transition duration-300 ease-in-out dark:hover:text-green-100 md:px-6 md:text-base text-black dark:text-black'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
