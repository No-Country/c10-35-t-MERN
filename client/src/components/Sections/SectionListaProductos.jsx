


import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai';

import CardProductCountMobile from '../Cards/CardProductCountMobile'
import CardProductCountDesktop from '../Cards/CardProductCountDesktop';
import BtnIconAddProduct from '../Buttons/BtnIconAddProduct';

function SectionListaProductos() {
    return (
        <>
            {/* ----- Titulo y boton + */}
            <div className='flex justify-between mb-6'>
                <div>
                    <h2 className='flex start'>Lista de productos:</h2>
                    <p className='flex items-center gap-2'>Orden de ingreso <AiFillCaretDown/> </p>
                </div>

                <BtnIconAddProduct/>
            </div>


            {/* ----- Cards */}
            <div className='flex flex-col gap-y-5 md:hidden'>
                <CardProductCountMobile/>
                <CardProductCountMobile/>
                <CardProductCountMobile/>
                <CardProductCountMobile/>
                <CardProductCountMobile/>
            </div>
            <div className='hidden md:flex flex-col gap-y-5 '>
                <CardProductCountDesktop/>
                <CardProductCountDesktop/>
                <CardProductCountDesktop/>
                <CardProductCountDesktop/>
                <CardProductCountDesktop/>
            </div>
        </>
    )
}

export default SectionListaProductos
