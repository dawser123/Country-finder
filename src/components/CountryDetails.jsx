import CountryItem from './CountryItem'
const CountryDetails = ({ population, region, capital, subregion, tld, currencies }) => {
	return (
		<ul className="py-2 flex flex-col justify-center items-start gap-3 ">
			{population === 0 ? (
				''
			) : (
				<li className="font-bold">
					Population:
					<span className="font-normal ml-1">{population && Math.ceil(population).toLocaleString('en')}</span>
				</li>
			)}
			{region ? <CountryItem name="Region" item={region} /> : <CountryItem name="Region" item={subregion} />}
			{capital && <CountryItem name="Capital" item={capital} />}
			{tld && (
				<li className="font-bold">
					Top Level Domain: <span className="font-normal">{tld}</span>
				</li>
			)}
			{currencies && (
				<li className="font-bold">
					Currencies:
					{Object.keys(currencies).map(currency => (
						<span className="font-normal ml-1" key={currency}>
							{currencies[currency].name}
						</span>
					))}
				</li>
			)}
		</ul>
	)
}
export default CountryDetails
