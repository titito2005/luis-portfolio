import React from "react"
import Image from 'next/image';

export const Certifications: React.FC = () => {
    return (
        <div className="text-center mt-[120px]">
            <p className="text-white text-3xl">Certifications</p>
            <div className='flex flex-row justify-center items-center mt-10'>
                <Image
                    src="/github.png"
                    alt="Descripción de la imagen"
                    width={120}
                    height={120}
                />
                <div className="mx-8 sm:mx-3"></div>
                <Image
                    src="/aws.png"
                    alt="Descripción de la imagen"
                    width={110}
                    height={110}
                />
            </div>
        </div>
    )
}


