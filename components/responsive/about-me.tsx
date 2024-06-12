"use client"

import { useAuth } from "@clerk/nextjs";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import profileImg from "@/assets/images/(profile-img)/profile.jpeg";
import banderaMX from "@/assets/images/(profile-img)/mx.png";  // Importa la imagen de la bandera

import { ContactModal } from "@/components/modals/contact-modal"

export const AboutMe = () => {
	const { isSignedIn } = useAuth();

	return (
		<>
			<div className="hidden md:flex items-center justify-end ">
				<div className="mr-3">
					<ContactModal />
				</div>
				<div className="text-sm md:text-xl font-light text-right mr-3">
					Hola, soy Rafael, Ingeniero en Software <br />independiente, originario de México
					<img src={banderaMX.src} alt="Bandera de México" className="inline-block w-6 h-6 ml-2" />  {/* Agrega la imagen de la bandera */}
				</div>
				<div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
					<img src={profileImg.src} alt="Rafael Jara" className="w-full h-full object-cover" />
				</div>
			</div>

			{/** Mobile */}
			<div>
				<div className="lg:hidden md:hidden flex justify-end items-center space-x-5 pt-10">
					<div className="text-sm md:text-xl font-light text-center">
						Hola, soy Rafael, Ingeniero en Software independiente, originario de México
						<img src={banderaMX.src} alt="Bandera de México" className="inline-block w-6 h-6 ml-2" />  {/* Agrega la imagen de la bandera */}
					</div>
				</div>
				<div className="lg:hidden md:hidden flex justify-center items-center pt-5">
					<div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg mr-3">
						<img src={profileImg.src} alt="Rafael Jara" className="w-full h-full object-cover" />
					</div>
					<ContactModal />
				</div>
			</div>

		</>
	);
}

export default AboutMe;