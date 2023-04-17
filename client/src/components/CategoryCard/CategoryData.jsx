import React from 'react'

export const CategoryData = ({categoryNumber, totalUnits, totalPrice}  ) => {
  return (
    <div className='text-secundario invisible font-bold flex gap-45 mt-24 lg:visible'>
        <div>Categorías: {categoryNumber}</div>
        <div>Total unidades: {totalUnits}</div>
        <div>Valor total: ${totalPrice}</div>
    </div>
  )
}
