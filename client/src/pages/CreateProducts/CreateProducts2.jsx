/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
import { useState } from 'react'
import { helpFetch } from '../../components/helpers/helpFetch'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModalProductocargado from '../../components/Modals/ModalProductocargado'
import Subtitles from '../../components/CreateProducts/Subtitles'
import { BoxImage } from '../../components/CreateProducts/BoxImage'
import Headings from '../../components/CreateProducts/Headings'
import ModalExcel from '../../components/Modals/ModalExcel'
import ModalFallaCarga from '../../components/Modals/ModalFallaCarga'

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

const CreateProducts2 = () => {
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState(initialForm)
	const [errors, setErrors] = useState({})
	const [response, setResponse] = useState(null)
	const [db, setDb] = useState(null)

	const [dataToEdit, setDataToEdit] = useState(null)
	const [modal, setModal] = useState(false)

	const crud = helpFetch()
	const urlGet = 'http://localhost:3000/data'
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
				.post(urlGet, {
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
				})

			return
		}
		if (form.id === null) {
			return createData(form)
		} else {
			return updateData(form)
		}
		// handleReset()
	}

	const createData = data => {
		crud
			.post(urlGet, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				if (!res.err) {
					setDb([...db, res])
				} else setResponse(res)
			})
	}

	const updateData = data => {
		let endpoint = `${urlGet}/${data.id}`

		crud
			.put(endpoint, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				if (!res.err) {
					let newData = db.map(el => (el.id === data.id ? data : el))
					setDb(newData)
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
						setDb(newData)
					} else {
						setResponse(res)
					}
				})
		}
	}
	const handleReset = e => {
		setForm(initialForm)
		setDataToEdit(null)
	}

	return (
		<>
			<div className='w-373 h-812  md:absolute md:w-1310 md:h-1024 md:left-130 md:top-0 md:bg-fondoT'>
				<div className='md:absolute md:w-714 md:h-920 md:top-52 md:left-297 bg-white '>
					<Headings />

					{/* -----------subtitulos en desktop----------- */}

					<Subtitles formData={form} />

					{/* ----------------contendor de imagen------------ */}

					<BoxImage />

					{/* --------------contenedor de fomulario--------------- */}

					<div className=''>
						<form onSubmit={handleSubmit}>
							{/* -------contenerdor de inputs----- */}

							<div
								className='
		w-375 h-469  mt-343 left-0 bg-primario3 absolute rounded-tr-3xl rounded-tl-3xl md:w-566 md:h-418 md:gap-4 md:flex-none md:grow-0 md:order-none md:flex md:flex-col md:ml-16  md:bg-white md:mt-280'
							>
								{/* --------------input nombre------------- */}
								<div className=' w-341 h-88 flex flex-col m-1 pl-2 gap-2 items-center md:w-607 md:mt-0 md:mb-0 md:h-18 md:pb-2'>
									<div>
										<div className='flex flex-col ml-25 pl-2'>
											<label className='w-48 h-6 text-start'>Nombre</label>
											<input
												type='text'
												id='nombre'
												name='nombre'
												value={form.nombre}
												onBlur={handleBlur}
												onChange={handleChange}
												className='w-375 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl px-3 py-4 box-border md:w-556'
											></input>
										</div>
										{errors.nombre && (
											<p id='msgerror' className='ml-34'>
												{errors.nombre}
											</p>
										)}
									</div>
								</div>
								<div className='flex flex-col justify-center items-center w-screen'>
									{/* -------------------primer grupo--------------- */}

									<div id='groupInput'>
										<div>
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
										<div>
											<div id='divPrueba'>
												<label id='labelPrueba'>Seleciona la unidad</label>
												<select
													id='inputPrueba'
													name='unidades'
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
										<div>
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
											{errors.costo && <p id='msgerror'>{errors.total}</p>}
										</div>
										<div>
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

									<div id='groupInput' className=''>
										<div>
											<div id='divPrueba'>
												<label id='labelPrueba'>Precio</label>
												<input id='inputPrueba'></input>
											</div>
											{errors.precio && <p id='msgerror'>{errors.precio}</p>}
										</div>
										<div>
											<div id='divPrueba'>
												<label id='labelPrueba'>Categoria</label>

												<select
													id='inputPrueba'
													name='categorias'
													// type='text'

													// value={form.categorias}
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
								</div>
								{/* -------------cuarto grupo----------------- */}
    <div className=''>
        <button
            className='w-40 h-h48  top-96   md:top-418 md:w-266 left-4 rounded-xl p-2.5 gap-2.5 bg-acento2 flex flex-row justify-center items-center absolute'
            onClick={() =>setModal(true)}
        >
            <div className=' text-primario w-120 h-22 font-secundaria not-italic font-bold text-base  grow-0order-0 '>
                Cargar Excel
            </div>
        </button>

        <button
            type='submit'
            value='send'
            onClick={() => setVisible(true)}
            className='w-40 h-h48 top-96 md:top-418 md:w-266 left-200 md:left-305 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center absolute'
        >
            <div className=' text-primario font-secundaria w-78 h-22 font-bold text-base not-italic  order-0 grow-0 '>
                Continuar
            </div>
        </button>

        {visible ? <ModalProductocargado texto={"Productos cargados exitosamente!"}/> : null}
        {modal ? <ModalExcel setModal={setModal} /> : null}
        {/* {response? null:  <ModalFallaCarga setVisible={setVisible}/>} */}
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
