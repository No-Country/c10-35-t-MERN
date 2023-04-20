import { useEffect, useState } from 'react'
import { helpFetch } from '../../components/helpers/helpFetch'
import { Link } from 'react-router-dom'
import { BoxImage } from '../../components/CreateProducts/BoxImage'
import ModalProductoModificado from '../../components/Modals/ModalProductoModificado'
import HeadingsModify from '../../components/ModifyProduct/HeadingsModify'
import Subtitles from '../../components/CreateProducts/Subtitles'

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
	
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState({...initialForm,nombre:"yesi",cantidad:2,unidades:"Kg",id:3})
	const [errors, setErrors] = useState({})
	const [response, setResponse] = useState(null)
	const [db, setDb] = useState(null)
	const [dataToEdit, setDataToEdit] = useState(null)
	


	const crud = helpFetch()
	let urlGet = 'http://localhost:3000/data'

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
			
				helpFetch().post(urlGet, {
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
			
			return updateData(form)
		}
    //   handleReset()
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
				}else(
					setResponse(res)
				)
			})
	}

	const updateData = data => {
		<ModalProductoModificado idProduct={1}/>
		let endpoint = `${urlGet}/${data.id}`;


		crud
			.put(endpoint, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				if (!res.err) {
					let newData = db.map(el => (el.id === data.id ? data : el))
					setDb(newData)
				}else{
					setResponse(res);
				}
			})
	}

	const deleteData = id => {
		let isDelete = confirm(`¿Estas seguro que quieres eliminar ${id}?`);

		<ModalProductoModificado idProduct={1}/>

		if (isDelete) {
			let endpoint = `${urlGet}/${id}`

			crud
				.del(endpoint, { headers: { 'content-type': 'application/json' } })
				.then(res => {
					if (!res.err) {
						let newData = db.filter(el => el.id !== id)
						setDb(newData)
					}else{
						setResponse(res);
					}
				})
		}
	}
	const handleReset = e => {
		setForm(initialForm);
        setDataToEdit(null);
	}
    
	return (
		<>
			<div className='w-373 h-812  md:absolute md:w-1310 md:h-1024 md:left-130 md:top-0 md:bg-fondoT'>
				<div className='md:absolute md:w-714 md:h-920 md:top-52 md:left-297 bg-white '>
					{/* ----------------headings------------ */}
					<HeadingsModify />

					{/* -----------contenedor de subtittles desktop----------- */}
					
					<Subtitles formData={form}/>

				

					{/* ----------------contendor de imagen------------ */}

					<BoxImage />

					{/* --------------contenedor de fomulario--------------- */}
					<div className=''>
						<form onSubmit={handleSubmit}>
							{/* -------contenedor de inputs----- */}
							<div className='w-375 h-469  mt-343 left-0 bg-primario3 absolute rounded-tr-3xl rounded-tl-3xl md:w-566 md:h-418 md:gap-4 md:flex-none md:grow-0 md:order-none md:flex md:flex-col md:ml-16  md:bg-white md:mt-280'>
								{/* ------aca empiezan los inputs---- */}

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
											className='w-40 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl flex-none order-1 grow-0 px-3 py-2 gap-2.5 box-border text-base font-secundaria  text-secundario items-center  md:w-266'
											name='unidades'
											onChange={handleChange}
											defaultValue={form.unidades}
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
										></input>
										{errors.costo && (
											<p className=' md:ml-2 pr-6' id='errorp'>
												{errors.costo}
											</p>
										)}
									</div>
									<div className=''>
										<div id='divInput' className='top-178 left-200 md:left-305'>
											<label id='labelInput' htmlFor='' className='w-107'>
												categorias
											</label>
											<input
												type='texto'
												id='inputForm'
												name='categorias'
												value={form.categorias}
												onBlur={handleBlur}
												onChange={handleChange}
											></input>
											{errors.categorias && (
												<p className='pr-6' id='errorp'>
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
                                           onClick={()=>deleteData()}
											className='w-40 h-h48 top-96 md:top-418 md:w-266 left-200 md:left-305 rounded-xl p-2.5 gap-2.5 bg-acento2 flex flex-row justify-center items-center absolute'
										>
											<div className=' text-primario font-secundaria w-78 h-22 font-bold text-base not-italic  flex-none order-0 grow-0 '>
												Eliminar
											</div>
										</button>
								
									<button
										type='submit'
										value='send'
										onClick={() =>updateData()										}
										className='w-40 h-h48  top-96   md:top-418 md:w-266 left-4 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center absolute'
									>
										<div className=' text-primario w-120 h-22 font-secundaria not-italic font-bold text-base flex-none grow-0order-0 '>
											Guardar
										</div>
									</button>

									{/* {visible ? <ModalProductoModificado /> : null} */}
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