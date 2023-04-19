


import React from 'react'

// -------- Components
import NavBar from '../../components/NavBar/NavBar'
import SectionProductosMover from '../../components/Sections/SectionProductosMover';
import SectionFilter from '../../components/Sections/SectionFilter';
import SectionResumenCatTotVal from '../../components/Sections/SectionResumenCatTotVal';
import SectionCategory from '../../components/Sections/SectionCategory';
import SectionListaProductos from '../../components/Sections/SectionListaProductos';
import BtnContinuar from '../../components/Buttons/BtnContinuar';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'


// -------- Icons
import { FiChevronLeft } from 'react-icons/fi';


// -------- Files
import '../../index.css'
// -------- 



export default function Ingresos() {

	// Botón dinámico de retro para el Nav
	const iconBack = <FiChevronLeft/>


	return (
		<>
			<NavBar 
				iconBack={iconBack}
				navBarTile="Egresos"
			/>

			<div className='mx-8'>
				<SectionFilter/>
			</div>

			<div className='flex md:mt-5 gap-x-5 md:mx-8'>
				<div className='w-full'>
					<div className='hidden md:block'>
						<SectionResumenCatTotVal/>
					</div>
					<div className='mt-5 mx-3 md:mx-0'>
						<SectionCategory/>
					</div>
					<div className='mt-5 mb-2 bg-primario rounded-3xl pt-5 md:bg-white'>
						<div className='mx-3 md:mx-0'>
							<SectionListaProductos/>
						</div>
					</div>
				</div>
				<div className='hidden md:block'>
					<SectionProductosMover/>
				</div>
			</div>
			
			<BtnContinuar/>
			<NavbarMobile/>
		</>
	)
}

