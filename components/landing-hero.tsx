"use client"

import TextAnimation from "./text-animation";

import { AboutMe } from "@/components/responsive/about-me";

export const LandingHero = () => {

    return (
        <>
            <div className="font-bold py-24 space-y-5 md:p-4 sm:p-4 lg:p-0">
                <div className="flex justify-start">
                    <div className="text-3xl sm:text-1xl md:text-1xl lg:text-6xl space-y-5">
                        <TextAnimation />
                    </div>
                </div>
                <div>
                    <AboutMe />
                </div>
            </div>
        </>
    );
};
