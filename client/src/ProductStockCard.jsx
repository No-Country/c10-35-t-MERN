import React from 'react'



export const ProductStockCard = () => {
	return (
		<div className='w-screen'>
			<div className='mx-5 border-2 rounded-3xl bg-zinc-400 p-10'>
				<div className='w-full flex gap-7'>
					<img
						src='https://www.bebidasinn.com/wp-content/uploads/2021/10/Limon-1litro.jpg'
						alt='imagen'
						className='object-cover h-20 w-20'
					/>
					<div className='w-full flex flex-col justify-between'>
						<div className='flex justify-between'>
							<h2 className='font-bold'>Gaseosas Limon</h2>
							<button>IconoEditar</button>
						</div>

						<div className='flex justify-between'>
							<h3><span className='font-bold'>Und:</span> 48</h3>
							<h3><span className='font-bold'>Total:</span> $48</h3>
						</div>
					</div>
				</div>

				<div className='w-full flex-col mt-5'>
					<div className='w-full bg-gray-50 rounded-3xl'>
						<div className='w-11/12 bg-zinc-600 p-1 rounded-3xl'></div>
					</div>

					<label>Stock</label>
				</div>
			</div>
		</div>
	)
}
