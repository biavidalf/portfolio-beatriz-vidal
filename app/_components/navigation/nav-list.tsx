'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import NavlistItem from "./nav-list-item"
import { usePathname } from "next/navigation"
import { navItemsLabels } from "@/app/_components/navigation/nav-items-labels"
import { Bars3Icon } from "@heroicons/react/24/outline"

function NavList() {
	const currentPathname = usePathname()

	const currentPage = navItemsLabels.find(item => item.path === currentPathname)

	if(!currentPage) return

	return (
		<>
			{/* Navegação Desktop */}
			<ul className="lg:flex items-center hidden lg:gap-24">
				{navItemsLabels.map(item => <NavlistItem key={item.path} label={item.label} isActive={item.path === currentPathname} />)}
			</ul>

			{/* Navegação mobile */}
			<DropdownMenu>
				<DropdownMenuTrigger className="flex items-center gap-3 lg:hidden mt-6 ml-auto mr-6 italic">{currentPage.label} <Bars3Icon className="size-7" /> </DropdownMenuTrigger>
				<DropdownMenuContent className="rounded-none">
					{navItemsLabels.map(item => <DropdownMenuItem key={item.path}>{item.label}</DropdownMenuItem>)}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

export default NavList

