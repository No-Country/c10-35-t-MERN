



import React from 'react'

import BtnIconFilter from '../Buttons/BtnIconFilter'
import { CiSearch } from 'react-icons/ci'



function SectionFilter() {
    return (
        <div className='flex gap-x-4'>

            <div className='relative w-full'>
                <CiSearch className='w-6 h-6 absolute top-2 left-2 '/>
                <input type="text" placeholder={`Buscar productos`} className='border border-black w-full py-2 pl-10 rounded-lg'/>
            </div>
                <BtnIconFilter/>
        </div>
    )
}

export default SectionFilter





