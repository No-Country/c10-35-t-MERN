




// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'


import IconCloseCancel from '../Buttons/BtnIconCloseCancel';

 



export default function CardProductConfirmMovimiento() {


    return (
        // <div className='flex justify-between h-40 bg-white shadow-md rounded-xl p-4 gap-x-4 w-375'>
        <div className='bg-white shadow-lg rounded-xl flex justify-between p-2 w-375'>

            {/* ----------------------- Imagen */}
            <div className='flex items-center max-w-full overflow-hidden'>
                <img src={oreo} alt="Producto" className='w-32'/>
            </div>

            <div className='flex flex-col justify-around'>
                <h3>Galleta oreo fdfds </h3>
                <div className='flex flex-col items-end'>
                    <p><span className='font-medium'>Unid. Total: </span>${0}</p>
                    <p><span className='font-medium'>Precio: </span>${0}</p>
                </div>
            </div>

            <div>
                <IconCloseCancel/>
            </div>

          
        </div>
    )
}

