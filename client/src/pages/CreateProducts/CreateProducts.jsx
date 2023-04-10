import { VscChromeClose } from 'react-icons/vsc'
import TextBox from '../../components/TextBox/TextBox'
import TextScroll from '../../components/TextBoX/TextScroll'
import TextBobxLg from '../../components/TextBox/TextBoxLg'
import { useState } from 'react'
import Parragraph from '../../components/Parragraph/Parragraph'

const CreateProducts = () => {
	const [visible, setVisible] = useState(false)
	const [name, setName] = useState({ campo: '', valid: null })
	const [quantity, setQuantity] = useState({ campo: '', valid: null })
	const [cost, setCost] = useState({ campo: '', valid: null })
	const [total, setTotal] = useState({ campo: '', valid: null })
	const [price, setPrice] = useState({ campo: '', valid: null })
	const [alert, setAlert] = useState({ campo: '', valid: null })


	const onSubmit = e => {
		e.prevent.default()
	}


	
	const Expression = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		number: /(^[0-9]{1,7}$|^[0-9]{1,7}\.[0-9]{1,3}$)/,
	}

	
	// ${props=>props.valido==="true" && css `
	// text-error text-xs
	// `}

	// esto {width: 198px;
	// height: 16px;

	// /* Texto Form Verifica */

	// font-family: 'DM Sans';
	// font-style: normal;
	// font-weight: 400;
	// font-size: 12px;
	// line-height: 16px;
	/* identical to box height */
	/* Error */
	// color: #F16A6A;
	/* Inside auto layout */
	// flex: none;
	// order: 2;
	// flex-grow: 0;}
	// es el <p cuando da error

	return (
		<>
			<form onSubmit={onSubmit} className=' h-screen w-screen '>
				<div className='flex justify-end h-10 p-4 md:p-6 md:pb-8'>
					<VscChromeClose className='bg-slate-300 rounded-xl h-6 w-6 p-0.5' />
				</div>
				<div className='h-36 md:h-56 flex justify-center items-center'>
					<div className='m-2 '>
						<p className=' mb-2 pl-2 md:text-xl text-slate-700 font-semibold'>
							Crear Producto
						</p>

						<img
							src='https://i.imgur.com/Tgt6TjG.jpeg'
							className='w-32 h-28 md:w-40 md:h-40'
						></img>
					</div>
				</div>
				<div className=' p-4 mt-2 bg-primario75'>
					<div className='m-2 mb-4 md:m-4 '>
						<TextBobxLg
							label='ingrese la cantidad'
							type='text'
							name='name'
							estado={name}
							cambiarEstado={setName}
							regularExp={Expression.name}
						/>
					</div>
					<div className='flex justify-center'>
						<div className='grid grid-cols-2 gap-x-20 md:gap-x-96'>
							<div className='flex flex-col'>
								<TextBox
									label='ingrese la cantidad'
									type='number'
									name='quantity'
									estado={quantity}
									cambiarEstado={setQuantity}
									regularExp={Expression.number}
								
								/>
							</div>

							<div className='flex flex-col'>
								<TextBox
									label='ingrese el costo'
									type='number'
									name='cost'
									estado={cost}
									cambiarEstado={setCost}
									regExp={Expression.number}
								/>
							</div>
							<div className='flex flex-col'>
								<TextBox
									label='costo total'
									type='number'
									name='total'
									estado={total}
									cambiarEstado={setTotal}
									regExp={Expression.number}
								/>
							</div>
							<div className='flex flex-col'>
								<TextBox
									label='ingrese el precio'
									type='number'
									name='price'
									estado={price}
									cambiarEstado={setPrice}
									regExp={Expression.number}
								/>
							</div>
							<div className='flex flex-col'>
								<TextBox
									label='alertar en esta cantidad'
									type='number'
									name='alert'
									estado={alert}
									cambiarEstado={setAlert}
									regExp={Expression.number}
								/>
							</div>

							<div className='flex flex-col'>
								<label className='text-sm md:text-base md:pl-4  text-slate-400 pl-2'>
									categoria personalizada
								</label>
								<TextScroll />
							</div>
						</div>
					</div>
					<div className='flex justify-between mt-4'>
						<button className='m-2 md:m-4 '>
							<div className='w-28 h-8 md:w-48 md:h-10 border-2 rounded-lg font-semibold text-slate-600 text-sm md:text-lg flex justify-center items-center '>
								Cargar Excel
							</div>
						</button>
						<button
							onClick={
								() => setVisible(true)
								// aca tambien debe ir el agregar producto a base datos de la peticion POST
							}
							className='m-2 md:m-4'
						>
							<imput type='submit' value='send'>
								<div className='bg-secundario text-primario w-28 h-8 md:w-48 md:h-10  border-2 rounded-lg  text-sm font-semibold  md:text-lg flex justify-center items-center'>
									Continuar
								</div>
							</imput>
						</button>

						{visible && (
							<section
								id='modal'
								className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 '
							>
								<div
									id='modal-container'
									className='bg-secundario3 w-11/12 m-auto max-w-96 h-60 rounded-lg '
								>
									<div className=' flex justify-end'>
										<button className=' pr-2 pt-2'>
											<svg
												onClick={() => setVisible(false)}
												className='h-8 p-0 m-0 fill-grey-400'
												xmlns='http://www.w3.org/2000/svg'
												width='30'
												height='30'
												viewBox='0 0 24 24'
											>
												<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z' />
											</svg>
										</button>
									</div>

									<p
										id='modal-paragraph'
										className=' py-12 px-10 text-center font-secundaria text-primario75'
									>
										el producto ha sido cargado exitosamente
									</p>
								</div>
							</section>
						)}
						{!visible && null}
					</div>
				</div>
			</form>
		</>
	)
}
export default CreateProducts
