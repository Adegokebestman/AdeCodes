import React from 'react';
import { Works } from '@/components';

const Work = () => {
  return (
    <div className='pt-36 mb-36 md:mt-20 mt-20 padding_r_l'>
       <div className='text-white  text-start'>
        <h1 className=' md:text-6xl text-2xl leading-20 font-semibold'> Work </h1>
        <h3 className='md:text-lg text-base mb-28  md:mt-6 mt-3 '> Below you can find a few projects which showcase what I can bring to the table. Within these projects, I dive into my process of how I solve real problems in today's world through the power of design.</h3>
        </div>
        <Works />
    </div>
  )
}

export default Work