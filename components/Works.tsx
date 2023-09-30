import React from 'react';
import Image from 'next/image';
import { AiFillShopping,AiOutlineDesktop, AiOutlineAppstore } from 'react-icons/ai';



const worksData = [
    {
      id: 1,
      icon: <AiFillShopping />,
      title: 'ShopAxa',
      description: 'Web Development',
      imageSrc: '/1.png',
      backgroundColor: '#FF5733', // Add a background color property
    },
    {
      id: 2,
      icon: <AiOutlineDesktop />,
      title: 'Kanpaiapp',
      description: 'Design, Front-end, SEO',
      imageSrc: '/7.png',
      backgroundColor: '#33FF57', // Add a background color property
    },
    {
      id: 3,
      icon: <AiOutlineAppstore />,
      title: 'Milanosignatures Apartment',
      description: 'Design, Front-end, SEO',
      imageSrc: '/mila.png',
      backgroundColor: '#5733FF', // Add a background color property
    },
    {
        id: 3,
        icon: <AiOutlineAppstore />,
        title: 'Capitaltd',
        description: 'Front-end',
        imageSrc: '/4.png',
        backgroundColor: '#57336F', // Add a background color property
      },
  ];

const Works = () => {
  return (
    <>
    {worksData.map((work) =>
    <div className="rounded-lg bg-[#1F1F1F] p-4 my-5 md:p-0">
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="md:w-2/3 mt-8 px-8">
          <div style={{ backgroundColor: work.backgroundColor }} className="bg-green-100 rounded-lg text-4xl shadow-lg text-white py-6 px-2 flex items-center h-2 w-8 md:w-12">
            {work.icon}
          </div>
          <h1 className="text-white mt-4">{work.title}</h1>
          <h3 className="text-white mt-4">{work.description}</h3>
        </div>
        <div style={{ backgroundColor: work.backgroundColor }} className="mt-4 md:mt-0 bg-green-100 w-full md:w-[400px] h-[200px] rounded-b-md md:rounded-r-2 md:rounded-l-md border-[#1F1F1F] border-l-0 border-t-2 md:border-t-0 md:border-l-0 flex justify-center items-center">
          <div>
            <Image src={work.imageSrc} alt="1" width={200} height={250} />
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default Works;
