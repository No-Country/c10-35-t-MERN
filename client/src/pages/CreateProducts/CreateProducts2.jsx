/* eslint-disable prefer-const */
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react'
import { data, unidades } from '../../data/db.json'
import { helpFetch } from '../../components/helpers/helpFetch'
import { useEffect } from 'react'

const initialForm = {
	id: null,
	nombre: '',
	cantidad: '',
	costo: '',
	total: '',
	precio: '',
	alerta: '',

}

const initialDb = {
	data,
	
}

const CreateProducts2 = () => {
	const [visible, setVisible] = useState(false)
	const [form, setForm] = useState({})
	const [db, setDb] = useState(initialDb)

    const crud = helpFetch()
    let url="http://localhost:3000/data";

    useEffect(() => {

helpFetch()

crud.get(url)
   .then((res)=>{
    if(!res.err){
        setDb(res);
        setError(res);
    }
   })
  }) ;  
      
    },[]),
    


	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (
			!form.nombre ||
			!form.cantidad ||
			!form.costo ||
			!form.total ||
			!form.precio ||
			!form.alerta 
		
		) {
			alert('debes ingresar todos los campos')
			return
		}
		if (form.id === null) {
			createData()
		}
	}

	const createData = data => {
		data.id = Date.now

        crud.post(url,{body:data}).then((res)=>{

            console.log(res);
            if(!res.err){

                setDb([...db,
                    res
                ]);
            }
        })

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
				className=' h-screen w-screen  bg-yellow-300'
			>
				<div className='  p-4 mt-2 bg-primario75'>
					<label className='m-2 mb-4 md:m-4 '>nombre</label>
					<input
						type='text'
						id='textonombre'
						name='nombre'
						value={form.nombre}
						onChange={handleChange}
						className=' w-80 h-6 pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
					></input>
				</div>
				<div className='flex justify-cente'>
					<div className='grid grid-cols-2 gap-x-20 md:gap-x-96'>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>
								{' '}
								cantidad
								<input
									type='number'
									id='cantidad'
									name='cantidad'
									value={form.cantidad}
									onChange={handleChange}
									className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
								></input>
							</label>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='' className='m-2 p-2'>
								{' '}
								costo
								<input
									type='number'
									id='costo '
									name='costo'
									value={form.costo}
									onChange={handleChange}
									className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
								></input>
							</label>
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>
								{' '}
								costoTotal
								<input
									type='number'
									id='costoTotal'
									name='total'
									value={form.total}
									onChange={handleChange}
									className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
								></input>
							</label>
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>
								precio
								<input
									type='number'
									id='precio'
									name='precio'
									value={form.precio}
									onChange={handleChange}
									className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
								></input>
							</label>
						</div>
						<div className='flex flex-col m-2 p-2'>
							<label htmlFor=''>
								alerta
								<input
									type='number'
									id='alerta'
									name='alerta'
									value={form.alerta}
									onChange={handleChange}
									className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
								></input>
							</label>
						</div>
						{/* <div className='flex flex-col m-2 p-2'>
							
							unidades
							<label className='m-2 md:m-4 flex justify-between'> </label>
							<select
								name='units'
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
							onClick={
								() => setVisible(true)
								// aca tambien debe ir el agregar producto a base datos de la peticion POST
							}
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
