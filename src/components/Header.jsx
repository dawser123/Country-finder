import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import CenteredContent from './CenteredContent'
import Link from 'next/link'
const Header = () => {
	return (
		<nav className="dark:bg-dark-primaryColor bg-light-primaryColor py-5">
			<CenteredContent>
				<div className="flex justify-between items-center">
					<Link href="/" >
						<h1 className="font-bold sm:text-xl">Where in the world?</h1>
					</Link>
					<ThemeSwitcher />
				</div>
			</CenteredContent>
		</nav>
	)
}
export default Header
