/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primario: ' #FEF6EC',
				primario2: '#FEF8F1',
				primario3: '#FEFAF5',
				secundario: '#222B54',
				secundario2: '#59607F',
				secundario3: '#9095A9',
				acento: '#FD9C41',
				acento1a: '#FDB570',
				acento1b: '#FECDA0',
				acento2: '#3858A4',
				acento2_50: 'rgba(56, 88, 164, 0.5)',
				acento2_10: 'rgba(56, 88, 164, 0.1)',
				desactivado: '#DADADA',
				error: '#EC3838',
				acierto: '#58DB84',
				label: '#DADADA',
			},
			boxShadow: {
				sombra: '0 5px 30px 0 rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				primaria: ['Bebas Neue', 'cursive'],
				secundaria: ['DM Sans', 'sans-serif'],
			},
			spacing: {
				33: '33px',
				41: '41px',
				42: '42px',
				left418: '418px',
				ww343: '343px',
				h72: '72px',
				h70: '70px',
			},
			fontSize: {
				f40: '40px',
				f32: '32px',
				f16: '16px',
				f12: '12px',
				f8: '8px',
			},
			lineHeight: {
				l48: '48px',
				l42: '42px',
			},
		},
	},

	plugins: [],
}
