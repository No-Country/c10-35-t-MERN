/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primario: ' #FEF6EC',
				primario75: 'rgba(254, 246, 236, 0.75)',
				primario50: 'rgba(254, 246, 236, 0.5)',
				secundario: '#222B54',
				secundario75: 'rgba(34, 43, 84, 0.75)',
				secundario50: 'rgba(34, 43, 84, 0.5)',
				acento: '#FD9C41',
				acento75: 'rgba(253, 156, 65, 0.75)',
				acento50: 'rgba(253, 156, 65, 0.5)',
				acentoLB: '#41BEDC',
				acentoLB75: 'rgba(65, 190, 220, 0.75)',
				acentoLB50: 'rgba(65, 190, 220, 0.5)',
				acentoBlue: '#469ED8',
				acentoBlu75: 'rgba(70, 158, 216, 0.75)',
				acentroBlue50: 'rgba(70, 158, 216, 0.5)',
				acentoGrey: '#DADADA',
				errors: '#EC3838',
				acierto: '#58DB84',
				tituloh1: '',
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
				h70: '70px',
			},
			fontSize: {
				f40: '40px',
				f32: '32px',
			},
			lineHeight: {
				l48: '48px',
				l42: '42px',
			},
		},
	},

	plugins: [],
}
