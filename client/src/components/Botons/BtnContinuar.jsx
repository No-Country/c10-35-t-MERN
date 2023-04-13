


import React from 'react'
import { Link } from 'react-router-dom'

function BtnContinuar() {
    return (
        <div className='fixed bottom-0 right-0 bg-white p-4 w-full h-20 flex items-center mb-20'>
            <Link to={'/productoMover'} type="submit" className=' bg-label rounded-md w-full py-2'>Continuar (0)</Link>
        </div>
    )
}

export default BtnContinuar
