
// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'


 

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



            <div className='flex flex-col gap-2 justify-around'>
                <h3>Galleta Oreo Mobile </h3>
                <div>
                    <div className='flex gap-x-3 justify-end mb-2'>
                        <button onClick={decrement} className='bg-secundario text-white h-8 w-8 rounded-full font-bold text-3xl flex justify-center items-center'>-</button>
                        <input type="number" value={valor} onChange={handleInput} className='bg-primario text-center rounded-lg w-24'/>
                        <button onClick={increment} className='bg-secundario text-white h-8 w-8 rounded-full font-bold text-3xl flex justify-center items-center'>+</button>
                    </div>
                    <p className='flex justify-end'><span className='font-bold mr-2'>Total:</span>${valor}</p>
                </div>
            </div>



            
        </div>
    )
}

