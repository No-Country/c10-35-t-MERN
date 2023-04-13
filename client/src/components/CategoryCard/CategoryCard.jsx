import React from 'react'
import verdura from '../../assets/verdura.png'
import verdura0 from '../../assets/verdura-0.png'

export const CategoryCard = ({title, price, stock, type}) => {
	
	const bgColorCard = type===1? 'bg-secundario': 'white';
	const textColor = type===1? 'text-white':'text-secundario';
	const colorTitle = type===1? 'text-acento':'text-secundario';


	return (
		<div className={`${bgColorCard} h-44 w-36 border-2 rounded-3xl p-3`}>
			<div className='w-full h-full flex justify-center items-center flex-col gap-2'>
				
			<div className='w-full'>
				<h3 className={`text-xl ${colorTitle}`}>{title}</h3>
			</div>	
			
			<div>
				<img src={type===1? verdura : verdura0} alt="img"/>
			</div>

			

			<div className='w-full grid grid-cols-3 grid-rows-2 gap-1 '>
				<div className='col-span-1 row-span-1 text-sm'>
					<h5 className='text-acento font-bold'>Und:</h5>
				</div>

				<div className='col-span-2 row-span-1 text-sm'>
					<p className={`font-bold ${textColor}`}>{stock}</p>
				</div>

				<div className='col-span-1  row-span-1 text-sm'>
					<h5 className='text-acento font-bold'>Total:</h5>
				</div>

				<div className='col-span-2  row-span-1 text-sm'>
					<p className={`font-bold ${textColor}`}>${price}</p>
				</div>
			</div>
			</div>
		</div>
	)
}
