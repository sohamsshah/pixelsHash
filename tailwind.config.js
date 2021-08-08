module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			cursor: {
				'zoom-in': 'zoom-in',
			},
			width: {
				100: '40rem',
			},
			height: {
				100: '30rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
}
