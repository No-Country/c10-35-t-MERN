/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import pollo from '../../assets/pollo.png'
const ModalProductocargado = ({texto}) => {
	return (
		<section
			id='modal'
			className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 md:bg-fondoT'
		>
			<div
				id='modal-container'
				className='bg-primario w-295 h-273 left-10 top-30 inset-16 rounded-xl flex flex-col items-center pr-20 p-6 mt-24 gap-4 relative  md:top-174 md:left-614 '
			>
				<h3
					id='modal-paragraph'
					className='w-247 h-52 ml-14 top-6 left-6 not-italic text-center items-center text-exito flex-none order-none grow-0'
				>
						{texto}
				</h3>
				<img
					src={pollo}
					alt='imagenExitosa'
					className='w-16 h-93 ml-14 flex-none order-1 grow-0'
				/>
				<Link to={'/inicio'} className='flex-none order-2 grow-0'>
					<button className='w-40 h-h48  ml-14 top-200 left-67 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center'>
						<div className='text-white w-16 h-22 font-secundaria not-italic font-bold text-base flex-none grow-0 order-none '>
							aceptar
						</div>
					</button>
				</Link>
			</div>
		</section>
	)
}

export default ModalProductocargado
