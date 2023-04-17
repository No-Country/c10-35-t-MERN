import React from 'react'

// -------- Components
import NavBar from '../../components/NavBar/NavBar'
import CardProductConfirmMovimiento from '../../components/Cards/CardProductConfirmMovimiento';
import BtnConfirmarMovimiento from '../../components/Buttons/BtnConfirmarMovimiento';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';


// -------- Icons
import { FiChevronLeft } from 'react-icons/fi';
// -------- 




function ProductosMover() {

    // Botón dinámico de retro para el Nav
	const iconBack = <FiChevronLeft/>

    return (
        
        <>
            {/* --------------------------------- Higher Navegator */}
			<NavBar 
				iconBack={iconBack}
				navBarTile="Productos a mover"
			/>



			{/* --------------------------------- Cards de movimiento */}
			<div className='flex flex-col items-center gap-y-5 mb-2'>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
			</div>



			<BtnConfirmarMovimiento/>
			<NavbarMobile/>



        </>
    )
}

export default ProductosMover
