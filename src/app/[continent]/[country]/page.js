import CountryPage from '@/views/CountryPage'
import React from 'react'
const page = ({ params }) => {
	return <CountryPage country={params.country} />
}
export default page
