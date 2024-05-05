import './globals.css'
import Providers from '../utils/providers'
import Header from '../components/Header'
import SearchBar from '@/components/SearchBar'
export const metadata = {
	title: 'Countiers API next.js',
	description:'Here you can search for detailed information about various countries around the world.'
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className="flex min-h-[100vh] bg-light-primaryColor dark:bg-dark-primaryColor flex-col">
				<Providers>
					<Header />
					<SearchBar />
					{children}
				</Providers>
			</body>
		</html>
	)
}
