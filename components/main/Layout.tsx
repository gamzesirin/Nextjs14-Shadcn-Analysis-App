'use client'

import Header from './Header'
import { usePathname } from 'next/navigation'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const pathname = usePathname()
	const showHeader = !['/login'].includes(pathname)

	return (
		<>
			{showHeader && <Header />}
			{children}
		</>
	)
}
