


import React, { useState } from 'react'
import { Link } from 'react-router-dom';


// -------- Components
import NavBar from '../../components/NavBar/NavBar'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import ProductCount from '../../components/ProductCount/ProductCount';
import ProductConfirmarMovimi from '../../components/ProductCount/ProductConfirmarMovimi';
import { CategoryCardFilter } from '../../components/CategoryCard/CategoryCardFilter';
import BtnContinuar from '../../components/Botons/BtnContinuar';


// -------- Icons
import { AiFillCaretDown } from 'react-icons/ai';
import { HiOutlineFilter } from 'react-icons/hi';
import { FiChevronLeft } from 'react-icons/fi';


// -------- Files
import '../../index.css'
import { CategoryListContainer } from '../../components/CategoryProducts/CategoryListContainer';
import BtnConfirmarMovimiento from '../../components/Botons/BtnConfirmarMovimiento';


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



export default function Ingresos() {

	// Botón dinámico de retro para el Nav
	const iconBack = <FiChevronLeft/>

		const [filter, setFilter] = useState({
			search: '',
			category: '',
		})


	return (
		<>
			{/* --------------------------------- Higher Navegator */}
			<NavBar 
				iconBack={iconBack}
				navBarTile="Ingresos"
			/>


			{/* --------------------------------- Filtros */}
			<div className='flex justify-between items-center p-4'>
				<input type="text" placeholder={`Buscar productos`} className='w-full border h-10 px-4 border-black rounded-lg '/>
				<div className='ml-4 '><HiOutlineFilter className='text-xl'/></div>
			</div>


			<div className='flex'>



				<div className='w-full '>





					{/* --------------------------------- Resumen */}
					<div className='hidden md:flex justify-around items-center bg-primario mx-4 rounded-lg h-10'>
						<h3>Categorías: {4} </h3>
						<h3>Total unidades: {1200} unds.</h3>
						<h3>Valor total: $ {`58,000`}</h3>
					</div>




					{/* --------------------------------- Categorías */}
					<div>
						<h2 className='flex start p-4'>Categorías</h2>
						<div className='flex gap-x-4 p-4'>
							<div className='md:hidden'>
								<CategoryCardFilter/>
							</div>
							<div className='hidden md:block'>
								<CategoryListContainer categoriesList={categories} setFilter={setFilter} filter={{ ...filter }}/>
							</div>
						</div>
					</div>



					{/* --------------------------------- Lista de productos */}
					<div className='bg-primario py-6 px-4 mt-6 rounded-tl-3xl rounded-tr-3xl mb-20 md:mb-0 md:bg-white'>
						<div className='flex justify-between mb-6'>
							<div className='flex flex-col'>
								<h2 className='flex start'>Lista de productos:</h2>
								<p className='flex items-center gap-2'>Orden de ingreso <AiFillCaretDown/> </p>
							</div>
							<Link to={'/crear-producto'} className='w-14 h-14 rounded-full flex justify-center text-5xl font-medium bg-acento text-white md:hidden'>+</Link>
						</div>

						<div className='flex flex-col gap-y-4'>
							<ProductCount/>
							<ProductCount/>
							<ProductCount/>
							<ProductCount/>
						</div>
					</div>
				</div>



				{/* --------------------------------- Productos cargados */}
				<div className='bg-primario p-4 hidden md:block w-1/3 rounded-lg'>
					<h2 className='py-4'>Productos cargados</h2>

					
					<ProductConfirmarMovimi/>
					<ProductConfirmarMovimi/>
					<ProductConfirmarMovimi/>



					<BtnConfirmarMovimiento/>
				</div>
			</div>




			{/* --------------------------------- Btn Confirmar movimiento */}
			<BtnContinuar/>



			{/* --------------------------------- Lower Navegator */}
			<NavbarMobile/>










		</>
	)
}

