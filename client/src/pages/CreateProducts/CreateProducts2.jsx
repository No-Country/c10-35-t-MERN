/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react'
import { data, unidades } from '../../data/db.json'
import { helpFetch } from '../../components/helpers/helpFetch'
import { useEffect } from 'react'
// import useForm from '../../components/helpers/useForm'


// const initialForm = {
// nombre: '',
// 	cantidad: '',
// 	costo: '',
// 	total: '',
// 	pricio: '',
// 	alerta: '',
// }

const validationsForm = form => {
	let errors = {}

	let letters = /^[a-zA-ZÀ-ÿ\s]+$/
	let number = /(^[0-9]{1,7}$|^[0-9]{1,7}\.[0-9]{1,3}$)/

	if (!form.nombre.trim()) {
		errors.nombre = 'El campo nombre es requerido'
	} else if (!letters.test(form.nombre.trim())) {
		errors.nombre = 'el campo nombre solo acepta letras'
	}

	if (!form.cantidad.trim()) {
		errors.cantidad = 'El campo es requerido'
	} else if (!number.test(form.cantidad.trim())) {
		errors.cantidad = 'el campo nombre solo acepta letras'
	}
	if (!form.costo.trim()) {
		errors.costo = 'El campo es requerido'
	} else if (!number.test(form.costo.trim())) {
		errors.costo = 'el campo nombre solo acepta numeros'
	}
	if (!form.total.trim()) {
		errors.total = 'El campo es requerido'
	} else if (!number.test(form.total.trim())) {
		errors.total = 'el campo nombre solo acepta numeros'
	}
	if (!form.precio.trim()) {
		errors.precio = 'El campo es requerido'
	} else if (!number.test(form.precio.trim())) {
		errors.precio = 'el campo nombre solo acepta numeros'
	}
	if (!form.alerta.trim()) {
		errors.alerta = 'El campo es requerido'
	} else if (!number.test(form.alerta.trim())) {
		errors.alerta = 'el campo nombre solo acepta numeros'
	}
	return errors
}


const CreateProducts2 = () => {
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState({})
	const [errors, setErrors] = useState({})
	const [db, setDb] = useState({})
	const [dataToEdit, setDataToEdit] = useState(null)

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
		});
	};

	const handleBlur = e => {
		handleChange()
		setErrors(validationsForm(form))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setErrors(validationsForm(form))

		if (Object.keys(errors).length === 0) {
			alert("Enviando Formulario");
			
			helpFetch()
			  .post("http://localhost:3000/data", {
				body: form,
				headers: {
				  "Content-Type": "application/json",
				  Accept: "application/json",
				},
			  })
			  .then((res) => {
				
				setForm({});
			
			  });
		  } else {
			return;
		  }

		if (form.id === null) {
			createData(form)
		} else {
			updateData(form)
		}

		// handleReset()
	}

	// 	const handleReset = e => {
	// 	setForm({})
	// 	setDataToEdit(null)
	// }

	const createData = data => {
		data.id = Date.now

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
			<div>
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
			</div>

			<form
				onSubmit={handleSubmit}
				className=' h-screen w-screen  bg-primario3'
			>
				<div className='  p-4 mt-2 bg-primario75'>
					<label className='m-2 mb-4 md:m-4 '>nombre</label>
					<input
						type='text'
						id='textonombre'
						name='nombre'
						value={form.nombre}
						onBlur={handleBlur}
						onChange={handleChange}
						required
						className=' w-80 h-6 pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
					></input>
					{errors.nombre && <p>{errors.nombre}</p>}
				</div>
				<div className='flex justify-cente'>
					<div className='grid grid-cols-2 gap-x-20 md:gap-x-96'>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>cantidad</label>
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
							{errors.cantidad && <p>{errors.cantidad}</p>}
						</div>
						<div className='flex flex-col'>
							<label htmlFor='' className='m-2 p-2'>
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
							{errors.costo && <p>{errors.costo}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>costoTotal</label>
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
							{errors.total && <p>{errors.total}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>precio</label>
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
							{errors.precio && <p>{errors.precio}</p>}
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>alerta</label>
							<input
								type='number'
								id='alerta'
								name='alerta'
								value={form.alerta}
								onBlur={handleBlur}
								onChange={handleChange}
								required
								className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
							></input>
							{errors.alerta && <p>{errors.alerta}</p>}
						</div>
						{/* <div className='flex flex-col m-2 p-2'>
							
							unidades
							<label className='m-2 md:m-4 flex justify-between'> </label>
							<select
								name='unidades'
								defaultValue={unidades[3].unit}
								onChange={handleChange}
								required
								className='w-28 md:w-44 md:h-10 pl-2  border-2 rounded-lg text-sm md:text-lg flex justify-start items-center box-content '
							>
								{unidades.map(function (el) {
									return (
										<option value={el.unit} key={el.id}>
											{el.unit}
										</option>
									)
								})}
							</select>
							{errors.unidades && <p>{errors.unidades}</p>}
						</div> */}
					</div>

					<div className='flex justify-between mt-4'>
						{/* <button className='m-2 md:m-4 '>
							<div className='w-28 h-8 md:w-48 md:h-10 border-2 rounded-lg font-semibold text-slate-600 text-sm md:text-lg flex justify-center items-center '>
								Cargar Excel
							</div>
						</button> */}
						<button
							type='submit'
							value='send'
							onClick={() => setVisible(true)}
							className='m-2 md:m-4 mt-80'
						>
							<div className='bg-secundario text-primario w-28 h-8   border-2 rounded-lg  text-sm font-semibold  md:text-lg flex justify-center items-center'>
								Continuar
							</div>
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

export default CreateProducts2
