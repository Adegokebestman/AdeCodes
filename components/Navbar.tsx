"use client"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname()

  /**
   * Array of objects representing the links to be displayed in the navbar.
   * Each object contains an id, path, and label property.
   */
  const links = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'work', path: '/work', label: 'Work' },
    // { id: 'shop', path: '/shop', label: 'Shop' },
    // { id: 'blogs', path: '/blogs', label: 'Blogs' },
    { id: 'stack', path: '/stack', label: 'Stack' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
    <header>
    <div className='flex fixed z-40 top-0 navbar_blur md:hidden justify-center'>
          <Link href='/'>
            <Image  src='/logo.svg' alt='logo' width={158} height={59} className='object-contain' />
          </Link>
        </div>
     <div className='navbar  md:navbar_blur navbar_blur md:mt-4 mt-28 px-8 flex md:justify-between justify-center items-center z-10'>
      <nav className='flex flex-col md:mb-4 md:mt-0 mt-2 items-center md:px-1'>
        <div className='flex cursor-pointer flex-row items-center justify-center space-x-3'>
          <Link href='/'>
            <Image  src='/logo.svg' alt='logo' width={158} height={59} className='object-contain md:block hidden' />
          </Link>
        </div>
      </nav>
      <div className='md:static relative flex  mb-4 md:ml-4 justify-center items-center md:flex-row md:space-x-2  bottom-0 rounded-full border overflow-hidden nav-pill bg-opacity-95 px-1 py-3 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10'>
      <ul className='flex space-x-0 md:space-x-2 justify-center md:justify-start'>
    {links.map((link) => {

      const isActive = pathname === link.path
      return (
        <div key={link.id} className={`group relative ${ link.path ? ' text-white' : 'text-black dark:text-black'}`}>
        <Link
       className={`px-3 text-sm tracking-wide dark:hover:text-green-100 md:px-6 md:text-base
        ${isActive ? ' text-white font-medium active-link' : ''}`}
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
<div className='md:flex hidden  gap-4'>
<button className='text-white hover:animate-bounce  hover:bg-green-100 rounded-full py-2 px-3 flex items-center gap-2 text-sm'>
  <Link href='https://www.linkedin.com/in/adegokebestman/'>
  LinkedIn
  </Link>
<Image src='/up_arrow.svg' alt='linkedin' width={16} height={16} />
</button>

<button className='text-white hover:animate-bounce flex items-center gap-2 text-sm hover:bg-green-100 rounded-full py-2 px-3  '>
  <Link href='https://drive.google.com/file/d/18JYk77dCVPMTZZl3RBI2j5fida_7Q1Il/view?usp=drivesdk'>
  Resume
  </Link>
<Image src='/up_arrow.svg' alt='linkedin' width={16} height={16} />
</button>
</div>

            </div>
    </header>
  );
};

export default Navbar;

