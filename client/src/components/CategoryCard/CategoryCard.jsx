import React from 'react'
import verdura from '../../assets/verdura.png'

export const CategoryCard = ({title, price, stock}) => {
	return (
		<div className='h-44 w-36 border-2 rounded-3xl bg-secundario p-3'>
			<div className='w-full h-full flex justify-center items-center flex-col gap-2'>
				
			<div className='w-full'>
				<h3 className='text-xl text-acento'>{title}</h3>
			</div>	
			
			<div>
				<img src={verdura} alt="img"/>
			</div>

			

			<div className='w-full grid grid-cols-3 grid-rows-2 gap-1 '>
				<div className='col-span-1 row-span-1 text-sm'>
					<h5 className='text-acento font-bold'>Und:</h5>
				</div>

				<div className='col-span-2 row-span-1 text-sm'>
					<h5 className='text-white font-bold'>{stock}</h5>
				</div>

				<div className='col-span-1  row-span-1 text-sm'>
					<h5 className='text-acento font-bold'>Total:</h5>
				</div>

				<div className='col-span-2  row-span-1 text-sm'>
					<h5 className='text-white font-bold'>${price}</h5>
				</div>
			</div>
			</div>
		</div>
	)
}
