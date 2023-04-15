import { Link } from 'react-router-dom'
import pollo from '../../assets/pollo.png'
const ModalProductocargado = () => {
  return (
<section
							id='modal'
							className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 '
						>
							<div
								id='modal-container'
								className='bg-primario w-295 h-273 inset-16 rounded-xl flex flex-col items-center p-6 gap-4 relative '
							>
								<h3
									id='modal-paragraph'
									className='w-247 h-52 top-6 left-6 not-italic text-center items-center text-exito flex-none order-none grow-0'
								>
									¡Productos cargados exitosamente!
								</h3>
								<img
									src={pollo}
									alt='imagenEc¿xitosa'
									className='w-16 h-93 flex-none order-1 grow-0'
								/>
								<Link to={'/inicio'} className='flex-none order-2 grow-0'>
								
									<button className='w-40 h-h48 top-200 left-67 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center'>
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