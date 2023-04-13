
// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'


 

export default function ProductCount() {

    // Función insertar valor
    const [valor, setValor] = useState(0)
    const handleInput = (e) => {
        e.preventDefault()
        const valorInsert = e.target.value
        setValor(parseInt(valorInsert))
    }
    const decrement = () => {
        setValor(valor - 1)
    }
    const increment = () => {
        setValor(valor + 1)
    }
    


    return (
        <div className='flex justify-between h-40 bg-white shadow-2xl rounded-xl p-4 gap-x-4'>

            {/* ----------------------- Imagen */}
            <div className='flex items-center max-w-full overflow-hidden'>
                <img src={oreo} alt="Producto" className='w-32'/>
            </div>



            {/* ----------------------- Datos */}
            <div className='flex flex-col items-start justify-center gap-y-2'>
                <h3>Galleta oreo</h3>
                <div className='flex gap-x-3'>
                    <button onClick={decrement} className='bg-secundario text-white h-12 w-12 rounded-full text-4xl flex items-center justify-center'>-</button>
                    <input type="number" value={valor} onChange={handleInput} className='bg-primario w-28 text-center rounded-lg'/>
                    <button onClick={increment} className='bg-secundario text-white h-12 w-12 rounded-full text-4xl flex items-center justify-center'>+</button>
                </div>
                <p><span className='font-medium'>Total: </span>${valor}</p>
            </div>
        </div>
    )
}

