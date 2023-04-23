import React from 'react'
import { Link } from 'react-router-dom'



import { BiPlusMedical } from 'react-icons/bi';





function BtnIconAddProduct() {
    return (
        <Link 
            to={'/crear-producto'} 
            className='bg-acento w-60 h-60 rounded-full flex items-center justify-center text-white text-3xl font-bold md:hidden'
        >
            <BiPlusMedical/>
        </Link>
    )
}

export default BtnIconAddProduct
