/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
import { useState } from 'react'
import { helpFetch } from '../../components/helpers/helpFetch'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ModalProductocargado from '../../components/Modals/ModalProductocargado'
import Subtitles from '../../components/CreateProducts/Subtitles'
import { BoxImage } from '../../components/CreateProducts/BoxImage'
import Headings from '../../components/CreateProducts/Headings'
import ModalExcel from '../../components/Modals/ModalExcel'
import ModalFallaCarga from '../../components/Modals/ModalFallaCarga'
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop'

const initialForm = {
	id:'',
	product_name: '',
	stock:'',
	cost: '',	
	price: '',
	minimum_stock: '',
	userId:19,
	categoryId: '',
	units:''
}

const validationsForm = (form, name) => {
	let errors = {}

	let letters = /^[a-zA-ZÀ-ÿ\s]+$/
	let number = /(^[0-9]{1,7}$|^[0-9]{1,7}\.[0-9]{1,3}$)/
	const { product_name, stock, price, cost, minimum_stock, categoryId,userId } = form

	if ((product_name === '') & (name === 'product_name')) {
		errors.product_name = 'El campo nombre es requerido'
		return errors
	} else if (!letters.test(product_name) & (name === 'product_name')) {
		errors.product_name = 'el campo solo acepta letras'
		return errors
	}

	if ((stock === '') & (stock === 'stock')) {
		errors.stock = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(stock) & (name === 'stock')) {
		errors.stock = 'el campo solo acepta numeros'
		return errors
	}

	if ((price === '') & (name === 'price')) {
		errors.price = 'El campo precio es requerido'
		return errors
	} else if (!number.test(price) & (name === 'price')) {
		errors.price = 'el campo solo acepta numeros'

		return errors
	}

	if ((cost === '') & (name === 'cost')) {
		errors.cost = 'El campo costo es requerido'
		return errors
	} else if (!number.test(cost) & (name === 'cost')) {
		errors.cost = 'el campo solo acepta numeros'
		return errors
	}
	

	if ((minimum_stock === '') & (name === 'minimum_stock')) {
		errors.minimum_stock = 'El campo es requerido'
		return errors
	} else if (!number.test(minimum_stock) & (name === 'minimum_stock')) {
		errors.minimum_stock = 'el campo solo acepta numeros'
		return errors
	}
	if ((categoryId === '') & (name === 'categoriId')) {
		errors.categoryId = 'El campo categoria es requerido'
		return errors
	} else if (!letters.test(categoryId) & (name === 'categoryId')) {
		errors.categoryId = 'el campo solo acepta letras'
		return errors
	}

	return errors
}

