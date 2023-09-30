"use client";
import React from 'react';
import Image from 'next/image';
import CustomButton  from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 md:py-20 pt-20 padding-x'>
            <h1 className='hero_title'>
            Hi, it's Adegoke. I'm a Frontend Engineer and UI Designer who helps to turn ideas into accessible experiences.
            </h1>
            <h2 className='hero_subtitle '>
            Combining <span className='span'>design</span>  and <span className='span'>code</span>,
            <span className='span'> I craft refined </span> and <span className='span'>unique </span>
             digital products that <span className='span'>elevate </span> the online brand presence of founders, startups, and creators.
            </h2>

            <h3 className='description relative flex items-center text-[14px] text-darkGray-100 mt-8 pl-5'>
            Available for new opportunities
              <span className='absolute left-0 top-1/2 flex h-2 w-2 -translate-y-1/2 transform pl-1'>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-100 pl-1 opacity-75"> </span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-100 pl-2"></span>
              </span>
            </h3>
            <div className='flex items-center'>
            <CustomButton
    title="Hire me"
    btnType="button"
    containerStyles="bg-green-100 spans flex gap-2 items-center hover:animate-ping  hover:border-green-100 text-white rounded-full
    mt-8 px-5 py-3 font-medium text-sm md:text-xl"
    handleClick={handleScroll}
    rightIcon='up_arrow.svg' />

<CustomButton
    title="Get Template"
    btnType='button'
    containerStyles="border-green-100  gap-2 hover:bg-green-100 flex items-center text-white hover:rounded-full
    mt-8 px-5 py-3 text-sm md:text-xl ml-10"
    handleClick={handleScroll}
    rightIcon='mdi_stars-outline.svg' />
            </div>

        </div>
    </div>
  )
}

export default Hero