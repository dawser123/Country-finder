import React from 'react'
const CountryItem = ({ name, item }) => {
	return (
		<li className="font-bold">
			{name}: <span className="font-normal ml-1">{item}</span>
		</li>
	)
}
export default CountryItem
