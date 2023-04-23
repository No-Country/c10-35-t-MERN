







import React from 'react'
import { Link } from 'react-router-dom'

function ModalMovimientos() {
    return (
        <div className=' h-screen w-screen bg-black bg-opacity-80 flex items-center justify-center'>
            <div className='bg-primario h-64 w-64 rounded-xl px-4 py-6'>
                <h3 className='text-center'>¿Qué deseas registrar?</h3>
                <div className='flex flex-col'>
                    <Link to={'/egresos'} className='bg-secundario text-primario w-36 h-12 rounded-xl mx-auto flex items-center justify-center text-base mt-8'>Egresos</Link>
                    <Link to={'/ingresos'} className='bg-secundario text-primario w-36 h-12 rounded-xl mx-auto flex items-center justify-center text-base mt-8'>Ingresos</Link>
                </div>
            </div>
        </div>
    )
}

export default ModalMovimientos
