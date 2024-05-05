'use client'
import CenteredContent from '@/components/CenteredContent'
import Link from 'next/link'
export default function Error() {
	return (
		<CenteredContent>
			<p className="text-2xl text-left my-10">There is a problem with the server. Please try again later</p>
			<Link className="hover:scale-95 text-xl font-bold " href="/">
				Go back to home page
			</Link>
		</CenteredContent>
	)
}
