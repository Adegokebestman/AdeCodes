import React from 'react';
import Image from 'next/image';

const page = () => {

  return (
    <div className='pt-36 mb-36'>
        <h1 className='hero_title'>
           Apps
            </h1>
            <h2 className='hero_subtitle '>
            The software I utilize to create amazing projects and manage my daily life
            </h2>
            <div className='mt-4'>
                <div className='mt-10 grid justify-items-center gap-10 md:grid-cols-3 md:justify-items-start md:gap-5 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10'>
                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/Figma.svg' alt='figma' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Figma</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Design</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/Notion.svg' alt='notion' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Notion</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Productivity</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/Canva.svg' alt='canva' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Canva</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Design</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/Tailwindcss.svg' alt='tailwind' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Tailwind</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Framework</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/vscode-logo.png' alt='canva' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Vscode</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Code</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/image 1.svg' alt='canva' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">React</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Library</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/image 2.svg' alt='canva' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Lemon squeezy</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Payment</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/ChatGPT-Logo.png' alt='canva' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">ChatGPT</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">AI Assistant</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/sanity.png' alt='sanity' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Sanity</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">CMS</h4>
                 </div>
                    </div>

                    <div className='group flex cursor-pointer  flex-col space-y-5 rounded-2xl border border-darkGray-100 p-5 dark:bg-hoverBlack w-[200px] md:w-full'>
            <Image src='/paystack.png' alt='sanity' width={100} height={100} className='flex self-center'/>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="font-normal text-white">Paystack</h3>
                <h4 className="w-auto rounded-lg text-white border bg-customGray px-3 py-1 text-sm  font-extralight
                 border-green-100 dark:bg-hoverBlack">Payment</h4>
                 </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default page