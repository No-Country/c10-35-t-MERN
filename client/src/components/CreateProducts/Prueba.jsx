const Prueba = () => {
	return (
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
						{errors.cantidad && <p id='msgerror'>{errors.cantidad}</p>}
					</div>
					<div>
						<div id='divPrueba'>
							<label id='labelPrueba'>Seleciona la unidad</label>
							<select id='inputPrueba' name='unidades' onChange={handleChange}>
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
						{errors.unidades && <p id='msgerror'>{errors.unidades}</p>}
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
						{errors.categoria && <p id='msgerror'>{errors.categoria}</p>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Prueba
