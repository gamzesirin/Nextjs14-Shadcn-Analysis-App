'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import React from 'react'

interface AnalysisCardProps {
	title: string
	value: number
	description: string
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ title, value, description }) => (
	<Card className="flex-1">
		<CardHeader>
			<CardTitle className="text-md font-bold">{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="text-2xl font-bold">{value.toLocaleString()}</div>
			<p className="text-xs text-muted-foreground">{description}</p>
		</CardContent>
	</Card>
)

export function AnalysisCards() {
	const cardData = [
		{ title: 'Total Cases', value: 140123, description: 'All recorded cases' },
		{ title: 'Resolved Cases', value: 139239, description: 'Cases that have been closed' },
		{ title: 'Active Cases', value: 728, description: 'Currently open cases' },
		{ title: 'Cases in Progress', value: 156, description: 'Cases being actively worked on' }
	]

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{cardData.map((card, index) => (
					<AnalysisCard key={index} {...card} />
				))}
			</div>
		</div>
	)
}
