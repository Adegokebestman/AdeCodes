import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Footer = () => {
  return (
    <div className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center py-8 md:px-5 px-2 xl:px-0 ">
    <footer className=" flex flex-col mt-5 rounded-2xl w-full h-full border border-darkGray-100">
      <h1 className="text-white flex flex-row py-4 px-8 font-bold text-[20px] leading-7">
        Join the Creative Community
      </h1>
      <h2 className="text-darkGray-100 py-2 px-8 text-[16px]">
        Join 1100+ creators who receive one actionable tip to launch, grow, and
        monetize your online business weekly.
      </h2>
      <div className="flex justify-start items-center px-8 mb-2">
        <CustomButton
          title="Coming soon"
          btnType="button"
          containerStyles="bg-green-100 border-1 text-white rounded-full
      mt-8 px-5 py-2 text-xl"
        />
      </div>
      <hr className="mb-10 mx-10 mt-10 border-t dark:border-slate-100/10" />
      <div className="flex flex-col mb-8 items-center justify-center  md:space-y-5 lg:md:space-y-0 lg:flex-row lg:justify-between">
        <div className="order-2 flex flex-col items-center justify-center space-y-5 md:order-1 md:flex-row md:space-x-10 md:space-y-0">
          <h3 className="description cursor-pointer text-darkGray-100 px-8">
            Buy this &nbsp;
            <span className="text-white dark:text-primary">Template</span>
          </h3>
          <h3 className="description cursor-pointer text-darkGray-100">
            Become an &nbsp;
            <span className="text-white dark:text-primary">Affiliate</span>
          </h3>
          <h3 className="description text-darkGray-100">©2023 Adegoke</h3>
        </div>
        <div className="order-1 mb-3 flex flex-row  items-center md:order-2 md:mb-0">
          <div className=" flex flex-row items-center justify-center space-x-3 py-2 ">
            <Link href='https://instagram.com/the_coderboy'>
            <Image src='/mdi_instagram.svg' alt="IG" width={24} height={24} />
            </Link>

            <Link href='https://twitter.com/thecoderboyy'>
            <Image src='/mdi_twitter.svg' alt="twitter" width={24} height={24} />
            </Link>

            <Link href='http://linkedin.com/in/adegokebestman'>
            <Image src='/mdi_linkedin.svg' alt="linkedin" width={24} height={24} />
            </Link>

            <Link href='https://github.com/Adegokebestman'>
            <Image src='/mdi_github.svg' alt="github" width={24} height={24} />
            </Link>

            {/* <Link href=''>
            <Image src='/dribble.svg' alt="dribble" width={24} height={24} />
            </Link> */}

          </div>
          <div className="h-6 w-1 border-r p-1 dark:border-slate-100/10"></div>
          <div className="pl-2 px-8">
            {" "}
            <div>
            <Link href=''>
            <Image src='/moon.svg' alt="dribble" width={24} height={24} />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
