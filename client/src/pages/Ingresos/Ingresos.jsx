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
import {data} from '../../data/data'

// -------- Icons
import { FiChevronLeft } from 'react-icons/fi';


// -------- Files
import '../../index.css'
import BtnConfirmarMovimiento from '../../components/Buttons/BtnConfirmarMovimiento';
// -------- 






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







export default function Ingresos() {
	// Botón dinámico de retro para el Nav
	const iconBack = <FiChevronLeft/>


	return (
		<div className='flex'>
			<div className='relative z-50'>
				<div className='fixed top-0 '>
					<NavbarDesktop/>
				</div>
			</div>

			<div className='w-full md:ml-32'>

				<NavBar 
					iconBack={iconBack}
					navBarTile="Ingresos"
				/>

				<div className='mx-4 mt-4 md:mx-8'>
					<SectionFilter
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
									productsList = {data}
								/>
							</div>
						</div>
					</div>
					{/* <div className='hidden lg:block'>
						<SectionProductosMover/>
					</div> */}
				</div>
				
				{/* <div className='fixed bottom-0 right-0 bg-white p-4 w-full h-20 flex items-center mb-20 '> */}
				<div className=' bg-white p-4 w-full h-20 flex items-center mb-20 '>
					{/* <BtnContinuar/> */}
					<BtnConfirmarMovimiento/>
				</div>
				<NavbarMobile/>
			</div>
		</div>
	)
}