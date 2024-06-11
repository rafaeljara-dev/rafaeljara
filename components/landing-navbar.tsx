"use client"

import * as React from "react"

import { Montserrat } from "next/font/google"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Switch } from "@/components/ui/switch"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/ui/mode-toggle"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});


export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="fixed opacity-90 bg-zinc-950 dark:bg-white">
            <nav className="lg:px-20 lg:mx-20 p-4 bg-transparent flex items-center justify-between fixed top-0 left-0 right-0 z-50">
                <div>
                    <Link href="/" className="flex items-center">
                        <h1 className={cn("text-2x1 font bold", font.className)}>
                            Rafael Jara
                        </h1>
                    </Link>
                </div>
                {/* Navbar Desktop */}
                <div className="hidden md:flex items-center gap-x-2">
                    <Link href="#home" legacyBehavior passHref>
                        <Button
                            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            Inicio
                        </Button>
                    </Link>
                    <Link href="#experience" legacyBehavior passHref>
                        <Button
                            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            Experiencia
                        </Button>
                    </Link>
                    <Link href="#projects" legacyBehavior passHref>
                        <Button
                            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            Proyectos
                        </Button>
                    </Link>
                    <Link href="#about" legacyBehavior passHref>
                        <Button
                            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            Sobre mi
                        </Button>
                    </Link>
                    <Link href="#contact" legacyBehavior passHref>
                        <Button
                            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            Contacto
                        </Button>
                    </Link>
                    <ModeToggle />
                </div>


                {/* Navbar Mobile */}
                <div className="lg:hidden md:hidden flex items-center gap-x-2">
                    <ModeToggle />
                    <Button variant="outline" className="rounded-full">
                        <Sheet>
                            <SheetTrigger>Menú</SheetTrigger>
                            <SheetContent>
                                <div className="flex">
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
                            </SheetContent>
                        </Sheet>
                    </Button>

                </div>
            </nav>
            <Separator />
        </div>
    )

}

export default LandingNavbar;