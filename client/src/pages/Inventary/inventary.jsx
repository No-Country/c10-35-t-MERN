import React from 'react'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { ProductStockCard } from '../../components/ProductStockCard/ProductStockCard'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import Navbar from '../../components/NavBar/NavBar'

const categories = [
	{
		id: 1,
		title: 'Bebidas',
		stock: '12',
		price: '16000',
	},
	{
		id: 2,
		title: 'Bebidas',
		stock: '13',
		price: '15000',
	},
]

export const Inventary = () => {
	return (
		<div className='flex flex-col w-full gap-5'>
			<Navbar navBarTile='Inventario' />
			<h2>Categorías</h2>

			<div className='flex w-full'>
				{categories.map((category, i) => {
					return (
						<CategoryCard
							key={category.id}
							title={category.title}
							price={category.price}
							stock={category.stock}
							type={i === 0 ? 1 : 0}
						/>
					)
				})}
			</div>

			<div className='w-full bg-primario'>
				<div className='w-full'>
					<h2 className='w-full'>Lista de productos</h2>
				</div>

				<div className='w-full'>
					<ProductStockCard />
				</div>
			</div>

			<NavbarMobile />
		</div>
	)
}
