"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

import TextAnimation from "./text-animation";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="font-bold py-24 space-y-5">
            <div className="text-3xl sm:text-3xl md:text-3xl lg:text-6xl space-y-5 ml-0">
                <TextAnimation />
            </div>
            <div className="text-sm md:text-xl font-light">
                Rafael Jara
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                        Ver Catalogo
                    </Button>
                </Link>
            </div>
        </div>
    )
}