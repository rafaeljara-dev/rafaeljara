import React from 'react';
import Image from 'next/image';

interface HeaderContentProps {
    imageSrc: StaticImageData; // Tipo específico para las imágenes estáticas importadas
    text: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ imageSrc, text }) => {
    return (
        <div className="header-content flex flex-col items-center justify-center bg-black p-4">
            <Image src={imageSrc} alt="Header Image" className="w-full flex" />
            <h1 className="text-white text-center mt-4">{text}</h1>
        </div>
    );
}

export default HeaderContent;
