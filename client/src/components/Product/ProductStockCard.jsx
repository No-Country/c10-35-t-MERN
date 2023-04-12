import React from 'react'
import leche from '../../assets/leche.png'; 
import { FaEdit } from 'react-icons/fa'



export const ProductStockCard = ({title, price, stock}) => {
	return (
		<div className='w-full h-36'>
			<div className='w-full h-36 border-2 rounded-3xl bg-acento2 p-3 '>
				<div className='w-full flex gap-7 items-center justify-center h-full'>
					<img
						src={leche}
						alt='imagen'
						className='object-cover h-16 w-20'
					/>
					<div className='w-full h-16 flex flex-col justify-between' >
						<div className='flex justify-between w-full'>
							<h3 className='font-bold text-xl w-full text-white'>{title}</h3>
							<button><FaEdit /></button>
						</div>

						<div className='w-full grid grid-cols-4 grid-rows-1 gap-1 '>
						<div className='col-span-1 row-span-1 text-sm'>
							<h5 className='text-acento font-bold'>Und:</h5>
						</div>

						<div className='col-span-1 row-span-1 text-sm'>
							<p className='text-white'>{stock}</p>
						</div>

						<div className='col-span-1  row-span-1 text-sm'>
							<h5 className='text-acento font-bold'>Total:</h5>
						</div>

						<div className='col-span-1  row-span-1 text-sm'>
							<p className='text-white'>${price}</p>
						</div>
					</div>
					</div>
				</div>

				
				
			</div>
		</div>
	)
}
