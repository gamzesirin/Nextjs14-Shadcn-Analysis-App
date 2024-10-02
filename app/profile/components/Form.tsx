'use client'

import * as z from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Mail, User, UserCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const profileSchema = z.object({
	title: z.string().optional(),
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address')
})

type ProfileFormValues = z.infer<typeof profileSchema>

const ProfileForm: React.FC = () => {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			title: '',
			firstName: '',
			lastName: '',
			email: ''
		}
	})

	const onSubmit = async (data: ProfileFormValues) => {
		console.log('Profile data:', data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="container mx-auto space-y-4 bg-white p-4 rounded-md shadow-md border border-gray-200 max-w-[95%] sm:max-w-none"
			>
				<h2 className="text-2xl font-bold">Profile Information</h2>

				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Title :" {...field} className="w-full sm:w-auto" />
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<div className="relative">
										<User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
										<Input placeholder="First Name" {...field} className="w-full sm:w-[380px] pl-10" />
									</div>
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<div className="relative">
										<UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
										<Input placeholder="Last Name" {...field} className="w-full sm:w-[380px] pl-10" />
									</div>
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Email</FormLabel>
							<FormControl>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
									<Input placeholder="Email" {...field} className="w-full sm:w-[500px] pl-10" />
								</div>
							</FormControl>
							<FormMessage className="text-xs" />
						</FormItem>
					)}
				/>
				<Button type="submit">Save Changes</Button>
			</form>
		</Form>
	)
}

export default ProfileForm
