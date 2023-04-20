import { Link } from 'react-router-dom'
import pollo from '../../assets/pollo.png'

const ModalProductoModificado = ({idProduct}) => {
	console.log('hola' ,idProduct)
	return (
		<section
			id='modal'
			className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 md:bg-fondoT'
		>
			<div
				id='modal-container'
				className='w-295 h-300 right-4 rounded-xl flex flex-col items-center pr-20 p-6 mt-64 gap-4 relative  md:bg-primario md:right-1 md:w-335 md:left-614 md:pl-10 md:h-335' 
			>
				<h3
					id='modal-paragraph'
					className='w-72 ml-8 mb-2 left-6 not-italic text-center text-exito'
					
				>
					¡Movimiento Exitoso!
				</h3>
				<img
					src={pollo}
					alt='imagenExitosa'
					className='w-20 h-28 ml-10 mb-2 flex-none'
				/>
				<Link to={'/inventario'}
				state={{idProduct}}
				className='flex-none order-2 grow-0'>
				<button className='w-40 h-h48  ml-10 left-67 rounded-xl p-2.5 bg-secundario flex flex-row justify-center items-center'>
					<div className='text-white w-16 h-22 font-secundaria not-italic font-bold text-base flex-none grow-0 order-none'>
							aceptar
						</div>
					</button>
				</Link>
			</div>
		</section>
	)
}

export default ModalProductoModificado
