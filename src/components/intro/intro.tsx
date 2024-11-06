import React from 'react'
import Image from 'next/image';

export const Intro: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p className="text-gray-800 text-5xl font-bold mt-20">Luis Eduardo Rojas Carrillo</p>
                <p className="text-black text-3xl animate-slide-left mt-4">Full Stack Software Developer</p>
            </div>
            <div className="flex flex-col justify-center items-center animate-slide-top">
                <Image
                    src="/computer.svg"
                    alt="Descripción de la imagen"
                    width={600}
                    height={400}
                />
            </div>
        </>
    )
}
