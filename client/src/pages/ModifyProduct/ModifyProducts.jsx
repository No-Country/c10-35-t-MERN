import { useEffect, useState } from 'react'
import { helpFetch } from '../../components/helpers/helpFetch'
import { Link, useLocation } from 'react-router-dom'
import {data} from '../../data/db.json'
import { BoxImage } from '../../components/CreateProducts/BoxImage'
import ModalProductoModificado from '../../components/Modals/ModalProductoModificado'
import HeadingsModify from '../../components/ModifyProduct/HeadingsModify'
import Subtitles from '../../components/CreateProducts/Subtitles'
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop'

const initialForm = {
	id: Date.now(),
	nombre: '',
	cantidad: '',
	costo: '',
	total: '',
	precio: '',
	alerta: '',
	unidades: '',
	categorias: '',
}

const validationsForm = (form, name) => {
	let errors = {}

	let letters = /^[a-zA-ZÀ-ÿ\s]+$/
	let number = /(^[0-9]{1,7}$|^[0-9]{1,7}\.[0-9]{1,3}$)/
	const { nombre, cantidad, precio, costo, total, alerta, categorias } = form

	if ((nombre === '') & (name === 'nombre')) {
		errors.nombre = 'El campo nombre es requerido'
		return errors
	} else if (!letters.test(nombre) & (name === 'nombre')) {
		errors.nombre = 'el campo solo acepta letras'
		return errors
	}

	if ((cantidad === '') & (name === 'cantidad')) {
		errors.cantidad = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(cantidad) & (name === 'cantidad')) {
		errors.cantidad = 'el campo solo acepta numeros'
		return errors
	}

	if ((precio === '') & (name === 'precio')) {
		errors.precio = 'El campo precio es requerido'
		return errors
	} else if (!number.test(precio) & (name === 'precio')) {
		errors.precio = 'el campo solo acepta numeros'

		return errors
	}

	if ((costo === '') & (name === 'costo')) {
		errors.costo = 'El campo costo es requerido'
		return errors
	} else if (!number.test(costo) & (name === 'costo')) {
		errors.costo = 'el campo solo acepta numeros'
		return errors
	}

	if ((total === '') & (name === 'total')) {
		errors.total = 'El campo total es requerido'
		return errors
	} else if (!number.test(total) & (name === 'total')) {
		errors.total = 'el campo solo acepta numeros'
		return errors
	}

	if ((alerta === '') & (name === 'alerta')) {
		errors.alerta = 'El campo alerta es requerido'
		return errors
	} else if (!number.test(alerta) & (name === 'alerta')) {
		errors.alerta = 'el campo solo acepta numeros'
		return errors
	}
	if ((categorias === '') & (name === 'categorias')) {
		errors.categorias = 'El campo categoria es requerido'
		return errors
	} else if (!letters.test(categorias) & (name === 'categorias')) {
		errors.categorias = 'el campo solo acepta letras'
		return errors
	}

	return errors
}
const ModifyProducts = () => {
	const location = useLocation()
	console.log(location.state)

	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState({
		...initialForm,
		id:location.state.id,
		nombre: location.state.title,
		cantidad: location.state.stock,
		costo:location.state.cost,
		total:location.state.total,
		precio:location.state.price,
		alerta:location.state.minStock,
		unidades: location.state.unidades,
		categorias:location.state.nameCategory,
		
	})
	const [errors, setErrors] = useState({})
	const [response, setResponse] = useState(null)
	const [db, setDb] = useState(null)
	// const [dataToEdit, setDataToEdit] = useState(null)

	const crud = helpFetch()
	// eslint-disable-next-line prefer-const
	const urlGet = 'http://localhost:3000/data'

	useEffect(() => {
		fetch(urlGet).then(res => {
			if (!res.err) {
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
				.post(urlGet, {
					body: form,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				.then(res => {
					
					setResponse(true)
					setForm(initialForm)
				})

			return
		}

		if (form.id === null) {
			return createData(form)
		} else {
			return updateData(form)
		}
		
	}

	const createData = data => {
		crud
			.post(urlGet, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				console.log(res)
				if (!res.err) {
					setDb([...db, res])
				} else setResponse(res)
			})
	}

	const updateData = ()=> {
		
		let endpoint = `${urlGet}/${form.id}`
		
		crud
		.put(endpoint, {
			body: form,
			headers: { 'content-type': 'application/json' },
		})
		.then(res => {
			setVisible(true)
			if (!res.err) {
					
					let newData = db.map(el => (el.id === form.id ? form : el))
					setDb(newData);

					
				} else {
					setResponse(res)
				}
			})
	}

	const deleteData = id => {

		

		let isDelete = confirm(`¿Estas seguro que quieres eliminar ${id}?`)

		

		if (isDelete) {
			let endpoint = `${urlGet}/${id}`

			crud
				.del(endpoint, { headers: { 'content-type': 'application/json' } })
				.then(res => {
					if (!res.err) {
						let newData = db.filter(el => el.id !== id)
						setDb(newData);

						<ModalProductoModificado idProduct={1} />
					} else {
						setResponse(res)
					}
				})
		}
	}
	
	

	return (
		<>
			<div className='lg:grid lg:grid-cols-[130px_1fr] lg:gap-x-8'>
				<NavbarDesktop/>
				<div className=' w-373 h-full md:absolute md:w-full md:h-920 md:ml-116 md:bg-fondoT'>
					<div
						className='md:bg-white
		md:absolute md:w-714 md:top-4 md:h-850 md:botton-4 md:ml-408'
					>
						{/* ----------------headings------------ */}
						<HeadingsModify />

						{/* -----------contenedor de subtittles desktop----------- */}

						<Subtitles formData={form} />

						{/* ----------------contendor de imagen------------ */}

						<BoxImage />

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
												name='nombre'
												value={form.nombre}
												onBlur={handleBlur}
												onChange={handleChange}
												className='w-full h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl px-3 py-4 box-border md:w-556'
											></input>
										</div>
										{errors.nombre && (
											<p id='msgerror' className='ml-4'>
												{errors.nombre}
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
													name='cantidad'
													value={form.cantidad}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.cantidad && (
												<p id='msgerror'>{errors.cantidad}</p>
											)}
										</div>
										<div className=' h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Seleciona la unidad</label>
												<select
													id='inputPrueba'
													name='unidades'
													defaultValue={form.unidades}
													onChange={handleChange}
												>
													<option id='' value=''>
														Seleciona unidad
													</option>
													<option id='unidades' value='unidades'>
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
											{errors.unidades && (
												<p id='msgerror'>{errors.unidades}</p>
											)}
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
													name='costo'
													value={form.costo}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.costo && <p id='msgerror'>{errors.costo}</p>}
										</div>
										<div className='h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Costo total</label>
												<input
													id='inputPrueba'
													type='number'
													name='total'
													value={form.total}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.total && <p id='msgerror'>{errors.total}</p>}
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
													name='precio'
													value={form.precio}
													onBlur={handleBlur}
													onChange={handleChange}
												></input>
											</div>
											{errors.precio && <p id='msgerror'>{errors.precio}</p>}
										</div>

										<div className=' h-32'>
											<div id='divPrueba'>
												<label id='labelPrueba'>Categoria</label>

												<select
													id='inputPrueba'
													name='categorias'
													type='text'
													value={form.categorias}
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
													<option id='Lacteos' value='	Lacteos'>
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
											{errors.categoria && (
												<p id='msgerror'>{errors.categoria}</p>
											)}
										</div>
									</div>
									{/* -------------aca va el 4 grupo----------------- */}
									<div id='groupInput'>
										<button
											id='inputPrueba'
											className='bg-acento2'
											onClick={() => deleteData()}
										>
											<div className=' text-primario w-full h-22 font-secundaria not-italic font-bold text-base '>
												Eliminar
											</div>
										</button>

										<button
											id='inputPrueba'
											type='submit'
											value='send'
											onClick={() => updateData()}
											className='bg-secundario'
										>
											<div className=' text-primario font-secundaria w-full h-22 font-bold text-base not-italic '>
												Guardar
											</div>
										</button>
										{visible ? <ModalProductoModificado idProduct={1} /> : null}

										{/* {response ? null : (
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

export default ModifyProducts
