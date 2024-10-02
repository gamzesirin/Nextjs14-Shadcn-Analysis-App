import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/images/logo.webp'

const Header = () => {
	return (
		<header>
			<div className="bg-primary text-primary-foreground">
				<div className="container mx-auto">
					<div className="flex justify-between items-center py-4">
						<div className="flex space-x-4">
							<Link href="/analysis">Analysis</Link>
							<Link href="/profile">Profile</Link>
						</div>

						<div className="ml-auto">
							<Link href="/">Logout</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
