'use client'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useRouter } from 'next/navigation'
import CenteredContent from './CenteredContent'

const SearchCountryForm = ({ data }) => {
	const [inputValue, setInputValue] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const searchHandler = (event) => {
		event.preventDefault()
		const trimmedValue = inputValue.trim().toLowerCase()
		const countryExists = data.some(country => country.name.common.toLowerCase() === trimmedValue)
		if (countryExists) {
			setError('')
			router.push(`/countries/${trimmedValue}`)
			setInputValue('')
		} else {
			setError('Country not found.')
		}
	}
	const inputHandler = event => {
		setInputValue(event.target.value)
		setError('') 
	}
	return (
		<>
			<form onSubmit={searchHandler} className="flex flex-col bg-light-secondaryColor dark:bg-dark-secondaryColor">
				<CenteredContent>
					<div className="flex items-center">
						<label htmlFor="searchinput">
							<CiSearch className="text-2xl hidden md:block" />
						</label>
						<input
							value={inputValue}
							onChange={inputHandler}
							autoComplete="off"
							id="searchinput"
							className="outline-transparent w-full focus:outline-none bg-light-secondaryColor py-3  border-none  
              placeholder:text-light-textColor
              dark:placeholder:text-dark-textColor
              dark:bg-dark-secondaryColor"
							placeholder="Search for a country"
							type="text"
						/>
						<button
							className="bg-dark-primaryColor text-light-primaryColor px-2 rounded-xl border-2 duration-300 hover:scale-90"
							>
							Search
						</button>
					</div>
				</CenteredContent>
			</form>
			{error && (
				<CenteredContent>
					<div className="mt-2 text-red-500">{error}</div>
				</CenteredContent>
			)}
		</>
	)
}

export default SearchCountryForm
