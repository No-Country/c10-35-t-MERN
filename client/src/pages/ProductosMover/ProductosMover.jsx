

import React from 'react'

// -------- Components
import BtnContinuar from '../../components/Botons/BtnContinuar';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';
import BtnConfirmarMovimiento from '../../components/Botons/BtnConfirmarMovimiento';
import ProductConfirmarMovimi from '../../components/ProductCount/ProductConfirmarMovimi';
import NavBar from '../../components/NavBar/NavBar'


// -------- Icons
import { FiChevronLeft } from 'react-icons/fi';





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

			<div className='p-4 mb-40'>
				<ProductConfirmarMovimi/>
				<ProductConfirmarMovimi/>
				<ProductConfirmarMovimi/>
				<ProductConfirmarMovimi/>
				<ProductConfirmarMovimi/>

			</div>



			{/* --------------------------------- Btn Confirmar movimiento */}
			<BtnConfirmarMovimiento/>



			{/* --------------------------------- Lower Navegator */}
			<NavbarMobile/>

        </>
    )
}

export default ProductosMover
