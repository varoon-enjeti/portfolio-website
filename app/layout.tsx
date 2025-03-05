import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
	title: "Varoon Enjeti - Portfolio",
	description: "Varoon Enjeti Portfolio Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<link rel="apple-touch-icon" type="image/png" href="/ati.png>" />
			</Head>
			<body className="overflow-hidden m-0 p-0">{children}</body>
		</html>
	);
}
