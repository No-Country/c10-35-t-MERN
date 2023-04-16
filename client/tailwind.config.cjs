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
				labeltexto: '#8F8F8F',
			},
			boxShadow: {
				sombra: '0 5px 30px 0 rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				primaria: ['Bebas Neue', 'cursive'],
				secundaria: ['DM Sans', 'sans-serif'],
			},
			spacing: {
				l2:'2px',
				px4: '4px',
				7: '7px',
				8.3:'8.33%',
				9: '9px',
				12: '12px',
				13: '13px',
				18: '18px',
				19: '19px',
				22: '22px',
				23: '23px',
				24:'24px',
				33: '33px',
				34: '34',
				41: '41px',
				42: '42px',
				43:'43px',
				49: '49px',
				60: '60px',
				62: '62px',
				72: '72px',
				74: '74px',
				70: '70px',
				78:'78px',
				80:'80%',
				85:'85px',
				90: '90px',
				130: '130px', 
				156: '156px',
				178: '178px',
				180: '180px',
				198: '198px',
				200: '200px',
				203: '203px',
				250: '250px',
				271:'271px',
				335:'335px',
				343: '343px',
				349: '349px',
				375: '375px',
				418: '418px',
				432: '432px',
				577: '577px',
				631: '631px',
				812: '812px',
			},
			fontSize: {
				f40: '40px',
				f32: '32px',
				f20: '20px',
				f16: '16px',
				f14: '14px',
				f12: '12px',
				f9: '9px',
				f8: '8px',
			},
			lineHeight: {
				l48: '48px',
				l42: '42px',
			},
			borderWidth: {
				1: '1px',
				5: '5px',
			},
			borderRadius: {
				24: '24px',
				60: '60px',
				120: '120px',
			}
		},
	},

	plugins: [],
}
