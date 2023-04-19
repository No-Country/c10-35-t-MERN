



import React from 'react'

import BtnIconFilter from '../Buttons/BtnIconFilter'



function SectionFilter() {
    return (
        <div className='flex gap-x-4'>
            <input type="text" placeholder={`Buscar productos`} className='border border-black w-full py-1 px-4 rounded-lg'/>
            <BtnIconFilter/>
        </div>
    )
}

export default SectionFilter
