import Layout from '@/components/main/Layout'
import PasswordForm from '@/app/profile/components/PasswordForm'
import ProfileForm from '@/app/profile/components/Form'
import React from 'react'

const Profile: React.FC = () => {
	return (
		<Layout>
			<div className="container mx-auto flex flex-col gap-5 py-5">
				<ProfileForm />
				<PasswordForm />
			</div>
		</Layout>
	)
}

export default Profile
