import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { roboto } from './ui/fonts';

export const metadata: Metadata = {
	title: 'Financial Dashboard',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.className}`}>
				{children}
				<footer>Footer Area</footer>
			</body>
		</html>
	);
}
