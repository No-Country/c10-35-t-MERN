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
				exito:'#00C100',
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
				h48:'48px',
				l52:'52px',
				t286:'286px',
				4.2:'4.27%',			
				31.43:'31.43',
				53.0:'53.07%',
				58.6:'58.61%',
				27:'27.05%',
				8.3:'8.33%',
				12: '12px',
				31:'31px',
				33: '33px',
				34: '34',
				41: '41px',
				42: '42px',
				43:'43px',
				52:'52px',
				67:'67px',
				78:'78px',
				93:'93px',
				102:'102px',
				107:'107px',
				116:'116px',
				120:'120px',
				122:'122px',
				133:'133px',
				156: '156px',
				178: '178px',
				180: '180px',
				418: '418px',
				199.47:'199.47px',
				200: '200px',
				247:'247px',
				271:'271px',
				273:'273px',
				295:'295px',
				335:'335px',
				341:'341px',
				343: '343px',
				349: '349px',
				375: '375px',
				72: '72px',
				70: '70px',
				198: '198px',
				74: '74px',
				203: '203px',
				18: '18px',
				22: '22px',
				90: '90px',
				432: '432px',
				443:'443px',
				469: '469px',
				488:'488px',
				537:'537px',
				577: '577px',
				631: '631px',
				733:'733px',
				812: '812px',
				1781:'1781px',
				1271:'1271px',
				1093:'1093px',
				4577:'4577px',
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
			borderWidth: {
				1: '1px',
				5: '5px',
				7:'7px',
			},
		},
	},

	plugins: [],
}
