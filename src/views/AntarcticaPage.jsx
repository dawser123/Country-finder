'use client'
import requests from '@/api/requests'
import CenteredContent from '@/components/CenteredContent'
import CountriesCard from '@/components/RegionCard'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
const AntarcticaPage = () => {
	const path = usePathname()
	const isAntarcticaPage = path.includes('/Antarctica')
	const [antarcticCountriesData, setAntarcticCountriesData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const allCountriesData = await fetch(`${requests.allCountries}`).then(result => result.json())
			const filteredData = isAntarcticaPage ? allCountriesData.filter(country => country.region === 'Antarctic') : []
			setAntarcticCountriesData(filteredData)
		}
		fetchData()
	}, [isAntarcticaPage])
	return (
		<CenteredContent>
			<h2 className="py-10 font-bold text-xl text-light-textColor dark:text-dark-textColor">Antarctica</h2>
			<CountriesCard country={antarcticCountriesData} />
		</CenteredContent>
	)
}
export default AntarcticaPage
