import React from 'react'

function Reports() {
	return (
		<div className='flex flex-col justify-center items-center w-full py-5 gap-5'>
			<div className='flex flex-col px-4 py-3 rounded-lg border-solid border-2 border-secondary mw-32'>
				<h1 className='font-bold text-xl'>Stock total</h1>
				<p className='font-bold text-sm'>Total: $100000</p>
				<p className='font-bold text-sm'>Unidades: 2000</p>
			</div>
			<div className='flex flex-col relative justify-center py-8 items-center w-full bg-primary'>
				<div className='flex w-4/5 absolute -top-2 justify-between'>
					<a
						href='#'
						className='text-xs py-1 px-4 border-solid border-2 border-secondary rounded-xl bg-white'
					>
						Sermanal
					</a>
					<a
						href='#'
						className='text-xs py-1 px-4 rounded-xl border-solid border-2 border-secondary bg-white'
					>
						Mensual
					</a>
					<a
						href='#'
						className='text-xs py-1 px-4 rounded-xl border-solid border-2 border-secondary bg-white'
					>
						Diaria
					</a>
				</div>
				<div className='w-4/5 h-24 bg-secondary'></div>
			</div>
			<main className='flex justify-evenly items-center bg-primary w-full py-5'>
				<article className='flex flex-col items-center text-center'>
					<h2 className='text-xs font-bold'>Ingresos y egresos</h2>
					<div className='bg-secondary w-28 h-28'></div>
				</article>
				<article className='flex flex-col justify-center items-center text-center'>
					<h2 className='text-xs font-bold'>Categorias y unidades</h2>
					<div className='bg-secondary w-28 h-28'></div>
				</article>
			</main>
			<div className='flex justify-between items-center p-2 rounded-sm bg-secondary mb-2 w-4/5'>
				<p>Stock a calcular</p>
				<p>UND7</p>
			</div>
			<div className='flex justify-between items-center p-2 rounded-sm bg-secondary w-4/5'>
				<p>Productos baja rotación</p>
				<p>UND1</p>
			</div>
		</div>
	)
}

export default Reports
