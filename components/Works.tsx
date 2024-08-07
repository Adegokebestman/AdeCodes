import React from 'react';
import Image from 'next/image';
import { AiFillShopping,AiOutlineDesktop, AiOutlineAppstore } from 'react-icons/ai';
import { CiCoffeeCup } from "react-icons/ci";
import Link from 'next/link';



const worksData = [
  {
    id: 1,
    icon: <AiOutlineDesktop />,
    title: 'Kanpaiapp',
    description: 'Design, Frontend, SEO',
    imageSrc: '/7.png',
    backgroundColor: '#F17840', // Add a background color property
    url: '/kanpaiapp'
  },

  {
    id:2,
    icon: <CiCoffeeCup />,
    title: 'Dopecoffee',
    description: 'Frontend',
    imageSrc: '/dope.png',
    backgroundColor: '#FF15F6',
    url: 'https://dopecoffee.club'
  },

  {
      id: 3,
      icon: <AiFillShopping />,
      title: 'ShopAxa',
      description: 'Frontend, SEO',
      imageSrc: '/1.png',
      backgroundColor: '#6879d0', // Add a background color property
      url: 'https://shopaxa.vercel.app/'
    },

    {
      id: 4,
      icon: <AiOutlineAppstore />,
      title: 'Milanosignatures Apartment',
      description: 'Design, Frontend, SEO',
      imageSrc: '/mila.png',
      backgroundColor: '#CBA135', // Add a background color property
      url: '/milano'
    },
      {
        id: 5,
        icon: <AiOutlineAppstore />,
        title: 'Drjay',
        description: 'Frontend',
        imageSrc: '/11.png',
        backgroundColor: '#da4949', // Add a background color property
        url: 'https://www.drjay.pro/'
      },
      {
        id: 6,
        icon: <AiOutlineAppstore />,
        title: 'Creative Max Studio',
        description: 'Frontend, Framer',
        imageSrc: '/10.png',
        backgroundColor: '#99A1F0', // Add a background color property
        url: 'https://creativemaxstudios.framer.website/'
      },
      {
        id: 7,
        icon: <AiOutlineAppstore />,
        title: 'Capitaltd',
        description: 'Frontend',
        imageSrc: '/4.png',
        backgroundColor: '#57336F', // Add a background color property
        url: 'https://www.caplensltd.com/'
      },
  ];

const Works = () => {
  return (
    <>
    {worksData.map((work) =>
    <div className="rounded-lg bg-[#1F1F1F] p-4 my-5 md:p-0">
        <Link href={work.url}>
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="md:w-2/3 mt-8 px-8">
          <div style={{ backgroundColor: work.backgroundColor }} className="bg-green-100 rounded-lg text-4xl shadow-lg text-white py-6 px-2 flex items-center h-2 w-8 md:w-12">
            {work.icon}
          </div>
          <h1 className="text-white mt-4">{work.title}</h1>
          <h3 className=" text-darkGray-100 mt-2">{work.description}</h3>
        </div>
        <div style={{ backgroundColor: work.backgroundColor }} className="mt-4 md:mt-0 bg-green-100 w-full md:w-[400px] h-[200px] rounded-b-md rounded rounded-r-md md:rounded-r-2 md:rounded-l-0 border-[#1F1F1F] border-l-0 border-t-2 md:border-t-0 md:border-l-0 flex justify-center items-center">
          <div>
            <Image src={work.imageSrc} alt="1" width={200} height={250} />
          </div>
        </div>
      </div>
      </Link>
    </div>
    )}
    </>
  );
};

export default Works;
