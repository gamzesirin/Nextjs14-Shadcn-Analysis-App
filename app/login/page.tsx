'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import LoginForm from '@/app/login/components/Form'
import React from 'react'

const Login: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
			<div className="w-full max-w-[750px] md:h-[750px] md:rounded-full md:bg-gray-300 flex justify-center items-center p-5">
				<div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full max-w-[630px]">
					<Card className="w-full md:w-[350px]">
						<CardHeader>
							<CardTitle>Login</CardTitle>
						</CardHeader>
						<CardContent>
							<LoginForm />
						</CardContent>
					</Card>
					<div className="w-full md:w-[280px] text-center md:text-left">
						<h3 className="text-md font-semibold mb-2">Welcome!</h3>
						<p className="text-xs">Please log in to access your profile and analysis tools.</p>
						<p className="text-xs mt-2">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, in dolorum voluptate rem autem dolorem
							veniam et deserunt eaque est ad at, itaque quidem nesciunt ut. Dolorum eos architecto voluptate?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
