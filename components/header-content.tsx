import React from 'react';

interface HeaderContentProps {
    gradientFrom: string; // Color inicial del degradado
    gradientTo: string;   // Color final del degradado
    text: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ gradientFrom, gradientTo, text }) => {
    return (
        <div
            className="header-content flex flex-col items-center justify-center p-4"
            style={{ 
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` 
            }}
        >
            <h1 className="text-white text-center mt-4">{text}</h1>
        </div>
    );
}

export default HeaderContent;
