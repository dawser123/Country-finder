import Image from 'next/image'
import Link from 'next/link'
const Continent = ({ url, title, link }) => {
	return (
		<li className="relative">
			<Link href={`/${link}`} >
				<Image
					className="rounded-lg overflow-hidden w-[200px] h-[200px]"
					priority={true}
					width={250}
					height={250}
					src={url.src}
					alt={`map of ${title}`}
				/>
				<div className="absolute opacity-0 hover:opacity-85 top-0 left-0 w-full h-full flex items-center rounded-lg justify-center cursor-pointer duration-300 bg-black ">
					<p className="text-center text-dark-textColor font-bold uppercase">{title}</p>
				</div>
			</Link>
		</li>
	)
}
export default Continent
