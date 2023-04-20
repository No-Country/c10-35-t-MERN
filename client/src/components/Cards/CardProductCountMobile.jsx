
// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'

import { BiPlusMedical } from 'react-icons/bi';
import { ImMinus } from 'react-icons/im';
import BtnCargar from '../Buttons/BtnCargar';

 

export default function CardProductCountMobile() {

    // Función insertar valor
    const [valor, setValor] = useState(0)
    const handleInput = (e) => {
        e.preventDefault()
        const valorInsert = e.target.value
        setValor(parseInt(valorInsert))
    }

    const increment = () => {
        setValor(valor + 1)
    }
    
    const decrement = () => {
        setValor(valor - 1)
    }        


    return (
        <div className='flex bg-white shadow-md h-40 p-3 gap-x-4 justify-between rounded-lg'>


            <div className='flex items-center max-w-full min-w-max overflow-hidden'>
                <img src={oreo} alt="Producto" className='w-32'/>
            </div>




            <div className='flex flex-col justify-center md:flex-row md:justify-between items-center w-full'>


                <div className='w-full flex flex-col items-end md:items-start mb-4 md:mb-0'>
                    <h3 className=''>Galleta Oreo</h3>
                    <div className='flex justify-end md:justify-between w-full'>
                        <p className='hidden md:block'><span className='font-bold mr-2'>Total:</span>$ {valor}</p>
                        <p className=''><span className='font-bold mr-2'>Total unid:</span>{valor}</p>
                    </div>
                </div>


                <div className='w-full flex justify-end md:flex-col md:items-end'>
                    <div className='flex'>
                        <button onClick={decrement} className='bg-secundario text-white h-8 w-8 rounded-full font-bold text-xl flex justify-center items-center md:mt-7'><ImMinus/></button>
                        <div className=''>
                            <p className='font-bold mb-1 hidden md:block'>Ingresos</p>
                            <input type="number" value={valor} onChange={handleInput} className='bg-primario text-center rounded-lg w-24 mx-2 py-1'/>
                        </div>
                        <button onClick={increment} className='bg-secundario text-white h-8 w-8 rounded-full font-bold text-xl flex justify-center items-center md:mt-7'><BiPlusMedical/></button>
                    </div>
                    <div className='hidden w-24 md:flex md:mr-10 md:mt-2'>
                        <BtnCargar/>
                    </div>
                </div>
            </div>



        </div>
    )
}
