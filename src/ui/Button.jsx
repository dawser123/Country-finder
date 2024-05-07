'use client'
import React from 'react'
const Button = ({ onClick, children }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className=" my-5 flex items-center justify-center shadow-light-secondaryColor hover:scale-95 dark:shadow-dark-secondaryColor duration-300 shadow-[1px_-2px_10px_1px] gap-1 py-2 px-5 rounded-sm bg-light-secondaryColor dark:bg-dark-secondaryColor">
			{children}
		</button>
	)
}
export default Button
