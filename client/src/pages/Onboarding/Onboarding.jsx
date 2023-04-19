import React, { useState } from 'react'
import logo from '../../assets/logo_Stocker.png'
import intro1 from '../../assets/onboarding1.png'
import intro2 from '../../assets/onboarding2.png'
import intro3 from '../../assets/onboarding3.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperNavButtons from './SwiperNavButtons'

function Onboarding() {
	const [index, setIndex] = useState(0)
	const handldeSkip = () => {
		const onBoarding = document.getElementById('onboarding')
		const login = document.getElementById('login')
		onBoarding.classList.add('hidden')
		login.classList.remove('hidden')
	}

	return (
		<section id='onboarding' className='py-14 w-10/12 ml-auto mr-auto h-full '>
			<header className='flex flex-row-reverse mb-61'>
				<button
					onClick={handldeSkip}
					className='bg-secundario py-3 w-100 rounded-xl text-primario text-f16'
				>
					Saltar
				</button>
			</header>
			<main className='h-5/6 '>
				<div className='flex justify-center mb-8'>
					<img src={logo} alt='Stocker logo' />
				</div>
				<Swiper
					className='pb-10 h-5/6 '
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={20}
					slidesPerView={1}
					navigation={false}
					pagination={{ clickable: true }}
					onSlideChange={swiper => setIndex(swiper.activeIndex)}
					// onSwiper={swiper => console.log(swiper)}
				>
					<SwiperSlide>
						<div className='flex flex-col items-center'>
							<img src={intro1} alt='' />
							<div>
								<h2>Registra tus ingresos y egresos fácilmente</h2>
								<p>
									Tendrás organizados y en un mismo sitio tus entradas y
									salidas.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col  items-center'>
							<img src={intro2} alt='' />
							<div>
								<h2>Tienes tu inventario siempre al día</h2>
								<p>
									Controlar tu inventario y tenerlo al día será cuestión de un
									click.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col  items-center'>
							<img src={intro3} alt='' />
							<div>
								<h2>Tienes los datos de tu almacén a la mano</h2>
								<p>
									Toda la información de tu almacén la tendrás al día y podrás
									tomar decisiones de negocio seguras.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperNavButtons index={index} />
				</Swiper>
			</main>
		</section>
	)
}

export default Onboarding
