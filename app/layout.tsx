import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Varoon Enjeti - Portfolio",
	description:
		"I am a senior studying Computer Science at Northwestern University interested in the intersection of software and hardware.",
	viewport: {
		width: "device-width",
		initialScale: 1.0,
		maximumScale: 1.0,
		userScalable: false,
	},
	icons: {
		apple: "/ati.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="overflow-hidden m-0 p-0">{children}</body>
		</html>
	);
}
