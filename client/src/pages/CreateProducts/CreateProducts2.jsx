/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
import { RiCloseCircleLine } from 'react-icons/ri'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useState } from 'react'
import { data } from '../../data/db.json'
import { helpFetch } from '../../components/helpers/helpFetch'
import { useEffect } from 'react'

// import useForm from '../../components/helpers/useForm'

const initialForm = {
	id: Date.now(),
	nombre: '',
	cantidad: '',
	costo: '',
	total: '',
	precio: '',
	alerta: ''

	// unidades:{
	// 	unidades:'',
	// 	kg:'',
	// 	mts:'',
	// 	lts:''
	// }
}

const validationsForm = (form, name) => {
	let errors = {}

	let letters = /^[a-zA-ZÀ-ÿ\s]+$/
	let number = /(^[0-9]{1,7}$|^[0-9]{1,7}\.[0-9]{1,3}$)/
	const { nombre, cantidad, precio, costo, total, alerta } = form

	if ((nombre === '') & (name === 'nombre')) {
		errors.nombre = 'El campo nombre es requerido'
		return errors
	} else if (!letters.test(nombre) & (name === 'nombre')) {
		errors.nombre = 'el campo nombre solo acepta numeros'
		return errors
	}

	if ((cantidad === '') & (name === 'cantidad')) {
		errors.cantidad = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(cantidad) & (name === 'cantidad')) {
		errors.cantidad = 'el campo nombre solo acepta numeros'
		return errors
	}

	if ((precio === '') & (name === 'precio')) {
		errors.precio = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(precio) & (name === 'precio')) {
		errors.precio = 'el campo nombre solo acepta numeros'

		return errors
	}

	if ((costo === '') & (name === 'costo')) {
		errors.costo = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(costo) & (name === 'costo')) {
		errors.costo = 'el campo nombre solo acepta numeros'
		return errors
	}

	if ((total === '') & (name === 'total')) {
		errors.total = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(total) & (name === 'total')) {
		errors.total = 'el campo nombre solo acepta numeros'
		return errors
	}

	if ((alerta === '') & (name === 'alerta')) {
		errors.alerta = 'El campo cantidad es requerido'
		return errors
	} else if (!number.test(alerta) & (name === 'alerta')) {
		errors.alerta = 'el campo nombre solo acepta numeros'
		return errors
	}

	return errors
}

