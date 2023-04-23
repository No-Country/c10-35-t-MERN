const Prueba = () => {
	return (
		<div
			className='
		w-full h-469 bg-primario mt-343	
		rounded-tr-3xl rounded-tl-3xl md:w-566 md:h-418 md:gap-4 md:flex-none md:grow-0 md:order-none md:flex md:flex-col md:ml-16  md:bg-white md:mt-280'
		>
			{/*   esto es lo que tiraba abajo el formulario */}
			{/* ----------esto engloba impus de nombre y grupo-------- */}
			{/* md:mt-0 md:mb-0 md:h-18 md:pb-2 */}
			{/* --------------input nombre------------- */}
			<div className=' w-full h-24 items-start '>
				<div className='h-24'>
					<div className='grid pr-1 pl-3'>
						<label className='w-full h-6 text-start'>Nombre</label>
						<input
							type='text'
							id='nombre'
							name='nombre'
							// value={form.nombre}
							// onBlur={handleBlur}
							// onChange={handleChange}
							className='w-full h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl px-3 py-4 box-border md:w-556'
						></input>
					</div>
					{/* {errors.nombre && (
						<p id='msgerror' className='ml-4'>
							{errors.nombre}
						</p>
					)} */}
					<p id='msgerror' className='ml-4'>
						parrafo error
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center w-full'>
				{/* -------------------primer grupo--------------- */}

				<div id='groupInput'>
					<div className='bg-orange-300 h-32'>
						<div id='divPrueba' className=''>
							<label id='labelPrueba'>Cantidad</label>
							<input
								id='inputPrueba'
								type='number'
								name='cantidad'
								// value={form.cantidad}
								// onBlur={handleBlur}
								// onChange={handleChange}
							></input>
						</div>
						{/* {errors.cantidad && <p id='msgerror'>{errors.cantidad}</p>} */}
						<p id='msgerror'>parrafo error</p>
					</div>
					<div className='bg-orange-300 h-32'>
						<div id='divPrueba'>
							<label id='labelPrueba'>Seleciona la unidad</label>
							<select
								id='inputPrueba'
								name='unidades'
								// onChange={handleChange}
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
						{/* {errors.unidades && <p id='msgerror'>{errors.unidades}</p>} */}
						<p id='msgerror'>parrafo error</p>
					</div>
				</div>

				{/* -------------------segundo grupo--------------- */}

				<div id='groupInput' className=''>
					<div className='bg-orange-300 h-32'>
						<div id='divPrueba'>
							<label id='labelPrueba'>Costo unitario</label>
							<input
								id='inputPrueba'
								type='number'
								name='costo'
								// value={form.costo}
								// onBlur={handleBlur}
								// onChange={handleChange}
							></input>
						</div>
						{/* {errors.costo && <p id='msgerror'>{errors.total}</p>} */}
						<p id='msgerror'>parrafo error</p>
					</div>
					<div className='bg-orange-300 h-32'>
						<div id='divPrueba'>
							<label id='labelPrueba'>Costo total</label>
							<input
								id='inputPrueba'
								type='number'
								name='total'
								// value={form.total}
								// onBlur={handleBlur}
								// onChange={handleChange}
							></input>
						</div>
						{/* {errors.total && <p id='msgerror'>{errors.total}</p>} */}
						<p id='msgerror'>parrafo error</p>
					</div>
				</div>

				{/* -------------------tercer grupo--------------- */}

				<div id='groupInput' className=''>
					<div className='bg-orange-300 h-32'>
						<div id='divPrueba'>
							<label id='labelPrueba'>Precio</label>
							<input id='inputPrueba'></input>
						</div>
						{/* {errors.precio && <p id='msgerror'>{errors.precio}</p>} */}
						<p id='msgerror'>parrafo error</p>
					</div>
					<div className='bg-orange-300 h-32'>
						<div id='divPrueba'>
							<label id='labelPrueba'>Categoria</label>

							<select
								id='inputPrueba'
								name='categorias'
								// type='text'

								// value={form.categorias}
								// onBlur={handleBlur}
								// onChange={handleChange}
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
						{/* {errors.categoria && <p id='msgerror'>{errors.categoria}</p>} */}
						<p id='msgerror'>parrafo error</p>
					</div>
				</div>

				{/* --------------------cuarto grupo---------------- */}
				<div id='groupInput'>
					<button
						id='inputPrueba'
						className='bg-acento2'
						// className=' md:top-418 md:w-266 left-4 rounded-xl p-2.5 gap-2.5 bg-acento2 flex flex-row justify-center items-center absolute'
						// onClick={() => setModal(true)}
					>
						<div className=' text-primario w-full h-22 font-secundaria not-italic font-bold text-base   '>
							Cargar Excel
						</div>
					</button>

					<button
						id='inputPrueba'
						type='submit'
						value='send'
						// onClick={() => setVisible(true)}
						className='bg-secundario'
						// className='top-355 md:top-418 md:w-266 left-200 md:left-305 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center absolute'
					>
						<div className=' text-primario font-secundaria w-full h-22 font-bold text-base not-italic '>
							Continuar
						</div>
					</button>

					{/* {visible ? (
										<ModalProductocargado
											texto={'Productos cargados exitosamente!'}
										/>
									) : null}
									{modal ? <ModalExcel setModal={setModal} /> : null} */}
					{/* {response? null:  <ModalFallaCarga setVisible={setVisible}/>} */}
				</div>
			</div>
		</div>
	)
}

export default Prueba
