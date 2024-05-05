'use client'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import CenteredContent from './CenteredContent'
import Link from 'next/link'
const SearchBar = () => {
	const [country, setCountry] = useState([])
	const [inputValue, setInputValue] = useState('')
	const searchHandler = async event => {
		const trimmedValue = event.target.value.trim()
		setInputValue(trimmedValue)
		if (trimmedValue === '') {
			setCountry([])
		} else {
			const response = await fetch('https://restcountries.com/v3.1/all')
			const data = await response.json()
			setCountry(data)
		}
	}
	const linkHandler = () => {
		setInputValue('')
		setCountry([])
	}
	const searchResult = country.filter(country => country.name.common.toLowerCase().startsWith(inputValue.toLowerCase()))
	return (
		<>
			<div className="flex items-center bg-light-secondaryColor dark:bg-dark-secondaryColor ">
				<CenteredContent>
					<div className="flex items-center ">
						<label htmlFor="searchinput">
							<CiSearch className="text-2xl" />
						</label>
						<input
							value={inputValue}
							onChange={searchHandler}
							autoComplete="off"
							id="searchinput"
							className="outline-transparent w-full focus:outline-none bg-light-secondaryColor py-3 pl-2 border-none  
                        placeholder:text-light-textColor
                        dark:placeholder:text-dark-textColor
                        dark:bg-dark-secondaryColor"
							placeholder="Search for a country"
							type="text"
						/>
					</div>
				</CenteredContent>
			</div>
			<CenteredContent>
				<ul>
					{searchResult.map(country => (
						<li onClick={linkHandler} className="py-3" key={country.name.common}>
							<Link className=' block px-2 py-1 border-b-2 border-blue-600 ' href={`/${country.region}/${country.name.common}`}>{country.name.common}</Link>
						</li>
					))}
				</ul>
			</CenteredContent>
		</>
	)
}
export default SearchBar
