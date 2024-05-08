"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div>
                    {/* <Image
                        fill
                        alt="Logo"
                        src="/logo.jpg"
                    /> */}
                </div>
                <h1 className={cn("text-2x1 font bold text-white", font.className)}>
                    Rafael Jara
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up" className="rounded-full">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </nav>
    )

}