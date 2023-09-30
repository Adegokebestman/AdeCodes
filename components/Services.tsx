import React from 'react'
// import { ServiceProps } from '@/types';

const Services = () => {
  return (
    <div className=" text-gray-100">
	<div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div className="max-w-3xl mx-auto text-center">
			{/* <h2 className="text-3xl font-extrabold sm:text-4xl">Services</h2> */}
			{/* <p className="mt-4 text-lg text-gray-400"> </p> */}
		</div>
		<dl className="mt-6 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">UX Design</dt>
					<dd className="mt-2 text-gray-400">Restructuring user flows and creating new wireframes, we can work together to create a seamless and enjoyable experience for your users.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">UI Design</dt>
					<dd className="mt-2 text-gray-400">User Interface (UI)  help create a visually stunning and engaging experience for your users, resulting in a greater appreciation for your product or service.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Web Design</dt>
					<dd className="mt-2 text-gray-400">Web design can be considered a powerful marketing tool. I specialise in designing websites that effectively generate leads for your company, helping to drive growth and success.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Front-end Development</dt>
					<dd className="mt-2 text-gray-400">I specialize in creating custom web designs using Webflow and then bringing them to life using HTML, CSS, and JavaScript. (React/Typescript)</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Consultancy</dt>
					<dd className="mt-2 text-gray-400">Are you struggling with difficult product-related questions? In addition to providing design services, I can also consult with you on topics such as design systems and product structure, both for your current product and for any future products you may have.</dd>
				</div>
			</div>

		</dl>
	</div>
</div>
  );
};
export default Services