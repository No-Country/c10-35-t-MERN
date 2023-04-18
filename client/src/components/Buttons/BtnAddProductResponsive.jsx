import React from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';



export const BtnAddProductResponsive = () => {
  return (

    <button className='w-212 h-48 bg-secundario rounded-12 flex justify-center items-center hover:bg-secundario ' >
        <div className='flex text-white gap-w24'>
        <IoMdAddCircleOutline className='w-w24 h-w24'/>
          <p>Crear producto</p>
        </div>
    </button>
  )
}
