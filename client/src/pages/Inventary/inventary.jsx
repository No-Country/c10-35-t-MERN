import React, { useState } from 'react'

import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import Navbar from '../../components/NavBar/NavBar'
import { TextBoxWithIcon } from '../../components/textBox/TextBoxWithIcon'
import { CategoryListContainer } from '../../components/CategoryProducts/CategoryListContainer'
import { ProductsContainer } from '../../components/Product/ProductsContainer'
import { RiFilter2Fill } from 'react-icons/ri'
import { CategoryData } from '../../components/CategoryCard/CategoryData'

const categories = [
	{
		id: 1,
		title: 'Verduras',
		stock: '12',
		price: '1600',
	},
	{
		id: 2,
		title: 'Bebidas',
		stock: '13',
		price: '1500',
	},
]

const products = [
	{
		id: 1,
		title: 'Leche',
		stock: '12',
		price: '1600',
		idCategory: 2,
	},
	{
		id: 2,
		title: 'Lechuga',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
	{
		id: 3,
		title: 'Lechuga-1',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
	{
		id: 4,
		title: 'Lechuga-2',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
	{
		id: 5,
		title: 'Lechuga-3',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
]

export const Inventary = () => {
	const [filter, setFilter] = useState({
		search: '',
		category: '',
	})

	return (
		<div className='flex flex-col w-full gap-5'>
			<Navbar navBarTile='Inventario' />

			<div className='flex px-4 w-full'>
				<div className='w-full'>
					<TextBoxWithIcon setFilter={setFilter} filter={{ ...filter }} />
					<CategoryData categoryNumber={8} totalUnits={960} totalPrice={580000}/>
				</div>
				<div className='h-48  flex justify-center items-center pl-3.5 pr-3'>
					<RiFilter2Fill />
				</div>
			</div>

			<h2 className='w-full text-left ml-4 text-secundario'>Categorías</h2>
			<CategoryListContainer
				categoriesList={categories}
				setFilter={setFilter}
				filter={{ ...filter }}
			/>

			<ProductsContainer
				productsList={products}
				filterProduct={{ ...filter }}
			/>

			<NavbarMobile />
		</div>
	)
}
