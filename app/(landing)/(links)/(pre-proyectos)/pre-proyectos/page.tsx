import React from 'react';
import HeaderContent from "@/components/header-content";
import LandingNavbar from "@/components/landing-navbar";
import algodoneros from "@/assets/images/(laptop-images)/algodoneros.png";

const PreProyectos: React.FC = () => {
    const headerImage = algodoneros; // Usamos directamente la importación de la imagen
    const headerText = "Pre Proyectos";

    return (
        <div>
            <LandingNavbar />
            <HeaderContent imageSrc={headerImage} text={headerText} />
        </div>
    );
}

export default PreProyectos;
