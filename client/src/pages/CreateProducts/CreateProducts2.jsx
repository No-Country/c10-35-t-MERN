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
	unidades:""
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
	const [response, setResponse] = useState(null)
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
if (Object.keys(errors).length === 0 ){
			
			helpFetch()
				.post('http://localhost:3000/data', {
					body: form,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				.then((res) => {
					// setForm(res);
					setResponse(true);
					setForm(initialForm)
				});
				
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
			<div className=''>
				{/* --------contenedor general de barra superior -------- */}
				<div className='flex-none order-1 grow-0'>
					{/* --------contenedor de items h1 y botones------- */}
					<div className='w-373 h-43 top-31  left-0 px-0 py-4 gap-3 flex flex-row items-center  flex-none order-1 grow-0 '>
						<Link
							to={'/inicio'}
							className='flex-none order-0 grow-0 w-6 h-6 top-2.5 left-4'
						>
							<RiArrowLeftSLine />
						</Link>

						<h1 className='w-271 h-43 left-l52 flex items-end'>
							Crear Producto
						</h1>

						<Link to={'/inicio'}>
							<RiCloseCircleFill className='w-6 h-6 top-2.5 left-335 flex-none order-2 grow-0' />
						</Link>
					</div>
				</div>
			</div>
			<div className='flex-none'>
				<img
					src={producto}
					className='w-250 h-180 p-0 top-28 left-16 border-7 rounded-xl gap-22 border-solid border-acento2 box-border flex flex-row justify-center items-center absolute '
				></img>
				<p className='text-xs font-secundaria font-normal text-secundario absolute w-72 h-18 left-56 top-297 mt-2'>
					cargar foto
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				{/* -------contenerdor de inputs----- */}
				<div className='w-375 h-469 mt-80 left-0 bg-primario3 absolute rounded-tr-3xl rounded-tl-3xl'>
					{/* ------desde aca empiezan los inputs---- */}

					<div className='w-341 h-70 top-3 left-4 absolute flex flex-col items-start p-0 gap-1'>
						<label id='labelInput' className='w-40 h-18'>
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
							className='w-341 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl flex-none order-1 grow-0 px-3 py-4 gap-2.5 box-border
						}'
						></input>
						{errors.nombre && <p id='errorp'>{errors.nombre}</p>}
					</div>

					{/* ----------------aca va el primer grupo-------- */}
					<div className=''>
						<div id='divInput' className='left-4 top-24'>
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
						{errors.cantidad && <p id='errorp'>{errors.cantidad}</p>}
						
						<div  id='divInput' className='left-200 top-24'>
							<label id='labelInput' className='w-133' >
								unidades
							</label>
							<select className='w-40 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl flex-none order-1 grow-0 px-3 py-4 gap-2.5 box-border' 
							name='unidades' onChange={handleChange}>
								<option id='unidades' value="unidades">
									Unidades
								</option>
								<option id='Kg' value="Kg">
									Kg
								</option>
								<option id='Mts' value="Mts">
									Mts
								</option>
								<option id='Lts' value="Lts">
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
							{errors.costo && <p id='errorp'>{errors.costo}</p>}
						</div>
						<div id='divInput' className='top-178 left-200'>
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
								required
							></input>
							{errors.total && <p id='errorp'>{errors.total}</p>}
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
							{errors.precio && <p id='errorp'>{errors.precio}</p>}
						</div>
						<div id='divInput' className='top-266 left-200'>
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
							{errors.alerta && <p id='errorp'>{errors.alerta}</p>}
						</div>
					</div>
					{/* -------------aca va el 4 grupo----------------- */}
					<div className='flex-flex-col'>
						<button
							className='w-40 h-h48 top-96 left-4 rounded-xl p-2.5 gap-2.5 bg-acento2 flex flex-row justify-center items-center absolute'
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

							className='w-40 h-h48 top-96 left-200 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center absolute'
						>
							<div className=' text-primario font-secundaria w-78 h-22 font-bold text-base not-italic  flex-none order-0 grow-0'>
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
									<div className=' flex justify-end mb-8'>
										<button
											className=' pr-2 pt-2'
											onClick={() => setModal(false)}
										>
											<RiCloseCircleLine className='w-6 h-6 fill-secundario bottom-4' />
										</button>
									</div>

									<p
										id='modal-paragraph'
										className=' py-12 px-10 text-center font-secundaria text-error top-4'
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
		</>
	)
}

export default CreateProducts2
