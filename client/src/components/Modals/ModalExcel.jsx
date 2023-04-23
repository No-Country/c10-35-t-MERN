/* eslint-disable react/prop-types */

import polloPremiun from '../../assets/pollopremiun.png'

const ModalExcel = ({ setModal }) => {
	return (
		<section
			id='modal'
			className='w-screen h-full fixed top-0 left-0 right-0 m-0 flex justify-center items-center bg-fondoT z-50'
		>
			<div
				id='modal-container'
				className='w-300 h-300 rounded-xl flex flex-col justify-center items-center p-6 gap-4  bg-primario md:right-1 md:w-335 md:left-614 md:pl-10 md:h-335'
			>
				<h3
					id='modal-paragraph'
					className='w-72 mb-2 p-1 not-italic text-center text-acento'
				>
					¡Hazte premium y disfruta de muchas funciones más!
				</h3>
				<img
					src={polloPremiun}
					alt='imagenExitosa'
					className='w-20 h-28  mb-2 flex-none'
				/>

				<button
					onClick={() => setModal(false)}
					className='w-40 h-h48  rounded-xl p-3 mb-1  bg-secundario flex flex-row justify-center items-center'
				>
					<div className='text-white w-16 h-22 font-secundaria not-italic font-bold text-base flex-none '>
						aceptar
					</div>
				</button>
			</div>
		</section>
	)
}

export default ModalExcel
