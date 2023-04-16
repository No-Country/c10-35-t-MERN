/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
import { RiCloseCircleFill, RiCloseCircleLine } from 'react-icons/ri'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useState } from 'react'
import { data } from '../../data/db.json'
import { helpFetch } from '../../components/helpers/helpFetch'
import { useEffect } from 'react'
import producto from '../../assets/ProdXDefecto.png'
import { Link } from 'react-router-dom'
import ModalProductocargado from '../../components/Modals/ModalProductocargado'

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
	if ((categorias === '') & (categorias === 'categorias')) {
		errors.categorias = 'El campo categoria es requerido'
		return errors
	} else if (!letters.test(categorias) & (name === 'categorias')) {
		errors.categorias = 'el campo solo acepta letras'
		return errors
	}
	return errors
}

const CreateProducts2 = () => {
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState(initialForm)
	const [errors, setErrors] = useState({})
	const [response, setResponse] = useState(null)
	const [db, setDb] = useState({})

	const [dataToEdit, setDataToEdit] = useState(null)
	const [modal, setModal] = useState(false)

	const costoUNit = form.costo
	const unidadesTotales = form.unidades
	const costoTotal = costoUNit * unidadesTotales

	const crud = helpFetch()
	let url = 'http://localhost:3000/data'

	useEffect(() => {
		crud.get(url).then(res => {
			if (!res.err) {
				setDb(res)
				setErrors({})
			} else {
				setDb(null)
				setErrors(res)
			}
		})
	}, [url])

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

		// if(Object.keys(errors).length !==0){
		//  return alert('debes completar todos los campos')
		// }else
		if (Object.keys(errors).length === 0) {
			helpFetch()
				.post('http://localhost:3000/data', {
					body: form,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				.then(res => {
					// setForm(res);
					setResponse(true)
					setForm(initialForm)
				})

			return
		}

		if (form.id === null) {
			return createData(form)
		} else {
			console.log('updateData')
			return updateData(form)
		}
	}

	const createData = data => {
		crud
			.post(url, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				console.log(res)
				if (!res.err) {
					setDb([...db, res])
				}
			})
	}

	const updateData = data => {
		let endpoint = `${url}/${data.id}`

		crud
			.put(endpoint, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				if (!res.err) {
					let newData = db.map(el => (el.id === data.id ? data : el))
					setDb(newData)
				}
			})
	}

	const deleteData = id => {
		let isDelete = confirm(`¿Estas seguro que quieres eliminar ${id}?`)

		if (isDelete) {
			let endpoint = `${url}/${id}`

			crud
				.del(endpoint, { headers: { 'content-type': 'application/json' } })
				.then(res => {
					if (!res.err) {
						let newData = db.filter(el => el.id !== id)

						setDb(newData)
					}
				})
		}
	}

	// const voidForm = () => {
	// 	if (setForm.length >= 6)
	// 		if (setForm.length < 6) {
	// 			console.warn('debes ingresar todos los campos')
	// 		}
	// }

	return (
		<>
			<div className='w-373 h-812  md:absolute md:w-1310 md:h-1024 md:left-130 md:top-0 md:bg-fondoT'>
				<div className='md:absolute md:w-714 md:h-920 md:top-52 md:left-297 bg-white '>
					<div className=''>
						{/* --------contenedor general de barra superior -------- */}
						<div className='flex-none order-1 grow-0 md:mt-3'>
							{/* --------contenedor de items h1 y botones------- */}
							<div className='w-373 h-43  mt-2 top-31 left-0 px-0 py-4 gap-3 flex flex-row items-center  flex-none order-1 grow-0 md:pt-8  '>
								<Link
									to={'/inicio'}
									className='flex-none order-0 grow-0 w-6 h-6 top-2.5 left-4 md:hidden'
								>
									<RiArrowLeftSLine className='w-7 h-7 ' />
								</Link>

								<h1 className='w-221 h-43 left-l52 flex items-end md:top-0.5 md:w-178 md:h-31 md:flex-none md:order-none md:grow-0  md:font-secundaria md:text-2xl md:font-bold md:ml-64 md:mt-0'>
									Crear Producto
								</h1>

								<Link to={'/inicio'}>
									<div className='ml-14 mr-3'>
										<RiCloseCircleFill className='w-6 h-6 top-2.5 left-335 flex-none order-2 grow-0 ml-6 md:w-9 md:h-9 md:order-1 md:ml-156 md:mb-2 ' />
									</div>
								</Link>
							</div>
						</div>
					</div>
					{/* -----------contenedor de subtitulos en desktop----------- */}

					<div className='hidden md:w-566 md:h-52 md:left-494 md:top-178 md:flex  md:flex:row md:justify-between md:p-0 md:ml-14 md:pb-2 md:mt-5 md:items-center md:gap-11 '>
						<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
							<h3 className='text-acento md:flex md:flex-col md:justify-center  md:h-5  md:items-center '>
								categorias
							</h3>
							<div className='text-secundario md:h-4'>{form.categorias}</div>
						</div>
						<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
							<h3 className='text-acento md:flex-none md:h-5 md:flex md:items-center'>
								total unidades
							</h3>
							<div className='text-secundario md:h-4 '>{form.cantidad}</div>
						</div>
						<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
							<h3 className='text-acento md:h-5 md:flex md:items-center'>
								valor total
							</h3>
							<div className='text-secundario md:h-4'> {costoTotal}</div>
						</div>
					</div>

					{/* ----------------contendor de imagen------------ */}
					<div className='flex-none '>
						<img
							src={producto}
							className='w-250 h-180 p-0 top-28 left-16 border-7 rounded-xl gap-22 border-solid border-acento2 box-border flex flex-row justify-center items-center absolute md:mt-14 md:w-300 md:h-221 md:left-198 md:rounded-10  md:gap-2.5 md:border-secundario md:border-2'
						></img>
						<p className='text-xs font-secundaria font-normal text-secundario absolute w-72 h-18 left-133 top-297 mt-0 md:text-acento2 md:w-28 md:h-5 md:left-386 md:top-375  md:font-bold md:text-base md:mt-3 md:mb-1'>
							cargar foto
						</p>
					</div>
					{/* --------------contenedor de fomulario--------------- */}
					<div className=''>
						<form onSubmit={handleSubmit}>
							{/* -------contenerdor de inputs----- */}
							<div className='w-375 h-469  mt-343 left-0 bg-primario3 absolute rounded-tr-3xl rounded-tl-3xl md:w-566 md:h-418 md:gap-4 md:flex-none md:grow-0 md:order-none md:flex md:flex-col md:ml-16  md:bg-white md:mt-280'>
								{/* ------desde aca empiezan los inputs---- */}

								<div className='w-341 h-70 top-0 left-4 absolute flex flex-col items-start p-0 gap-1 md:w-607 md:mt-0 md:mb-0 md:h-18 md:pb-2'>
									<label
										id='labelInput'
										className='w-40 h-18 md:h-20 md:mb-4 md:pb-1'
									>
										nombre
									</label>
									<input
										type='text'
										id='nombre'
										name='nombre'
										value={form.nombre}
										onBlur={handleBlur}
										onChange={handleChange}
										required
										className='w-341 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl flex-none order-1 grow-0 px-3 py-4 gap-2.5 box-border md:w-556
						'
									></input>
									{errors.nombre && (
										<p className='md:mb-1 mr-2' id='errorp'>
											{errors.nombre}
										</p>
									)}
								</div>

								{/* ----------------aca va el primer grupo-------- */}
								<div className='md:w-72 '>
									<div id='divInput' className='left-4 top-24  md:top-84'>
										<label id='labelInput' htmlFor='' className='w-122 h-18'>
											cantidad
										</label>

										<input
											type='number'
											id='inputForm'
											name='cantidad'
											value={form.cantidad}
											onBlur={handleBlur}
											onChange={handleChange}
											required
										></input>
									</div>
									{errors.cantidad && (
										<p
											id='errorp'
											className='md:mt-195 md:ml-2 mt-164 ml-3 pt-1'
										>
											{errors.cantidad}
										</p>
									)}

									<div
										id='divInput'
										className='left-200 top-24 md:left-305 md:top-84 '
									>
										<label id='labelInput' className='w-133'>
											unidades
										</label>
										<select
											className='w-40 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl flex-none order-1 grow-0 px-3 py-2 gap-2.5 box-border text-base font-secundaria font-base text-secundario items-center  md:w-266'
											name='unidades'
											onChange={handleChange}
										>
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
										{errors.unidades && <p id='errorp'>{errors.unidades}</p>}
									</div>
								</div>
								{/* ---------------aca va el segundo grupo---------- */}
								<div>
									<div id='divInput' className='left-4 top-178'>
										<label id='labelInput' htmlFor='' className='w-102'>
											costo
										</label>
										<input
											type='number'
											id='inputForm'
											name='costo'
											value={form.costo}
											onBlur={handleBlur}
											onChange={handleChange}
											required
										></input>
										{errors.costo && (
											<p className=' md:ml-2 pr-6' id='errorp'>
												{errors.costo}
											</p>
										)}
									</div>
									<div className='md:hidden'>
										<div id='divInput' className='top-178 left-200 md:left-305'>
											<label id='labelInput' htmlFor='' className='w-107'>
												costo Total
											</label>
											<input
												type='number'
												id='inputForm'
												name='total'
												value={form.total}
												onBlur={handleBlur}
												onChange={handleChange}
											></input>
											{errors.total && (
												<p className='pr-6' id='errorp'>
													{errors.total}
												</p>
											)}
										</div>
									</div>
									<div className='hidden md:left-305 md:w-555  md:h-52 md:top-214 md:gap-8 md:flex md:flex-col md:p-0 md:absolute'>
										<div className='md:text-start'>
											<label
												htmlFor=''
												className='md:w-200 md:text-start md:h-8 md:pt-8  md:font-secundaria md:text-lg md:font-normal md:text-labeltexto md:flex-none md:grow-0 md:order-none'
											>
												categoria
											</label>
											<input
												type='text'
												name='categorias'
												value={form.categorias}
												onBlur={handleBlur}
												onChange={handleChange}
												className='md:w-266
											md:h-h48 
											md:bg-white md:border-solid md:border-1 md:border-secundario3 md:rounded-xl md:flex-none md:order-1 md:grow-0 md:px-3 md:py-4 md:gap-2.5 md:box-border'
											></input>
											{<errors className='categoria'></errors> && (
												<p className='md:font-secundaria md:text-xs md:font-normalmd: text-error md:w-48 md:h-4 md:flex-none md:grow-0 md:order-2'>
													{errors.categorias}
												</p>
											)}
										</div>
									</div>
								</div>

								{/* ----------aca va el tercer grupo----------- */}
								<div>
									<div id='divInput' className='left-4 top-266'>
										<label id='labelInput' className='w-107' htmlFor=''>
											precio
										</label>
										<input
											type='number'
											id='inputForm'
											name='precio'
											value={form.precio}
											onBlur={handleBlur}
											onChange={handleChange}
											required
										></input>
										{errors.precio && (
											<p className='pr-6' id='errorp'>
												{errors.precio}
											</p>
										)}
									</div>

									<div id='divInput' className='top-266 left-200 md:left-305'>
										<label id='labelInput' className='w-156' htmlFor=''>
											alerta
										</label>
										<input
											type='number'
											id='inputForm'
											name='alerta'
											value={form.alerta}
											onBlur={handleBlur}
											onChange={handleChange}
											required
										></input>
										{errors.alerta && (
											<p className='pr-6' id='errorp'>
												{errors.alerta}
											</p>
										)}
									</div>
								</div>
								{/* -------------aca va el 4 grupo----------------- */}
								<div className=''>
									<button
										className='w-40 h-h48  top-96   md:top-418 md:w-266 left-4 rounded-xl p-2.5 gap-2.5 bg-acento2 flex flex-row justify-center items-center absolute'
										onClick={() => setModal(true)}
									>
										<div className=' text-primario w-120 h-22 font-secundaria not-italic font-bold text-base flex-none grow-0order-0 '>
											Cargar Excel
										</div>
									</button>

									<button
										type='submit'
										value='send'
										onClick={() => setVisible(true)}
										// onFocus={()=>setForm.length >6 ? handleSubmit() : <p id='errorp'>debes completar todos los campos</p>}

										className='w-40 h-h48 top-96 md:top-418 md:w-266 left-200 md:left-305 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center absolute'
									>
										<div className=' text-primario font-secundaria w-78 h-22 font-bold text-base not-italic  flex-none order-0 grow-0 '>
											Continuar
										</div>
									</button>

									{visible ? <ModalProductocargado /> : null}

									{modal && (
										<section
											id='modalExcel'
											className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 '
										>
											<div
												id='modal-containerExcel'
												className='bg-primario3 m-auto w-371 h-60 rounded-lg pr-14'
											>
												<div className=' flex justify-end mb-8 mr-2'>
													<button
														className=' pr-2 pt-2'
														onClick={() => setModal(false)}
													>
														<RiCloseCircleLine className='w-6 h-6 fill-secundario bottom-4' />
													</button>
												</div>

												<p
													id='modal-paragraph'
													className=' w-82 h-52 left-6 not-italic  items-center flex-none order-none grow-0 py-12 px-10 text-center font-secundaria text-error top-4 text-xl'
												>
													Disponible solo en version Premiun
												</p>
											</div>
										</section>
									)}
									{!modal && null}
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
