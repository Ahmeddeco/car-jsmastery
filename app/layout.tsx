import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
	title: 'Car Hub',
	description: 'Discover the best cars in the world.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`relative antialiased`}>
				<Navbar />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	)
}
