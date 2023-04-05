import React from 'react'
import { CategoryCard } from '../components/CategoryCard/CategoryCard'
import { ProductStockCard } from '../components/ProductStockCard/ProductStockCard'
import TextBobxLg from '../components/textBox/TextBoxLg'

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
		<div className='flex flex-col bg-orange-400 w-full'>
			<h2>Categorías</h2>
            
			<div className='flex'>
				{categories.map(category => {
					return (
						<CategoryCard
							title={category.title}
							price={category.price}
							stock={category.stock}
						/>
					)
				})}
			</div>
            <h2 className='w-full'>Lista de productos</h2>
            <div>
                <ProductStockCard />
            </div>

		</div>
	)
}
