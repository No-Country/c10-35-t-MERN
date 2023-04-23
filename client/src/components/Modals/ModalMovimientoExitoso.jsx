



import React from 'react'
import { Link } from 'react-router-dom'

// -------- Icons
import iconPollo from '../../assets/pollo.png'

function ModalMovimientoExitoso() {
    return (
        <div className=' h-screen w-screen bg-black bg-opacity-80 flex items-center justify-center'>
            {/* <div className='bg-primario h-64 w-64 rounded-xl px-4 py-6'> */}
            <div className='bg-primario h-64 w-64 p-6 flex flex-col items-center justify-center gap-y-4 rounded-lg'>
                <h3 className='text-center text-acierto'>¡Movimiento exitoso!</h3>
                <img src={iconPollo} alt="icon" className='h-24 w-16'/>
                <Link 
                    to={'/inventario'} 
                    className='bg-secundario text-white block mx-auto w-36 py-2 text-center font-bold rounded-lg'
                >Aceptar</Link>
            </div>
        </div>
    )
}

export default ModalMovimientoExitoso
