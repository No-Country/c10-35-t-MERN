


// -------- Dependencies
import React, { useState } from 'react'

// -------- Images
import oreo from '../../assets/oreo.jpeg'
import BtnIconTrash from '../Buttons/BtnIconTrash'
import BtnCargar from '../Buttons/BtnCargar'


 

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



            <div className='w-full mx-4 flex flex-col justify-between py-4'>
                <h3 className='mb-2'>Galleta Oreo Desktop</h3>
                <div className='flex justify-around'>

                    <p className='font-bold'>Total: <span className='font-normal'>$ {54303}</span></p>
                    <div>
                        <p className='font-bold mb-2'>Stock Total: <span className='font-normal'>{valor}</span></p>
                        <div className='flex gap-x-4 justify-end'>
                            {/* <button onClick={decrement} className='bg-secundario text-white h-8 w-8 rounded-full font-bold text-3xl flex justify-center items-center'>-</button> */}
                            <input type="number" value={valor} onChange={handleInput} className='bg-primario text-center rounded-lg w-24'/>
                            <button onClick={increment} className='bg-secundario text-white h-8 w-8 rounded-full font-bold text-3xl flex justify-center items-center'>+</button>
                        </div>

                    </div>
                </div>
            </div>






            <div className='w-36 flex flex-col items-end justify-around'>
                
                <BtnIconTrash/>

                <BtnCargar/>
            </div>






        </div>
    )
}