const CreateProducts2 = () => {
	const location = useLocation()
	const idProduct = location.state === null ? 0 : location.state.idProduct

	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState(initialForm)
	const [errors, setErrors] = useState({})
	const [response, setResponse] = useState(null)
	const [db, setDb] = useState(null)
	// const [dataToEdit, setDataToEdit] = useState(null)
	const [modal, setModal] = useState(false)

	const crud = helpFetch()
	const urlGet = 'https://stocker-api.fly.dev/api/v1/products/:19'
	const urlPost= 'https://stocker-api.fly.dev/api/v1/products/create'

	useEffect(() => {
		fetch(urlGet).then(res => {
			if (!res.err) {
				console.log(res)
				setDb(res)
				setResponse(res)
			} else {
				setDb(null)
				setResponse(res)
			}
		})
	}, [urlGet])

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleBlur = e => {
		setErrors(validationsForm(form, e.target.name))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setErrors(validationsForm(form))

		if (Object.keys(errors).length === 0) {
			helpFetch()
				.post(urlPost, {
					body: form,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				.then(res => {
					console.log(res)
					setResponse(true)
					setForm(initialForm)
					;<ModalFallaCarga setVisble={setVisible} />
				})

			return
		}
		if (form.id === null) {
			return createData(form)
		} else {
			return updateData(form)
		}
	}

	const createData = () => {
		crud
			.post(urlPost, {
				body: form,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				setVisible(true);
				if (!res.err) {
					setDb([...db, res])

					;
					<ModalProductocargado
						texto={'Productos cargados exitosamente!'}
						idProduct={idProduct}/>
				}

			})
	}

	// 	let endpoint = `${urlGet}/${data.id}`

	// 	crud
	// 		.put(endpoint, {
	// 			body: data,
	// 			headers: { 'content-type': 'application/json' },
	// 		})
	// 		.then(res => {
	// 			if (!res.err) {
	// 				let newData = db.map(el => (el.id === data.id ? data : el))
	// 				setDb(newData)
	// 			} else {
	// 				setResponse(res)
	// 			}
	// 		})
	// }

	// const deleteData = id => {
	// 	let isDelete = confirm(`¿Estas seguro que quieres eliminar ${id}?`)

	// 	if (isDelete) {
	// 		let endpoint = `${urlGet}/${id}`

	// 		crud
	// 			.del(endpoint, { headers: { 'content-type': 'application/json' } })
	// 			.then(res => {
	// 				if (!res.err) {
	// 					let newData = db.filter(el => el.id !== id)
	// 					setDb(newData)
	// 				} else {
	// 					setResponse(res)
	// 				}
	// 			})
	// 	}
	// }

	return (
		<>
			<div className='lg:grid lg:grid-cols-[130px_1fr] lg:gap-x-8'>
				<NavbarDesktop />
				<div className='w-373 h-full md:absolute md:w-full md:h-1024  md:ml-130 md:flex md:justify-center md:bg-fondoT'>
					<div
						className='md:bg-white
				md:absolute md:w-714 md:top-4 md:h-888 md:botton-4 md:ml-408'
					>
						<Headings />

						{/* -----------subtitulos en desktop----------- */}

						<Subtitles formData={form} />

						{/* ----------------contendor de imagen------------ */}

						<BoxImage />

						{/* --------------contenedor de fomulario--------------- */}

						<form onSubmit={handleSubmit} className=''>
							<div
								// {/* ----------esto engloba impus de nombre y grupo-------- */}
								className='
		w-full h-full bg-primario md:bg-white mt-335 pr-2 pt-4	
		rounded-tr-3xl rounded-tl-3xl md:w-566 md:h-418 md:gap-4 md:flex-none md:grow-0 md:order-none md:flex md:flex-col md:ml-16 md:mt-240'
							>
								{/* --------------input nombre------------- */}
								<div className=' w-full h-24 items-start '>
									<div className='h-24 md:h-20'>
										<div className='grid pr-1 pl-3 '>
											<label className='w-full h-6  md:h-5 md:mb-1 text-start'>
												Nombre
											</label>
											<input
												type='text'
												id='nombre'
												name='product_name'
												value={form.product_name}
												onBlur={handleBlur}
												onChange={handleChange}
												className='w-full h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl px-3 py-4 box-border md:w-556'
											></input>
										</div>
										{errors.product_name && (
											<p id='msgerror' className='ml-4'>
												{errors.product_name}
											</p>
										)}
									</div>
								</div>
								<div className='flex flex-col justify-center items-center w-full'>
									{/* -------------------primer grupo--------------- */}

									<div id='groupInput'>
										<div className=' h-32'>
											<div id='divPrueba' className=''>
												<label id='labelPrueba'>Cantidad</label>
												<input
													id='inputPrueba'
													type='number'
													name='stock'
													value={form.stock}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.stock && (
											<p id='msgerror'>
												{errors.stock}
											</p>
										)}
										</div>
										<div className=' h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Seleciona la unidad</label>
												<select
													id='inputPrueba'
													name='units'
													onChange={handleChange}
													defaultValue={form.units}
												>
													<option id='' value=''>
														Seleciona unidad
													</option>
													<option id='units' value='unidades'>
														Unidades
													</option>
													<option id='Kg' value='Kg'>
														Kg
													</option>
													<option id='Mts' value='Mts'>
														Mts
													</option>
													<option id='Lts' value='Lts'>
														Lts
													</option>
												</select>
											</div>
											{/* {errors.unidades && (
												<p id='msgerror'>{errors.unidades}</p>
											)} */}
										</div>
									</div>

									{/* -------------------segundo grupo--------------- */}

									<div id='groupInput' className=''>
										<div className=' h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Costo unitario</label>
												<input
													id='inputPrueba'
													type='number'
													name='cost'
													value={form.cost}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.cost && <p id='msgerror'>{errors.cost}</p>}
										</div>
										<div className='h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Cantidad min de Stock</label>
												<input
													id='inputPrueba'
													type='number'
													name='minimum_stock'
													value={form.minimum_stock}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.minimum_stock && <p id='msgerror'>{errors.minimum_stock}</p>}
										</div>
									</div>
									{/* -------------------tercer grupo--------------- */}

									<div id='groupInput'>
										<div className=' h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Precio</label>
												<input
													id='inputPrueba'
													type='number'
													name='price'
													value={form.price}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.price && <p id='msgerror'>{errors.price}</p>}
										</div>

										<div className=' h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Categoria</label>

												<select
													id='inputPrueba'
													name='categoryId'
													type='text'
													value={form.categoryId}
													onBlur={handleBlur}
													onChange={handleChange}
												>
													<option id='' value=''>
														Seleciona Categoria
													</option>
													<option id='Vegetales' value=''>
														Vegetales
													</option>
													<option id='Snacks' value='Snacks'>
														Snacks
													</option>
													<option id='Lacteos' value='Lacteos'>
														Lacteos
													</option>
													<option id='Limpieza' value='Limpieza'>
														Limpieza
													</option>
													<option id='Bebidas' value='Bebidas'>
														Bebidas
													</option>
												</select>
											</div>
											{errors.categoryId && (
												<p id='msgerror'>{errors.categoryId}</p>
											)}
										</div>
									</div>

									{/* --------------------cuarto grupo---------------- */}
									<div id='groupInput'>
										<button
											id='inputPrueba'
											className='bg-acento2'
											onClick={() => setModal(true)}
										>
											<div className=' text-primario w-full h-22 font-secundaria not-italic font-bold text-base '>
												Cargar Excel
											</div>
										</button>

										<button
											id='inputPrueba'
											type='submit'
											value='send'
											onClick={() => createData()}
											className='bg-secundario'
										>
											<div className=' text-primario font-secundaria w-full h-22 font-bold text-base not-italic '>
												Continuar
											</div>
										</button>

										{visible ? (
											<ModalProductocargado
												texto={'Productos cargados exitosamente!'}
												idProduct={idProduct}
											/>
										) : null}
										{modal ? <ModalExcel setModal={setModal} /> : null}
										{/* {setResponse ? null : (
											<ModalFallaCarga setVisible={setVisible} />
										)} */}
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateProducts2
