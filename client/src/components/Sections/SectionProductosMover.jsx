



import React from 'react'
import BtnConfirmarMovimiento from '../Buttons/BtnConfirmarMovimiento'
import CardProductConfirmMovimiento from '../Cards/CardProductConfirmMovimiento'

function SectionProductosMover() {
    return (
        // <div className='bg-primario p-4 w-1/3 rounded-lg'>
        //     <h2 className='py-4'>Productos a mover</h2>
        <div className='bg-primario rounded-xl'>
            <h2 className='py-4'>Productos a mover</h2>
            <div className='px-4 flex flex-col gap-y-5'>
                <CardProductConfirmMovimiento/>
                <CardProductConfirmMovimiento/>
                <CardProductConfirmMovimiento/>
                <CardProductConfirmMovimiento/>
            </div>

            <div className='w-80 mx-auto py-8'>
                <BtnConfirmarMovimiento/>
            </div>
        </div>
    )
}

export default SectionProductosMover
