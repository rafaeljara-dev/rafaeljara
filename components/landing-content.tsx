"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "./ui/card"

import Image from "next/image";

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
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Proyectos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <div className="flex items-center justify-center m-2">
                            <Image
                                src={item.image}
                                width={250}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}