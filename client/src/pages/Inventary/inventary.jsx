import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import Navbar from '../../components/NavBar/NavBar'
import { TextBoxWithIcon } from '../../components/textBox/TextBoxWithIcon'
import { CategoryListContainer } from '../../components/CategoryProducts/CategoryListContainer'
import { ProductsContainer } from '../../components/Product/ProductsContainer'
import { RiFilter2Fill } from 'react-icons/ri'
import { CategoryData } from '../../components/CategoryCard/CategoryData'
import { BtnAddProductResponsive } from '../../components/Buttons/BtnAddProductResponsive'
import { useLocation } from 'react-router'
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop'
import { helpFetch } from '../../components/helpers/helpFetch'

const categories = [
	{
		id: 1,
		title: 'Vegetales',
		stock: '20',
		price: '1600',
	},
	{
		id: 2,
		title: 'Snacks',
		stock: '17',
		price: '1500',
	},
	{
		id: 3,
		title: 'Lacteos',
		stock: '11',
		price: '1500',
	},
	{
		id: 4,
		title: 'Limpieza',
		stock: '11',
		price: '1500',
	},
	{
		id: 5,
		title: 'Bebidas',
		stock: '11',
		price: '1500',
	},
]

const products = [
	{
		id: 1,
		title: 'Leche',
		stock: '12',
		cost: '1000',
		price: '1600',
		idCategory: 3,
		minStock: 30,
		unidades: 'Lts',
		alerta: '10',
	},
	{
		id: 2,
		title: 'Lechuga',
		stock: '10',
		cost: '10',
		price: '20',
		idCategory: 1,
		minStock: 20,
		unidades: 'unidades',
		alerta: '10',
	},
	{
		id: 3,
		title: 'Lechuga-1',
		stock: '10',
		cost: '9',
		price: '20',
		idCategory: 1,
		minStock: 10,
		unidades: 'unidades',
		alerta: '10',
	},
	{
		id: 4,
		title: 'Lechuga-2',
		stock: '10',
		cost: '8',
		price: '20',
		idCategory: 1,
		minStock: 5,
		unidades: 'unidades',
		alerta: '10',
	},
	{
		id: 5,
		title: 'Lechuga-3',
		stock: '10',
		cost: '13',
		price: '20',
		idCategory: 1,
		minStock: 7,
		unidades: 'unidades',
		alerta: '10',
	},
]

export const Inventary = () => {
	const [filter, setFilter] = useState({
		search: '',
		category: '',
	})
	const [products, setProducts] = useState([])

	const location = useLocation()

	const idProduct = location.state === null ? 0 : location.state.idProduct

	const urlGet = 'https://stocker-api.fly.dev/api/v1/products/:19'
	const urlPost = 'https://stocker-api.fly.dev/api/v1/products/update'

	// useEffect(() => {

	//  fetch(urlGet).then(res => {

	// 		if (!res.err) {
	// 			console.log(res.body)
	// 			setProducts(res)
	// 		} else {
	// 			setProducts([])
	// 		}
	// 	})

	//   }
	// , [urlGet])

	const getProducts = () => {
		helpFetch()
			.put(urlGet, {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
			.then(res => {
				setProducts(res)
			})
	}
	console.log(products)
	return (
		<div className='lg:grid lg:relative lg:relative lg:grid-cols-[130px_1fr] lg:gap-x-8'>
			<NavbarDesktop />
			<div className='flex flex-col w-full gap-5'>
				<Navbar navBarTile='Inventario' />

				<div className='grid grid-cols-6 grid-rows-1 gap-1 px-4 h-160 w-full md:grid-cols-12 md:grid-rows-2'>
					<div className='col-span-5 row-span-1 w-full h-48 md:col-span-8 xl:col-span-9'>
						<div>
							<TextBoxWithIcon setFilter={setFilter} filter={{ ...filter }} />
							<CategoryData
								categoryNumber={8}
								totalUnits={960}
								totalPrice={580000}
							/>
						</div>
					</div>

					<div className='col-span-1 row-span-1 md:col-span-1'>
						<div className='h-48 w-full flex justify-center items-center pl-3.5 pr-3 lg:w-pr10'>
							<RiFilter2Fill />
						</div>
					</div>
					<div className='hidden h-48 md:block md:row-span-1 md:col-span-3 xl:col-span-2'>
						<div className='flex justify-center items-center'>
							<BtnAddProductResponsive />
						</div>
					</div>
				</div>

				{/* 	*/}

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
					idProduct={idProduct}
				/>

				<NavbarMobile />
			</div>
		</div>
	)
}
