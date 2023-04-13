




// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'


import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';

 



export default function ProductConfirmarMovimi() {


    return (
        <div className='flex justify-between h-40 bg-white shadow-2xl rounded-xl p-4 gap-x-4 mb-4'>

            {/* ----------------------- Imagen */}
            <div className='flex items-center max-w-full overflow-hidden'>
                <img src={oreo} alt="Producto" className='w-32'/>
            </div>


            {/* ----------------------- Datos */}
            <div className='flex flex-col items-start justify-center gap-y-2'>
                <h3>Galleta oreo</h3>
        
                <p><span className='font-medium'>Unid. Total: </span>${0}</p>
                <p><span className='font-medium'>Precio: </span>${0}</p>
            </div>

            {/* ----------------------- Iconos */}
            <div className='flex flex-col justify-center gap-y-10'>
                <RiDeleteBinLine className='text-2xl text-error'/>
                <BiEditAlt className='text-2xl'/>
            </div>
        </div>
    )
}

