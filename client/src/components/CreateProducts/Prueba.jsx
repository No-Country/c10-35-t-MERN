const Prueba = () => {
	return (
		<div className=' w-screen flex py-4 bg-red-300'>
			<div className='flex flex-col justify-center items-center w-screen bg-slate-400'>
				{/* -------------------primer grupo--------------- */}
				
                <div id='groupInput'>
					<div >
						<div id='divPrueba' className=''>
							<label id='labelPrueba'>cantidad</label>
							<input id='inputPrueba'></input>
						</div>
						<p id="msgerror">parrafo error</p>
					</div>
					<div >
						<div id='divPrueba'>
							<label id='labelPrueba'>unidades</label>
							<input id='inputPrueba'></input>
						</div>
						<p id="msgerror">parrafo error</p>
					</div>
				</div>

				{/* -------------------segundo grupo--------------- */}

				<div id='groupInput' className=''>
					<div >
						<div id='divPrueba'>
							<label id='labelPrueba'>costo unitario</label>
							<input id='inputPrueba'></input>
						</div>
						<p id="msgerror">parrafo error</p>
					</div>
					<div >
						<div id='divPrueba'>
							<label id='labelPrueba'>costo total</label>
							<input id='inputPrueba'></input>
						</div>
						<p id="msgerror">parrafo error</p>
					</div>
				</div>

				{/* -------------------tercer grupo--------------- */}

				<div id='groupInput' className=''>
					<div >
						<div id='divPrueba'>
							<label id='labelPrueba'>precio</label>
							<input id='inputPrueba'></input>
						</div>
						<p id="msgerror">parrafo error</p>
					</div>
					<div >
						<div id='divPrueba'>
							<label id='labelPrueba'>categoria</label>
							<input id='inputPrueba'></input>
						</div>
						<p id="msgerror">parrafo error</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Prueba
