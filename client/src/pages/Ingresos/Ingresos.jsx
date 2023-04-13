


import React, { useState } from 'react'
import { Link } from 'react-router-dom';


// -------- Components
import NavBar from '../../components/NavBar/NavBar'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import ProductCount from '../../components/ProductCount/ProductCount';
import { CategoryCardFilter } from '../../components/CategoryCard/CategoryCardFilter';
import BtnContinuar from '../../components/Botons/BtnContinuar';


// -------- Icons
import { AiFillCaretDown } from 'react-icons/ai';
import { HiOutlineFilter } from 'react-icons/hi';
import { FiChevronLeft } from 'react-icons/fi';


// -------- Files
import '../../index.css'





export default function Ingresos() {

	// Botón dinámico de retro para el Nav
	const iconBack = <FiChevronLeft/>



	return (
		<>
			{/* --------------------------------- Higher Navegator */}
			<NavBar 
				iconBack={iconBack}
				navBarTile="Ingresos"
			/>


			{/* --------------------------------- Filtros */}
			<div className='flex justify-between items-center p-4'>
				<input type="text" placeholder='Buscar items' className='w-full'/>
				<div className='ml-4 '><HiOutlineFilter className='text-xl'/></div>
			</div>



			{/* --------------------------------- Categorías */}
			<div>
				<h2 className='flex start p-4'>Categorías</h2>
				<div className='flex gap-x-4 p-4'>
					<button type="submit" className='px-7 py-2 text-base shadow-xl rounded-xl bg-secundario text-acento'>Lácteos</button>
					<CategoryCardFilter/>
					<CategoryCardFilter/>
				</div>
			</div>



			{/* --------------------------------- Lista de productos */}
			<div className='bg-primario py-6 px-4 mt-6 rounded-tl-3xl rounded-tr-3xl mb-40'>
				<div className='flex justify-between mb-6'>
					<div className='flex flex-col'>
						<h2 className='flex start'>Lista de productos:</h2>
						<p className='flex items-center gap-2'>Orden de ingreso <AiFillCaretDown/> </p>
					</div>
					<Link to={'/crear-producto'} className='w-14 h-14 rounded-full flex justify-center text-5xl font-medium bg-acento text-white'>+</Link>
				</div>

				<div className='flex flex-col gap-y-4'>
					<ProductCount/>
					<ProductCount/>
					<ProductCount/>
					<ProductCount/>
				</div>
			</div>




			{/* --------------------------------- Btn Confirmar movimiento */}
			<BtnContinuar/>



			{/* --------------------------------- Lower Navegator */}
			<NavbarMobile/>










		</>
	)
}

