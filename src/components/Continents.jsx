import europe from '/public/Europe.jpg'
import africa from '/public/Africa.jpg'
import antarctica from '/public/Antarctica.jpg'
import asia from '/public/Asia.jpg'
import australia from '/public/Australia.jpg'
import northAmerica from '/public/North_America.webp'
import southAmerica from '/public/South_America.jpg'
import Continent from './Continent'
const Continents = () => {
	return (
		<>
			<h2 className="text-center font-bold py-10 text-xl">Continents</h2>
			<ul className="flex justify-center gap-5 items-center  flex-wrap">
				<Continent url={europe} link="Europe" title="europe" />
				<Continent url={africa} title="africa" link="Africa" />
				<Continent url={australia} title="australia" link="Oceania" />
				<Continent url={asia} title="asia" link="Asia" />
				<Continent url={northAmerica} title="north america" link="North America" />
				<Continent url={southAmerica} title="south america" link="South America" />
				<Continent url={antarctica} title="antarctica" link="Antarctica" />
			</ul>
		</>
	)
}
export default Continents