const CreateProducts2 = () => {
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState(initialForm)
	const [errors, setErrors] = useState({})
	const [db, setDb] = useState({})
	const [dataToEdit, setDataToEdit] = useState(null)
	const [modal, setModal] = useState(false)

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
		console.log(e.target.value)
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleBlur = e => {
		console.log(e.target.name)

		setErrors(validationsForm(form, e.target.name))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setErrors(validationsForm(form))

		if (Object.keys(errors).length === 0) {
			// alert('Enviando Formulario')

			helpFetch()
				.post('http://localhost:3000/data', {
					body: form,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				.then(res => {
					console.log(res)
					setForm(res)
				})
			return
		}

		if (form.id === null) {
			return createData(form)
		} else {
			console.log('updateData')
			return updateData(form)
		}

		handleReset()
	}

	const handleReset = e => {
		setForm(initialForm)
		// setDataToEdit(null)
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

	return (
		<>
			<div className='h-373 w-78 px-1 py-0 gap-1.5 bg-white flex flex-col justify-center item absolute left-0 top-0'>
				<div className='w-375 h-43 top-8 px-0 py-4 gap-3 flex flex-row items-center'>
					<div className='flex justify-end h-10 p-4 md:p-6 md:pb-8'>
						<RiArrowLeftSLine />
						{/* className='bg-slate-300 rounded-xl h-6 w-6 p-0.5' /> */}
					</div>

					<h1 className=' mb-2 pl-2 md:text-xl text-slate-700 font-semibold'>
						Crear Producto
					</h1>
					<div className='w-6 h-6 top-2.5 left-335 flex-none order-2 grow-0'>
						<RiCloseCircleLine className=' h-5 w-5 inset-8.3 absolute bg-secundario fill-white' />
					</div>
				</div>
			</div>
			<img
				src='https://i.imgur.com/Tgt6TjG.jpeg'
				className='w-250 h-180 p-0 top-28 left-16 border-5 rounded-xl gap-22 border-solid border-acento2 box-border flex flex-row justify-center items-center absolute'
			></img>

			<form
				onSubmit={handleSubmit}
				className=' w-375 h-812 top-577 border-black box-border relative bg-white border-solid '
			>
				<div className='flex justify-center'>
					<div className=' grid grid-cols-2  gap-x-20 md:gap-x-96'>
						<div className='absolute w-343 h-432 left-4 top-349 bg-primario'>
							<label id='labelInput' >nombre</label>
							<input
								className=' w-80 h-6 pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
								type='text'
								id='textonombre'
								name='nombre'
								value={form.nombre}
								onBlur={handleBlur}
								onChange={handleChange}
								required
							></input>
							{errors.nombre && <p id='errorp'>{errors.nombre}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label id='labelInput' htmlFor=''>cantidad</label>
							<input
								type='number'
								id='cantidad'
								name='cantidad'
								value={form.cantidad}
								onBlur={handleBlur}
								onChange={handleChange}
								required
								className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
							></input>
							{errors.cantidad && <p id='errorp'>{errors.cantidad}</p>}
						</div>
						<div className='flex flex-col'>
							<label id='labelInput' htmlFor='' className='m-2 p-2'>
								costo
							</label>
							<input
								type='number'
								id='costo '
								name='costo'
								value={form.costo}
								onBlur={handleBlur}
								onChange={handleChange}
								required
								className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
							></input>
							{errors.costo && <p id='errorp'>{errors.costo}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label id='labelInput' htmlFor=''>costoTotal</label>
							<input
								type='number'
								id='costoTotal'
								name='total'
								value={form.total}
								onBlur={handleBlur}
								onChange={handleChange}
								required
								className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
							></input>
							{errors.total && <p id='errorp'>{errors.total}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label id='labelInput' htmlFor=''>precio</label>
							<input
								type='number'
								id='precio'
								name='precio'
								value={form.precio}
								onBlur={handleBlur}
								onChange={handleChange}
								required
								className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
							></input>
							{errors.precio && <p id='errorp'>{errors.precio}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label  id='labelInput' htmlFor=''>alerta</label>
							<input
								type='number'
								id='alerta'
								name='alerta'
								value={form.alerta}
								onBlur={handleBlur}
								onChange={handleChange}
								required
								className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm flex justify-start items-center'
							></input>
							{errors.alerta && <p id='errorp'>{errors.alerta}</p>}
						</div>
						{/* <div className='flex flex-col m-2 p-2 text-sm  pl-2'>
							unidades
							<label  id='labelInput' className='mb-4 flex justify-between'> </label>
							<select
							name='unidades'
							 
							onChange={handleChange}
							
							className='w-28 md:w-44 md:h-10 pl-2  border-2 rounded-lg text-sm md:text-lg flex justify-start items-center box-content '
							>
								<option id='unidades' value={form.unidades.unidades}>
									Unidades
								</option>
								<option id='Kg' value={form.unidades.kg}>
									Kg
								</option>
								<option id='Mts' value={form.unidades.mts}>
									Mts
								</option>
								<option id='Lts' value={form.unidades.lts}>
									Lts
								</option>
							</select>
							{errors.unidades && <p id='errorp'>{errors.unidades}</p>}
						</div> */}
					</div>

					<div className='flex justify-between p-0 mt-4'>
						<button className='m-2 mt-80' onClick={() => setModal(true)}>
							<div className='bg-secundario text-primario w-28 h-8 md:w-48 md:h-10  border-2 rounded-lg  text-sm font-semibold  md:text-lg flex justify-center items-center '>
								Cargar Excel
							</div>
						</button>

						<button
							type='submit'
							value='send'
							onClick={() => setVisible(true)}
							className='m-2 md:m-4 mt-80'
						>
							<div className='bg-secundario text-primario w-28 h-8 md:w-48 md:h-10  border-2 rounded-lg  text-sm font-semibold  md:text-lg flex justify-center items-center'>
								Continuar
							</div>
						</button>

						{modal && (
							<section
								id='modalExcel'
								className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 '
							>
								<div
									id='modal-containerExcel'
									className='bg-secundario3 w-11/12 m-auto max-w-96 h-60 rounded-lg '
								>
									<div className=' flex justify-end'>
										<button className=' pr-2 pt-2'>
											<svg
												onClick={() => setModal(false)}
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
										className=' py-12 px-10 text-center font-secundaria text-red-500'
									>
										Disponible solo en version Premiun
									</p>
								</div>
							</section>
						)}
						{!modal && null}

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

export default CreateProducts2
