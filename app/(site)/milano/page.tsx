import Image from 'next/image'
import React from 'react'
import { Carousel, Tags } from '@/components'

const milanoData = [
    { id: 1, imageUrl: '/mil3.png',  },
    { id: 2, imageUrl: '/mil.png' },
    { id: 3, imageUrl: '/mil2.png', },
    { id: 4, imageUrl: '/mil6.png',},
    { id: 5, imageUrl: '/mil4.png' },
    { id: 6, imageUrl: '/mil5.png' },
]
const Milano = () => {
  return (
    <div className='pt-36 mb-36 md:mt-12 mt-20 padding_r_l'>
        <div className='text-white md:text-center text-start'>
        <h1 className=' md:text-6xl text-2xl leading-20 font-semibold'>Milanosignatures Apartment</h1>
        <h3 className='md:text-xl text-base  md:mt-6 mt-3 '>Milanosignatures Apartment provides ideal accomodation within Lagos Mainland</h3>
        </div>

    <div className='w-auto mt-8'>
    <Carousel cardData={milanoData} />
    </div>

    {/* ABout */}
           <div className='py-16'>
            <h1 className='text-white md:text-4xl text-2xl font-semibold'>Description</h1>
            <p className=' text-darkGray-100 leading-7 mt-4 max-w-3xl'>Led the successful redesign and development of the company's website, revolutionizing the user experience for apartment seekers and streamlining online booking and payment processes. Collaborated closely with stakeholders to deliver an engaging platform that showcased available apartments, integrated auxiliary services, and enhanced the company's social media presence. </p>
            <div className='flex items-center md:gap-5 gap-3'>
                <Tags tagName='Frontend' />
                <Tags tagName='Reactjs' />
                <Tags tagName='API' />
                <Tags tagName='Javascript' />
                <Tags tagName='Namecheap' />
                <Tags tagName='Axios' />
            </div>
            <hr  className='mt-8 border-gray-400 border-[1px]'/>
           </div>

           <div className='py-16 max-w-3xl'>
            <h1 className='text-white text-4xl'>Key Responsibilities and Achievements:</h1>
            <ul className='list-disc mt-4 text-white'>
                <li className='mt-4'>
                Collaborated with cross-functional teams to understand business goals and user requirements, resulting in a comprehensive redesign strategy.
                </li>
                <li className='mt-4'>Developed a visually appealing and user-centric website design that showcased available apartments, allowing users to seamlessly browse, select, and book their preferred units.</li>
                <li className='mt-4'>Implemented secure online payment functionality, enhancing the booking process and ensuring a frictionless user experience.</li>
                <li className='mt-4'>Designed and integrated sub-navigation menus to highlight additional services such as chauffeur, restaurant, and laundry services, providing users with a holistic experience.</li>
                <li className='mt-4'>Leveraged Instagram API integration to display the company's latest social media posts on the website, bolstering brand engagement and trust.</li>
            </ul>
           </div>

           <div className='py-16'>
            <h1 className='text-white text-4xl'>Lesson Learned:</h1>
            <ul className='list-disc mt-4 text-white'>
                <li className='mt-4'>
                Gained valuable experience in collaborating with stakeholders to align design with business goals and user needs.
                                </li>
                <li className='mt-4'>
                Developed expertise in integrating third-party APIs for enhanced website functionality.
                    </li>
                <li className='mt-4'>
                Enhanced skills in user-centered design principles and optimizing user flows for maximum engagement.
                </li>
            </ul>
           </div>

           <div className='py-16 '>
           <h1 className='text-white text-4xl'>Apartment List:</h1>
           <div className='grid md:grid-cols-2 grid-cols-1'>
           <div className='py-6 max-w-3xl'>
            <Image src='/milano.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/milano_apartment_list.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/milano_single_apartment_slider.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/milano_single_apartment_description.jpg' alt='milano' width={400} height={400} />
           </div>

           </div>
           </div>


    </div>
  )
}

export default Milano