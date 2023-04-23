/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import pollo from '../../assets/pollo.png'
const ModalProductocargado = ({texto,idProduct}) => {
	return (
		<section
		id='modal'
			className=' w-screen h-full top-0 m-0 left-0 right-0 fixed flex justify-center items-center bg-fondoT z-50'
		>
			<div
				id='modal-container'
				className='w-300 h-300 rounded-xl flex flex-col justify-center items-center p-6 md:p-10 gap-3 bg-primario md:right-1 md:w-335 md:left-614 md:pl-10 md:h-335' 
			>
				<h3
					id='modal-paragraph'
					className='w-72 mb-2 not-italic text-center text-exito'
				>
					
						{texto}
				</h3>
				<img
					src={pollo}
					alt='imagenExitosa'
					className='w-20 h-28 mb-2 flex-none'
				/>
				<Link 
				state={{idProduct}}
				to={'/inventario'} className='flex-none order-2 '>
					<button className='w-40 h-h48  rounded-xl p-2.5 bg-secundario flex flex-row justify-center items-center'>
						<div className='text-white w-16 h-22 font-secundaria not-italic font-bold text-base flex-none '>
						aceptar
						</div>
					</button>
				</Link>
			</div>
		</section>
	)
}

export default ModalProductocargado
