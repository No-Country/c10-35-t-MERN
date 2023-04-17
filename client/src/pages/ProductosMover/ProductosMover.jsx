

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
			<div className='p-4 mb-40'>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
				<CardProductConfirmMovimiento/>
			</div>



			{/* --------------------------------- Btn Confirmar movimiento */}
			<div className='fixed bottom-0 right-0 bg-white p-4 w-full h-20 flex items-center mb-20'>
				<BtnConfirmarMovimiento/>
			</div>



			{/* --------------------------------- Lower Navegator */}
			<NavbarMobile/>

        </>
    )
}

export default ProductosMover
