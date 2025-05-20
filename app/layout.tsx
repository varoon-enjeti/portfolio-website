import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Varoon Enjeti - Portfolio",
	description:
		"Portfolio website of Varoon Enjeti showcasing projects, skills, and contact information.",
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
