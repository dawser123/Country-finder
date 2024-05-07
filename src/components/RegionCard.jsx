'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import CountryDetails from './CountryDetails'
import Button from '@/UI/Button'
const RegionCard = ({ country, continent }) => {
	const router = useRouter()
	return (
		<>
			<Button onClick={() => router.back()}>
				<IoMdArrowRoundBack />
				Back
			</Button>
			<div className="flex items-center justify-center flex-wrap gap-10">
				{country.map(({ name, flags, capital, population, region }) => (
					<div key={name.common}>
						<Link href={`/${continent}/${name.common}`}>
							<div className="flex flex-col bg-light-secondaryColor min-w-[18rem] max-w-[18rem] rounded-b-lg h-96 dark:bg-dark-secondaryColor">
								<Image
									className="object-cover h-48 w-full"
									width={280}
									height={180}
									priority
									src={flags.svg}
									style={{ objectFit: 'cover' }}
									alt={`flag of ${flags.alt}`}
								/>
								<div className="p-5  flex flex-col items-start my-auto text-left justify-center">
									<h3 className="font-bold text-lg text-wrap uppercase">{name.common}</h3>
									<CountryDetails population={population} region={region} capital={capital} />
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	)
}
export default RegionCard
