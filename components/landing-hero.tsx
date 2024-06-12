"use client"

import TextAnimation from "./text-animation";

import { AboutMe } from "@/components/responsive/about-me";

export const LandingHero = () => {

    return (
        <>
            <div className="font-bold">
                <div className="flex justify-start">
                    <div className="text-3xl lg:text-6xl">
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
