import React from 'react'
import { BtnAddProduct } from '../Buttons/BtnAddProduct'
import { ProductStockCard } from './ProductStockCard'
import { RiArrowDownSFill } from 'react-icons/ri';

export const ProductsContainer = ({ productsList, filterProduct }) => {
	const filteredProduct = () => {
		return productsList
			.filter(product => {
				if (filterProduct.search === '') return product
				return product.title
					.toLowerCase()
					.includes(filterProduct.search.toLowerCase().trim())
			})
			.filter(product => {
				if (filterProduct.category === '') return product
				return product.idCategory === filterProduct.category
			})
	}

	return (
		<div className='w-full bg-primario pb-24 px-18 rounded-tl-24 rounded-tr-120 md:bg-white md:pb-0'>
			<div className='w-full flex justify-between'>
				<div className='mt-22'>
					<div>
						<h2 className='w-full text-secundario'>Lista de productos</h2>
					</div>
					<div className='flex h-w24 items-center mt-23 mb-49'>
						<div className='h-full'>
							<p className='w-full text-secundario text-left text-f14'>
								Orden de ingreso
							</p>
						</div>
						<div className='flex items-center w-w24 h-w24 ml-4 '>
							<RiArrowDownSFill className='text-secundario '/>
						</div>
					</div>
				</div>
				<div className='mt-23 mb-49 md:hidden'>
					<BtnAddProduct />
				</div>
			</div>

			<div className='w-full'>
				{filteredProduct().map((product, i) => {
					return (
						<ProductStockCard
							key={product.id}
							title={product.title}
							price={product.price}
							stock={product.stock}
							type={i === 0 ? 1 : 0}
						/>
					)
				})}
			</div>
		</div>
	)
}
