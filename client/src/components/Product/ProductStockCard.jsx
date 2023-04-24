/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import leche from '../../assets/leche.png'
import { RiEdit2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const ProductStockCard = ({
	id,
	product_name,
	stock,
	cost,
	price,
	categoryId,
	type,
	minimum_stock,
	units,	
	image
}) => {
	const bgColorCard = type === 1 ? 'bg-acento2' : 'bg-white'
	const textColor = type === 1 ? 'text-white' : 'text-secundario'
	const textoColorSecondary = type === 1 ? 'text-acento' : 'text-secundario'
	const iconColor = type === 1 ? 'text-acento' : 'text-secundario'
	const barColor = type === 1 ? 'bg-white' : 'bg-acento2_10'
	
	return (
		<div className='w-full h-36'>
			<div
				className={`${bgColorCard} w-full h-130 shadow-sombra rounded-3xl  px-19 pt-4 pb-13`}
			>
				<div className='flex-row'>
					<div className='w-full flex gap-7 items-center justify-center h-full flex-column'>
						<img src={image} alt='imagen' className='object-cover w-85 h-62' />
						<div className='w-full h-62 flex flex-col justify-between'>
							<div className='flex justify-between w-full text-left'>
								<h3 className={`font-bold text-xl w-full ${textColor}`}>
									{product_name}
								</h3>
								<Link
									state={{
										id,
										product_name,
										stock,
										cost,
										price,
										units,
										categoryId,
										minimum_stock,
										image
										
									}}
									to={'/modificar-productos'}
								>
									<div className={`text-f20 ${iconColor}`}>
										<RiEdit2Line />
									</div>
								</Link>
							</div>

							<div className='w-full grid grid-cols-4 grid-rows-1 gap-1 lg:grid-cols-12'>
								<div className='col-span-1 row-span-1 text-sm text-left'>
									<h4
										className={`${textoColorSecondary} font-bold h-full lg:hidden`}
									>
										Und:
									</h4>
									<h4
										className={`${textoColorSecondary} font-bold h-full hidden lg:block`}
									>
										Stock:
									</h4>
								</div>

								<div className='col-span-1 row-span-1 text-sm'>
									<div className='flex h-full justify-center items-center'>
										<p className={`${textColor}`}>{stock}</p>
									</div>
								</div>

								<div className='col-span-1  row-span-1 text-sm'>
									<h4 className={`${textoColorSecondary} font-bold`}>Total:</h4>
								</div>

								<div className='col-span-1  row-span-1 text-sm '>
									<div className='flex h-full justify-center items-center '>
										<p className={`${textColor}`}>${price}</p>
									</div>
								</div>

								<div className='col-span-1  row-span-1 text-sm hidden lg:block'>
									<h4 className={`${textoColorSecondary} font-bold`}>
										Categoría:
									</h4>
								</div>

								<div className='col-span-2  row-span-1 text-sm hidden lg:block'>
									<div className='flex h-full justify-center items-center'>
										<p className={`${textColor}`}>{categoryId}</p>
									</div>
								</div>

								<div className='col-span-2  row-span-1 text-sm hidden lg:block'>
									<h4 className={`${textoColorSecondary} font-bold`}>
										Stock mínimo:
									</h4>
								</div>

								<div className='col-span-1  row-span-1 text-sm hidden lg:block'>
									<div className='flex h-full justify-center items-center'>
										<p className={`${textColor}`}>{minimum_stock}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`w-full rounded-xl ${barColor} lg:w-pr50`}>
						<div className='w-80 bg-acento h-w7 mt-13 rounded-xl	'></div>
					</div>
					<div className='text-left mt-px4'>
						<p className={`${textColor} text-f9`}>Stock</p>
					</div>
				</div>
			</div>
		</div>
	)
}
