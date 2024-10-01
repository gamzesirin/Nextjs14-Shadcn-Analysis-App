'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()

	const handleLogout = () => {
		router.push('/login')
	}

	return (
		<div className="container mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
			<p>Please you are login.</p>
			<Button onClick={handleLogout} className="mt-4">
				Login
			</Button>
		</div>
	)
}
