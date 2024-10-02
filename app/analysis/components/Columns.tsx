import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'

export type Record = {
	id: string
	name: string
	group: string
	type: string
	status: string
	createdAt: string
}

export const columns: ColumnDef<Record>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc', false)}>
				Analysis Name
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue('name')}</div>,
		enableSorting: true
	},

	{
		accessorKey: 'group',
		header: 'Group',
		cell: ({ row }) => <div>{row.getValue('group')}</div>
	},
	{
		accessorKey: 'type',
		header: 'Type',
		cell: ({ row }) => <div>{row.getValue('type')}</div>
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => <div>{row.getValue('status')}</div>
	},

	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc', false)}>
				Created At
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue('createdAt')}</div>,
		enableSorting: true
	},

	{
		id: 'button',
		header: 'Action',
		cell: ({ row }) => <Button>WorkSpace</Button>,
		enableSorting: false,
		enableHiding: false
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const record = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(record.id)}>Copy record ID</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}
]
