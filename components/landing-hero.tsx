"use client"

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

import TextAnimation from "./text-animation";

import profileImg from "@/assets/images/(profile-img)/profile.jpeg";
import banderaMX from "@/assets/images/(profile-img)/mx.png";  // Importa la imagen de la bandera

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="font-bold py-24 space-y-5">
                <div className="flex justify-start">
                    <div className="text-3xl sm:text-1xl md:text-1xl lg:text-6xl space-y-5">
                        <TextAnimation />
                    </div>
                </div>
                <div className="flex justify-end items-center space-x-5">
                    <div>
                        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                            <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                                Contactar
                            </Button>
                        </Link>
                    </div>
                    <div className="text-sm md:text-xl font-light text-right">
                        Hola, soy Rafael Jara, Ingeniero en Software <br />independiente, originario de México
                        <img src={banderaMX.src} alt="Bandera de México" className="inline-block w-6 h-6 ml-2" />  {/* Agrega la imagen de la bandera */}
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                        <img src={profileImg.src} alt="Rafael Jara" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
};
