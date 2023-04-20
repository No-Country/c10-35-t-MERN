import React, { useState } from 'react'

// -------- Components
import NavBar from '../../components/NavBar/NavBar'
import SectionProductosMover from '../../components/Sections/SectionProductosMover';
import SectionFilter from '../../components/Sections/SectionFilter';
import SectionResumenCatTotVal from '../../components/Sections/SectionResumenCatTotVal';
import SectionCategory from '../../components/Sections/SectionCategory';
import SectionListaProductos from '../../components/Sections/SectionListaProductos';
import BtnContinuar from '../../components/Buttons/BtnContinuar';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop'


// -------- Icons
import { FiChevronLeft } from 'react-icons/fi';


// -------- Files
import '../../index.css'
import { useLocation } from 'react-router';
// -------- 





const categories = [
	{
		id: 'Vegetales',
		title: 'Vegetales',
		stock: '20',
		price: '1600',
	},
	{
		id: 'Snacks',
		title: 'Snacks',
		stock: '17',
		price: '1500',
	},
	{
		id: 'Lacteos',
		title: 'Lacteos',
		stock: '11',
		price: '1500',
	},
	{
		id: 'Limpieza',
		title: 'Limpieza',
		stock: '11',
		price: '1500',
	},
	{
		id: 'Bebidas',
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
		cost: '100',
		price: '200',
		idCategory: 'Lacteos',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
	{
		id: 1,
		title: 'Gaseosa Coca Cola',
		stock: '54',
		cost: '100',
		price: '200',
		idCategory: 'Bebidas',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
	{
		id: 1,
		title: 'Galleta Oreo',
		stock: '12',
		cost: '100',
		price: '200',
		idCategory: 'Snacks',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
	{
		id: 1,
		title: 'Jabón',
		stock: '12',
		cost: '100',
		price: '200',
		idCategory: 'Limpieza',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
	{
		id: 1,
		title: 'Gaseosa Fanta',
		stock: '12',
		cost: '100',
		price: '200',
		idCategory: 'Bebidas',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
	{
		id: 1,
		title: 'Zanahoria',
		stock: '12',
		cost: '100',
		price: '200',
		idCategory: 'Vegetales',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
]









export default function Ingresos() {

	// Botón dinámico de retro para el Nav
	const iconBack = <FiChevronLeft/>

	//Filtrar categorías
	const [filter, setFilter] = useState({
		search: '',
		category: ''
	})
	const location = useLocation()

	const idProduct = location.state === null ? 0 : location.state.idProduct


	return (
		<div className='flex'>
			<NavbarDesktop/>

			<div className='w-full'>

				<NavBar 
					iconBack={iconBack}
					navBarTile="Ingresos"
				/>

				<div className='mx-4 mt-4 md:mx-8'>
					<SectionFilter
						setFilter = {setFilter}
						filter = {{...filter}}
					/>
				</div>

				<div className='flex md:mt-5 gap-x-5 md:mx-8'>
					<div className='w-full'>
						<div className='hidden md:block'>
							<SectionResumenCatTotVal/>
						</div>
						<div className='mt-5 mx-3 md:mx-0'>
							<SectionCategory/>
						</div>
						<div className='mt-5 md:mb-10 bg-primario rounded-tl-3xl rounded-tr-120 pt-5 pb-44 md:pb-5 md:bg-white'>
							<div className='mx-3 md:mx-0'>
								<SectionListaProductos
									productsList = {products}
									filterProduct = {{...filter}}
									idProduct={idProduct}
								/>
							</div>
						</div>
					</div>
					<div className='hidden lg:block'>
						<SectionProductosMover/>
					</div>
				</div>
				
				<div className='fixed bottom-0 right-0 bg-white p-4 w-full h-20 flex items-center mb-20 lg:hidden'>
					<BtnContinuar/>
				</div>
				<NavbarMobile/>
			</div>
		</div>
	)
}