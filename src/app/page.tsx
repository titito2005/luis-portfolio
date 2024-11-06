"use client";
import Image from 'next/image';
import "./globals.css";
import { Intro } from "@/components//intro/intro"
import { Table } from "@/components//table/table"
import { Certifications } from '@/components/certifications/certifications';
import { Experience } from '@/components/experience/experience';
export default function Home() {

  return (
    <div>
      <div className="px-[18%] sm:px-[7%]">
        <div className='imagen-redonda mt-10'>
        <Image 
            src="/raccon.png"
            alt="Descripción de la imagen"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        <Intro/>
      </div>
      <div className="bg-base-blue px-[18%] sm:px-[7%] mt-[-50px] pb-[200px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-3xl mt-[160px] text-center font-bold">Hi, I’m Luis. Nice to meet you.</p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-gray-300 text-base mt-10 text-center lg:w-[55%] leading-7">Since graduating from the University of Costa Rica in 2022, I have focused on web development, working on both Front-End and Back-End projects. I have contributed to building accessible websites, ensuring compliance with W3C accessibility guidelines, and optimizing designs for mobile devices through responsive design. I am passionate about web development and continuously work on improving my skills. My main goal is to create scalable, efficient, and inclusive solutions that provide a seamless user experience.</p>
        </div>
        <Table/>
        <Experience/>
        <Certifications/>
      </div>
    </div>
  );
}
