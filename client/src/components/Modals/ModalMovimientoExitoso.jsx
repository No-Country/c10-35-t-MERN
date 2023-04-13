



import React from 'react'
import { Link } from 'react-router-dom'

// -------- Icons
import { BsCheck2Square } from 'react-icons/bs';

function ModalMovimientoExitoso() {
    return (
        <div className=' h-screen w-screen bg-black bg-opacity-80 flex items-center justify-center'>
            <div className='bg-primario h-64 w-64 rounded-xl px-4 py-6'>
                <h3 className='text-center text-acierto'>¡Movimiento exitoso!</h3>
                <div className='flex justify-center mt-6'>
                    <BsCheck2Square className='text-7xl'/>
                </div>
                <div className='flex flex-col'>
                    <Link 
                        to={'/inventario'} 
                        className='bg-secundario text-primario w-36 h-12 rounded-xl mx-auto flex items-center justify-center text-base mt-8'
                    >Aceptar</Link>
                </div>
            </div>
        </div>
    )
}

export default ModalMovimientoExitoso
