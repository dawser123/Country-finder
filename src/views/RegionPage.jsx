import requests from '@/api/requests'
import CenteredContent from '@/components/CenteredContent'
import RegionCard from '@/components/RegionCard'
const RegionPage = async ({ continent }) => {
	const data = await fetch(`${requests.regionCountries}/${continent}`).then(result => result.json())
	return (
		<CenteredContent>
			<h2 className="py-5 font-bold text-2xl text-light-textColor dark:text-dark-textColor">{continent}</h2>
			<RegionCard country={data} continent={continent} />
		</CenteredContent>
	)
}
export default RegionPage
