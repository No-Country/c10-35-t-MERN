import React from 'react'
import logo from '../../assets/logo_Stocker.png'
import intro1 from '../../assets/ilustracion_intro1.png'

function Onboarding() {
	return (
		<section className='w-10/12 ml-auto mr-auto mt-10'>
			<header className='flex flex-row-reverse mb-12'>
				<button className='bg-secundario py-2 px-4 rounded-xl text-primario'>
					Saltar
				</button>
			</header>
			<main className='flex flex-col items-center gap-7'>
				<div>
					<img src={logo} alt='Stocker logo' />
				</div>
				<div>
					<img src={intro1} alt='slider intro 1' />
				</div>
				<div>
					<h2>Titulo de imagen</h2>
					<p className='text-f12'>
						Tendrás organizados y en un mismo sitio tus entradas y salidas.
					</p>
				</div>
			</main>
			<div>
				<div className='arrow'>flecha</div>
				<div className='dots'>
					<p>punto</p>
				</div>
			</div>
		</section>
	)
}

export default Onboarding
