'use client'

import * as React from 'react'

import { useEffect, useState } from 'react'

import { AnalysisCards } from './components/Card'
import AnalysisTable from '@/app/analysis/components/Table'
import Layout from '@/components/main/Layout'
import { Record } from '@/app/analysis/components/Columns'

function Analysis() {
	const [data, setData] = useState<Record[]>([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/analysis')
			const jsonData = await response.json()
			setData(jsonData)
		}
		fetchData()
	}, [])

	return (
		<Layout>
			<div className="container mx-auto p-4">
				<AnalysisCards />
				<AnalysisTable data={data} />
			</div>
		</Layout>
	)
}

export default Analysis
