'use client'
import Image from 'next/image'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import CountryDetails from './CountryDetails'
import Button from '@/components/UI/Button'
const CountryCard = ({ country }) => {
	const router = useRouter()
	return (
		<>
			<Button onClick={() => router.back()}>
				<IoMdArrowRoundBack />
				Back
			</Button>
			<div className="flex flex-col items-center justify-center ">
				{country.map(({ name, flags, population, region, subregion, capital, tld, currencies }) => (
					<div className="w-[300px]  text-light-textColor dark:text-dark-textColor" key={name.common}>
						<Image
							className="object-cover h-48 w-full"
							width={280}
							height={180}
							priority
							src={flags.svg}
							style={{ objectFit: 'cover' }}
							alt={`flag of ${flags.alt}`}
						/>
						<h1 className="font-bold text-xl my-5">{name.common}</h1>
						<div className="my-5 flex flex-col justify-center gap-10 ">
							<CountryDetails
								population={population}
								region={region}
								subregion={subregion}
								capital={capital}
								tld={tld}
								currencies={currencies}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default CountryCard
