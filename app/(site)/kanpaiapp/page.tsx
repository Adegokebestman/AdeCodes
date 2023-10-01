import Image from 'next/image'
import React from 'react'
import { Carousel, Tags } from '@/components'

const kanpaiData = [
    { id: 1, imageUrl: '/kanpai1.jpg',  },
    { id: 2, imageUrl: '/kanpai2.jpg' },
    { id: 3, imageUrl: '/kanpai3.jpg', },
    { id: 4, imageUrl: '/kanpai4.jpg' },
    { id: 5, imageUrl: '/kanpai5.jpg',},
    { id: 6, imageUrl: '/kanpai6.jpg' },
]
const Kanpai = () => {
  return (
    <div className='pt-36 mb-36 md:mt-12 mt-20 padding_r_l'>
        <div className='text-white md:text-center text-start'>
        <h1 className=' md:text-6xl text-2xl leading-20 font-semibold'> Kanpai - Inventory Management System</h1>
        <h3 className='md:text-xl text-base  md:mt-6 mt-3 '> Kanpai e-commerce venture— an inventory management system that seamlessly links buyers, suppliers, and truck drivers.</h3>
        </div>

    <div className='bg-bluee-400 w-full mt-8'>
    <Carousel cardData={kanpaiData} />
    </div>

    {/* ABout */}
           <div className='py-16'>
            <h1 className='text-white md:text-4xl text-2xl font-semibold'>Description</h1>
            <p className=' text-darkGray-100 leading-7 mt-4 max-w-3xl'>
            Developed a comprehensive inventory management system, Kanpai, designed to streamline the supply chain process. The system encompasses buyer, supplier, and delivery agent functionalities, enabling seamless product ordering, assignment, and delivery tracking.
                 </p>
            <div className='flex items-center md:gap-5 gap-3'>
                <Tags tagName='Frontend' />
                <Tags tagName='Reactjs' />
                <Tags tagName='API' />
                <Tags tagName='Javascript' />
                <Tags tagName='Tailwind' />
                <Tags tagName='Axios' />
            </div>
            <hr  className='mt-8 border-gray-400 border-[1px]'/>
           </div>

           <div className='py-16 max-w-3xl'>
            <h1 className='text-white text-4xl'>Key Features:</h1>
            <ul className='list-disc mt-4 text-white'>
                <li className='mt-4'>
                Buyer and Supplier Dashboards for efficient inventory management.
                </li>
                <li className='mt-4'>
                    Developed a visually appealing and user-centric website design that showcased available apartments, allowing users to seamlessly browse, select, and book their preferred units.
                    </li>
                <li className='mt-4'>
                Product Upload and Order Placement functionality for suppliers and buyers.
                    </li>
                <li className='mt-4'>
                Order Assignment and Delivery Tracking for efficient logistics management.
                                    </li>
                <li className='mt-4'>
                Integration with backend APIs to ensure real-time data synchronization.
                                    </li>
            </ul>
           </div>

           <div className='py-16 max-w-3xl'>
            <h1 className='text-white text-4xl'>Roles and Achievements:</h1>
            <ul className='list-disc mt-4 text-white'>
                <li className='mt-4'>
                Led the frontend development of Kanpai, utilizing React.js for interactive user interfaces.
                                </li>
                <li className='mt-4'>
                Designed and implemented user-friendly interfaces for buyers, suppliers, and delivery agents.
                    </li>
                <li className='mt-4'>
                Integrated frontend with backend APIs to ensure smooth data flow and real-time updates.
                    </li>
                <li className='mt-4'>
                Collaborated closely with backend developers to ensure seamless end-to-end functionality.
                                    </li>
                <li className='mt-4'>
                Achieved improved user experience by implementing responsive design principles using Tailwind CSS.
                                                    </li>
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
           <h1 className='text-white text-4xl'>Kanpaiapp:</h1>
           <div className='grid md:grid-cols-2 grid-cols-1'>
           <div className='py-6 max-w-3xl'>
            <Image src='/kanpai1.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/kanpai1.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/kanpai2.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/kanpai3.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/kanpai4.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/kanpai5.jpg' alt='milano' width={400} height={400} />
           </div>

           <div className='py-6'>
            <Image src='/kanpai6.jpg' alt='milano' width={400} height={400} />
           </div>
           </div>
           </div>


    </div>
  )
}

export default Kanpai