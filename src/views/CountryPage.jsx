import requests from '@/api/requests'
import CenteredContent from '@/components/CenteredContent'
import CountryCard from '@/components/CountryCard'
import React from 'react'
const CountryPage = async ({ country }) => {
	const data = await fetch(`${requests.country}/${country}`).then(result => result.json()
)
	return (
		<>
			<CenteredContent>
				<CountryCard country={data} />
			</CenteredContent>
		</>
	)
}
export default CountryPage
