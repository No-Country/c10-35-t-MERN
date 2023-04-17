




import React from 'react'
import { Link } from 'react-router-dom'

function BtnIconAddProduct() {
    return (
        <Link 
            to={'/crear-producto'} 
            className='bg-acento w-14 h-14 rounded-full flex justify-center items-center text-white text-5xl font-bold md:hidden'
        >+</Link>
    )
}

export default BtnIconAddProduct
