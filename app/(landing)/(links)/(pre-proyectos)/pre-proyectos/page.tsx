import React from 'react';
import HeaderContent from "@/components/header-content";
import LandingNavbar from "@/components/landing-navbar";

const PreProyectos: React.FC = () => {
    const gradientFrom = "#00FF00"; // Color inicial del degradado (verde)
    const gradientTo = "#000000";   // Color final del degradado (negro)
    const headerText = "Pre Proyectos";

    return (
        <div>
            <LandingNavbar />
            <HeaderContent gradientFrom={gradientFrom} gradientTo={gradientTo} text={headerText} />
        </div>
    );
}

export default PreProyectos;
