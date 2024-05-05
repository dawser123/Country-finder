/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				light: {
					primaryColor: '#fffcf2',
					secondaryColor: '#ccc5b9',
					textColor: '#252422',
				},
				dark: {
					primaryColor: '#212529',
					secondaryColor: '#495057',
					textColor: '#f8f9fa',
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
