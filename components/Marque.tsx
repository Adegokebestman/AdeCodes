import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Marque = () => {
  return (
    <div className='py-0 md:py-8'>
        <Marquee>
            <Image src='/1.png' width={300} height={300} className='rounded-xl space-x-4 pl-4' alt='shopaza' />
            <Image src='/2.png' width={300} height={300} className='rounded-xl space-x-4 pl-4' alt='shopaza' />
            <Image src='/3.png' width={300} height={300} className='rounded-xl space-x-4 pl-4' alt='shopaza' />
            <Image src='/4.png' width={300} height={300} className='rounded-xl space-x-4 pl-4' alt='shopaza' />
            <Image src='/5.png' width={300} height={300} className='rounded-xl space-x-4 pl-4' alt='shopaza' />
        </Marquee>
    </div>
  )
}

export default Marque