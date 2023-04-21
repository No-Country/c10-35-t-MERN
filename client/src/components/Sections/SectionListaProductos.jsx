


import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai';

import CardProductCountMobile from '../Cards/CardProductCountMobile'
import BtnIconAddProduct from '../Buttons/BtnIconAddProduct';

function SectionListaProductos({productsList, filterProduct, idProduct}) {

    console.log(productsList)
    
    return (
        <>
            {/* ----- Titulo y boton + */}
            <div className='flex justify-between mb-6'>
                <div>
                    <h2 className='flex start'>Lista de productos:</h2>
                    <p className='flex items-center gap-2'>Orden de ingreso <AiFillCaretDown/> </p>
                </div>

            {/* <BtnIconAddProduct/> */}
            </div>
            
            {productsList.map((product, i) => {
                return(
                    <div className='flex flex-col '>
                        <CardProductCountMobile
                            product = {product}
                            key={i}
                        />
                    </div>
                )
            })}

        </>
    )
}

export default SectionListaProductos
