import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Artikov Tech | Software & Web Development",
	description:
		"We build scalable, modern websites and software solutions tailored to your business needs.",
	keywords: [
		"Artikov Tech",
		"Web Development",
		"Software Development",
		"Next.js",
		"Tailwind CSS",
		"Oybek Artikov",
		"Artikov",
		"Artikov Software",
		"Artikov Web Development",
		"Artikov Tech Software",
		"Artikov Tech Web Development",
		"Artikov Tech Next.js",
		"React",
		"JavaScript",
		"Website Development",
	],
	authors: [{ name: "Oybek Artikov" }],
	openGraph: {
		title: "Artikov Tech",
		description: "We build scalable, modern websites and software solutions.",
		url: "https://artikov.tech",
		siteName: "Artikov Tech",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
