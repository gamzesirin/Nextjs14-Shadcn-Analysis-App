'use client'

import * as z from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Key } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const passwordSchema = z
	.object({
		newPassword: z.string().min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string()
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword']
	})

type PasswordFormValues = z.infer<typeof passwordSchema>

const PasswordForm: React.FC = () => {
	const form = useForm<PasswordFormValues>({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			newPassword: '',
			confirmPassword: ''
		}
	})

	const onSubmit = async (data: PasswordFormValues) => {
		console.log('Password data:', data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="container mx-auto space-y-4 bg-white p-4 rounded-md shadow-md border border-gray-200 max-w-[95%] sm:max-w-none"
			>
				<h2 className="text-2xl font-bold">Change Password</h2>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New Password</FormLabel>
								<FormControl>
									<div className="relative">
										<Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
										<Input
											type="password"
											placeholder="New password"
											{...field}
											className="w-full sm:w-[500px] pl-10"
										/>
									</div>
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>RE-TYPE NEW Password</FormLabel>
								<FormControl>
									<div className="relative">
										<Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
										<Input
											type="password"
											placeholder="Re-type New password"
											{...field}
											className="w-full sm:w-[500px] pl-10"
										/>
									</div>
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit">Save Password</Button>
			</form>
		</Form>
	)
}

export default PasswordForm
