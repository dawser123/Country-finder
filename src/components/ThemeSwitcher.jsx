'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoIosSunny } from 'react-icons/io'
import { FaMoon } from 'react-icons/fa'
export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	if (!mounted) {
		return null
	}
	return (
		<div className="flex">
			{theme === 'light' ? (
				<button className="flex hover:scale-95 duration-300  gap-1 items-center" onClick={() => setTheme('dark')}>
					<FaMoon />
					Dark Mode
				</button>
			) : (
				<button className="flex hover:scale-95 duration-300 gap-1 items-center" onClick={() => setTheme('light')}>
					<IoIosSunny />
					Light Mode
				</button>
			)}
		</div>
	)
}
