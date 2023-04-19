




// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'


import IconCloseCancel from '../Buttons/BtnIconCloseCancel';

 



export default function CardProductConfirmMovimiento() {


    return (
        // <div className='bg-white shadow-lg rounded-xl flex justify-between p-2 w-full md:w-375 gap-x-4'>
        <div className='flex bg-white shadow-md w-408 h-40 pl-2 justify-between rounded-lg '>

            {/* ----------------------- Imagen */}
            <div className='flex items-center max-w-full min-w-max overflow-hidden mr-4'>
                <img src={oreo} alt="Producto" className='w-32'/>
            </div>

            <div className='w-full text-start'>
                <div className='text-end mr-4'>
                    <IconCloseCancel/>
                </div>
                <h3 className='mb-2'>Galleta oreo fdfdss </h3>
                <div className='flex flex-col gap-y-1'>
                    <p className=''><span className='font-bold mr-2'>Unid. Total: </span>${0}</p>
                    <p className=''><span className='font-bold mr-2'>Precio:</span>${0}</p>
                </div>

            </div>

            <div>
            </div>

          
        </div>
    )
}

