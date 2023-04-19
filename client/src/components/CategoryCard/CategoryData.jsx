import React from 'react'

export const CategoryData = ({categoryNumber, totalUnits, totalPrice}  ) => {
  return (
    <div className='text-secundario hidden font-bold mt-w24  md:flex gap-45'>
        <div>Categorías: {categoryNumber}</div>
        <div>Total unidades: {totalUnits}</div>
        <div>Valor total: ${totalPrice}</div>
    </div>
  )
}
