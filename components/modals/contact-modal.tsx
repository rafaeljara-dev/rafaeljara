import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"

import { Separator } from "@/components/ui/separator"
import Link from "next/link"

import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export const ContactModal = () => {

	const copyToClipboard = () => {
		navigator.clipboard.writeText("rafaeljara73@gmail.com").then(() => {
				alert("Correo copiado al portapapeles");
		}, (err) => {
				console.error("Error al copiar al portapapeles: ", err);
		});
};

	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger className="" asChild>
					<Button>Contacto</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className="w-90">
					<AlertDialogHeader>
						<div>
							<div className="space-y-1">
								<h4 className="text-sm font-medium leading-none">Correo Electronico</h4>
								<p className="text-sm text-muted-foreground cursor-pointer"
									onClick={copyToClipboard}>
									rafaeljara73@gmail.com
								</p>
							</div>
							<Separator className="my-4" />
							<div className="flex h-5 items-center space-x-4 text-sm">
								<Link href="https://github.com/rafaeljara-dev" className="flex items-center space-x-2" target="_blank">
									<FaGithub size={20} />
									<span>Github</span>
								</Link>
								<Separator orientation="vertical" />
								<Link href="https://instagram.com/_rafaeljara" className="flex items-center space-x-2" target="_blank">
									<FaInstagram size={20} />
									<span>Instagram</span>
								</Link>
								<Separator orientation="vertical" />
								<Link href="https://tiktok.com/@_rafaeljara" className="flex items-center space-x-2" target="_blank">
									<FaTiktok size={20} />
									<span>Tiktok</span>
								</Link>
							</div>
						</div>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}

export default ContactModal;