import React from 'react'
import leche from '../../assets/leche.png'
import { RiEdit2Line } from 'react-icons/ri'

export const ProductStockCard = ({ title, price, stock }) => {
	return (
		<div className='w-full h-36'>
			<div className='w-full h-130 border-2 rounded-3xl bg-acento2 px-19 pt-4 pb-13'>
				<div className='flex-row'>
					<div className='w-full flex gap-7 items-center justify-center h-full flex-column'>
						<img src={leche} alt='imagen' className='object-cover w-85 h-62' />
						<div className='w-full h-62 flex flex-col justify-between'>
							<div className='flex justify-between w-full text-left'>
								<h3 className='font-bold text-xl w-full text-white'>{title}</h3>
								<div className='text-f20 text-acento'>
									<RiEdit2Line />
								</div>
							</div>

							<div className='w-full grid grid-cols-4 grid-rows-1 gap-1 '>
								<div className='col-span-1 row-span-1 text-sm text-left'>
									<h4 className='text-acento font-bold'>Und:</h4>
								</div>

								<div className='col-span-1 row-span-1 text-sm'>
									<p className='text-white'>{stock}</p>
								</div>

								<div className='col-span-1  row-span-1 text-sm'>
									<h4 className='text-acento font-bold'>Total:</h4>
								</div>

								<div className='col-span-1  row-span-1 text-sm text-right'>
									<p className='text-white'>${price}</p>
								</div>
							</div>
							
						</div>
						
						
					</div>
					<div className='w-full bg-white rounded-xl'>
							<div className='w-80 bg-acento h-7 mt-13 rounded-xl	'></div>
					</div>
					<div className='text-left mt-px4'>
						<p className='text-white text-f9'>Stock</p>
					</div>
				</div>
			</div>
		</div>
	)
}
