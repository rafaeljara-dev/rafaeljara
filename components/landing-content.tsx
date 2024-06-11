"use client"

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
import lnm from "@/assets/images/(laptop-images)/liga-norte.png"
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
    return (
        <div className="pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Proyectos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <div className="flex items-center justify-center">
                            <Image
                                src={item.image}
                                width={250}
                                height={100}
                                alt="Picture of the author"
                            />
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
    )
}