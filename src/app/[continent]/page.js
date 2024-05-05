import RegionPage from '@/views/RegionPage'
const page = ({params}) => {
	return <RegionPage continent={params.continent} />
}
export default page
