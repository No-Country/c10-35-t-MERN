


import React from 'react'
import { Link } from 'react-router-dom'

function BtnContinuar() {
    return (
        <div className='sticky bottom-20 left-0 z-50 flex p-2 bg-white md:hidden'>
            <Link 
                to={'/productoMover'} 
                className='bg-label py-2 w-full rounded-xl'
            >Continuar (0)</Link>
        </div>
    )
}

export default BtnContinuar
