import { roboto } from '../ui/fonts';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.className}`}>
				{children}
				{/* TODO: ADD FOOTER */}
				{/* <footer>Footer Area</footer> */}
			</body>
		</html>
	);
}
