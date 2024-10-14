"use client";
import { useEffect } from "react";
import Background from "./components/background";

const imagePaths = [
	"/bluetooth.webp",
	"/check.png",
	"/cpp.png",
	"/drums.png",
	"/error.png",
	"/esp.png",
	"/ghlogo.png",
	"/headshot.jpg",
	"/ind.png",
	"/java.png",
	"/link - blue.png",
	"/link.png",
	"/linkedin.png",
	"/mail.png",
	"/mdp.webp",
	"/mlt.webp",
	"/node.png",
	"/nuai.jpeg",
	"/pacman.png",
	"/pfp.png",
	"/python.png",
	"/react.png",
	"/sail.jpg",
	"/sail.png",
	"/sent.png",
	"/sk.png",
	"/ts.png",
	"/usa.png",
];

export default function Home() {
	useEffect(() => {
		imagePaths.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	}, []);

	return (
		<main className="text-3xl">
			<Background />
		</main>
	);
}
