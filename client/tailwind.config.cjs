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
				exito: '#00C100',
				label: '#DADADA',
				labeltexto: '#8F8F8F',
				fondoT: 'rgba(51, 51, 51, 0.8)',
			},
			boxShadow: {
				sombra: '0 5px 30px 0 rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				primaria: ['Bebas Neue', 'cursive'],
				secundaria: ['DM Sans', 'sans-serif'],
			},
			spacing: {
				0.1: '5px',
				l2: '2px',
				h48: '48px',
				w7: '7px',
				8.3: '8.33%',
				12: '12px',
				13: '13px',
				18: '18px',
				19: '19px',
				22: '22px',
				23: '23px',
				w24: '24px',
				25: '25px',
				31: '31px',
				33: '33px',
				34: '34px',
				41: '41px',
				42: '42px',
				43: '43px',
				48: '48px',
				78: '78px',
				84: '84px',
				88: '88px',
				90: '90px',
				93: '93px',
				102: '102px',
				107: '107px',
				116: '116px',
				120: '120px',
				122: '122px',				
				133: '133px',
				30: '30px',
				130: '130px',
				61: '61px',
				70: '70px',
				100: '100px',
				156: '156px',
				164: '164px',
				174: '174px',
				178: '178px',
				180: '180px',
				195: '195px',
				198: '198px',
				199.47: '199.47px',
				200: '200px',
				203: '203px',
				214: '214px',
				212: '212px',
				221: '221px',
				240: '240px',
				247: '247px',
				266: '266px',
				45: '45px',
				46.03: '46.03px',
				49: '49px',
				50: '50px',
				pr50: '50%',
				60: '60px',
				62: '62px',
				80: '80%',
				85: '85px',
				pr80: '80%',
				pr90: '90%',
				132: '132px',
				140: '140px',
				157: '157px',
				176: '176px',
				187: '184.7px',
				238: '238px',
				250: '250px',
				271: '271px',
				300:'300px',
				335: '335px',
				343: '343px',
				349: '349px',
				355: '355px',				
				296: '296px',			
				375: '375px',
				386: '386px',
				408: '408px',
				418: '418px',
				421: '421px',
				427: '427px',
				432: '432px',
				443: '443px',
				446: '446px',
				447: '447px',
				469: '469px',
				480: '480px',
				488: '488px',
				494: '494px',
				537: '537px',
				556: '556px',
				566: '566px',
				577: '577px',
				607: '607px',
				614: '614px',
				631: '631px',
				714: '714px',
				733: '733px',
				850:'850px',
				812: '812px',
				865: '865px',
				91: '91px',
				888: '888px',
				920: '920px',
				1024: '1024px',
				1093: '1093px',
				1781: '1781px',
				1271: '1271px',
				1310: '1310px',
				4577: '4577px',
				navbar: 'calc(100vh - 133px)',
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
				7: '7px',
			},
			maxWidth: {
				40: '40px',
			},

			borderRadius: {
				10: '10px',
				12: '12px',
				24: '24px',
				60: '60px',
				120: '120px',
			},
		},
	},
	variants: {
		textColor: ['responsive', 'hover', 'group-hover'],
		backgroundColor: ['responsive', 'hover', 'group-hover'],
		input: ['responsive'],
		div: ['responsive'],
	},

	plugins: [],
}
