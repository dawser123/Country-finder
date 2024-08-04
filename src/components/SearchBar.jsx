import requests from '@/api/requests'
import SearchCountryForm from './SearchCountryForm'
const SearchBar = async () => {
	const response = await fetch(`${requests.allCountries}`)
	const data = await response.json()
	return (
		<>
			<SearchCountryForm data={data}></SearchCountryForm>
		</>
	)
}

export default SearchBar
