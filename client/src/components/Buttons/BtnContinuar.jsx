



import React from 'react'
import { Link } from 'react-router-dom'

function BtnContinuar() {
    return (
        <Link to={'/productoMover'} type="submit" className=' bg-label rounded-md w-full py-2'>Continuar (0)</Link>
    )
}

export default BtnContinuar