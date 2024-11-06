"use client";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import "./globals.css";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className="h-screen">
      <div className="div-blanco z-10 relative">
        <div className='imagen-redonda mt-10 ml-[15%]'>
        <Image 
            src="/raccon.png"
            alt="Descripción de la imagen"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-black text-5xl">Luis Eduardo Rojas Carrillo</p>
          <p className="text-black text-3xl animate-slide-left mt-10">Full Stack Software Developer</p>
          <p className="text-black text-xl animate-slide-right">I design and code beautifully simple things, and I love what I do.</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 animate-slide-top">
          <Image 
            src="/computer.svg"
            alt="Descripción de la imagen"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="bg-slate-950 div-azul">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-3xl mt-[280px]">Hi, I’m Luis. Nice to meet you.</p>
          <p className="text-white text-xl w-[60%] mt-10">Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg mt-[100px] w-3/4 mx-auto z-10">
          <div className="grid grid-cols-3 border-b">
            <div className="p-4 border-r last:border-r-0 text-center">
              <h2 className="text-xl font-bold">Frontend Developer</h2>
              <p className="text-gray-700">Contenido de la columna 1.</p>
            </div>
            <div className="p-4 border-r last:border-r-0 text-center">
              <h2 className="text-xl font-bold">Backend Developer</h2>
              <p className="text-gray-700">Contenido de la columna 2.</p>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">Technologies</h2>
              <p className="text-gray-700">Contenido de la columna 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
