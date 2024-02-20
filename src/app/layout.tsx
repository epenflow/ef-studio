import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Window from '@/components/Terminal/Window';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'EpenFlow',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='notranslate'
			translate='no'>
			<body className={`${inter.className}`}>
				<Window />
				{children}
			</body>
		</html>
	);
}
