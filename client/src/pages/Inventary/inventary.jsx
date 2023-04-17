import React, { useState } from 'react'

import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import Navbar from '../../components/NavBar/NavBar'
import { TextBoxWithIcon } from '../../components/textBox/TextBoxWithIcon'
import { CategoryListContainer } from '../../components/CategoryProducts/CategoryListContainer'
import { ProductsContainer } from '../../components/Product/ProductsContainer'
import { RiFilter2Fill } from 'react-icons/ri'
import { CategoryData } from '../../components/CategoryCard/CategoryData'
import { BtnAddProduct } from '../../components/Buttons/BtnAddProduct'

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

			<div className='grid grid-cols-6 grid-rows-1 gap-1 px-4 w-full'>
				<div className='col-span-5 row-span-1 w-full h-48 lg:w-pr80'>
					<TextBoxWithIcon setFilter={setFilter} filter={{ ...filter }} />
					<CategoryData
						categoryNumber={8}
						totalUnits={960}
						totalPrice={580000}
					/>
				</div>
				<div className='col-span-1 row-span-1'>
					<div className='h-48 w-full flex justify-center items-center pl-3.5 pr-3 lg:w-pr10'>
						<RiFilter2Fill />
					</div>
				</div>

				<div className='hidden lg:block '>
					<BtnAddProduct />
				</div>
			</div>

			<div className='ml-4'>
				<h2 className='w-full text-left  text-secundario'>Categorías</h2>
			</div>

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
