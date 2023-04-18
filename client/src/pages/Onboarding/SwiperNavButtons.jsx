/* eslint-disable react/prop-types */
import { useSwiper } from 'swiper/react'
import { RiArrowRightSLine } from 'react-icons/ri'
const SwiperNavButtons = ({ index }) => {
	const swipe = useSwiper()
	const handleSkip = () => {
		const onBoarding = document.getElementById('onboarding')
		const login = document.getElementById('login')
		onBoarding.classList.add('hidden')
		login.classList.remove('sm:hidden')
	}
	return (
		<>
			{index < 2 ? (
				<button
					className='absolute right-0 bottom-0 w-11 h-11 rounded-full mb-2  bg-secundario text-primario  flex items-center justify-center'
					onClick={() => swipe.slideNext()}
				>
					<RiArrowRightSLine className='text-3xl' />
				</button>
			) : (
				<>
					<button
						onClick={handleSkip}
						className='absolute right-0 bottom-0 bg-secundario py-3 w-100 mb-2 rounded-xl text-primario'
					>
						listo!
					</button>
					<button className='sm:hidden absolute right-0 bottom-0 bg-secundario py-3 w-100 mb-2 rounded-xl text-primario lg:block'>
						listo!
					</button>
				</>
			)}
		</>
	)
}

export default SwiperNavButtons
