"use client"

import { useRef, RefObject } from 'react';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "./ui/card"

import Image from "next/image";

import { Separator } from "@/components/ui/separator"

import sait from "@/assets/images/(laptop-images)/sait.png"
import itsonmeet from "@/assets/images/(laptop-images)/itsonmeet.png"
import lnm from "@/assets/images/(laptop-images)/liganorte.png"
import algodoneros from "@/assets/images/(laptop-images)/algodoneros.png"

const testimonials = [
    {
        name: "It´s On Meet",
        avatar: "A",
        title: "Mobile App, Website",
        description: "Social Media app to connect with experts",
        image: itsonmeet,
    },
    {
        name: "Sait Software",
        avatar: "A",
        title: "Website, Web App",
        description: "Website for a administrative software and aplications",
        image: sait,
    },
    {
        name: "Liga Norte de México",
        avatar: "A",
        title: "Website, Blog",
        description: "Diseño para liga de beisbol AA del norte de México",
        image: lnm,
    },
    {
        name: "Algodoneros de San Luis",
        avatar: "A",
        title: "Website, Blog",
        description: "Equipo nacional de beisbol de la LNM",
        image: algodoneros,
    },
]

export const LandingContent = () => {
    const secondDivRef: RefObject<HTMLDivElement> = useRef(null);

    const scrollToSecondDiv = () => {
        if (secondDivRef.current) {
            secondDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="flex justify-center pt-5">
                <button
                    onClick={scrollToSecondDiv}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-lg hover:bg-gray-300 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 md:h-8 md:w-8 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div ref={secondDivRef} className="pb-20 pt-10"style={{ scrollBehavior: 'smooth' }}>
                <h2 className="text-center text-4xl font-extrabold mb-10">
                    Proyectos
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((item) => (
                        <Card key={item.description} className="shadow-lg">
                            <div className="flex items-center justify-center">
                                <div className="rounded" style={{ width: '100%', height: '100%' }}>
                                    <Image
                                        src={item.image}
                                        className="rounded"
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>

                            <CardHeader>
                                <CardContent className="pt-4 px-0">
                                    <div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-medium leading-none">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                        <Separator className="my-4" />
                                        <div className="flex h-5 items-center space-x-4 text-sm">
                                            <div>Web</div>
                                            <Separator orientation="vertical" />
                                            <div>Git</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};