import React, { useRef } from 'react'
import Swiper from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

// Componente de paginación personalizado
const MyPagination = () => {
	// Referencia al Swiper para acceder a su instancia
	const swiperRef = useRef(null)

	// Función para cambiar a una imagen específica en el Swiper
	const changeSlide = index => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideTo(index)
		}
	}

	return (
		<div className='my-pagination'>
			{/* Tu código de paginación personalizado aquí */}
			{/* Por ejemplo, puedes usar botones o elementos interactivos */}
			<button className='bg-red-500' onClick={() => changeSlide(0)}>
				1
			</button>
			<button onClick={() => changeSlide(1)}>2</button>
			<button onClick={() => changeSlide(2)}>3</button>
		</div>
	)
}
export default MyPagination
