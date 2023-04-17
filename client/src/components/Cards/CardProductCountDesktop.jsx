
// // -------- Dependencies
// import React, { useState } from 'react'

// // -------- Images
// import oreo from '../../assets/oreo.jpeg'
// import { Link } from 'react-router-dom'

// import { RiDeleteBinLine } from 'react-icons/ri';

 

//     // Función insertar valor
//     const [valor, setValor] = useState(0)
//     const handleInput = (e) => {
//         e.preventDefault()
//         const valorInsert = e.target.value
//         setValor(parseInt(valorInsert))
//     }
//     const increment = () => {
//         setValor(valor + 1)
//     }
    

// function CardProductCountDesktop() {
//     return (
            

//         <div className='hidden md:flex h-40 bg-white shadow-2xl rounded-xl p-4 gap-x-4'>

//             <div className='flex items-center max-w-full min-w-max overflow-hidden'>
//                 <img src={oreo} alt="Producto" className='w-32'/>
//             </div>



//             <div className='w-full flex flex-col justify-center'>

//                 <div className='flex justify-between'>
//                     <h3>Galleta Oreo Desktop </h3>
//                     <p><span className='font-medium'>Total: </span>${valor}</p>
//                     <RiDeleteBinLine className='text-xl'/>
//                 </div>


//                 <div className='flex justify-between mt-2'>
//                     <p><span className='font-medium'>Stock Total: </span>{valor}</p>
//                     <div className='flex'>
//                         <input type="number" value={valor} onChange={handleInput} className='bg-primario w-28 text-center rounded-lg mr-4'/>
//                         <button onClick={increment} className='text-4xl font-bold bg-secundario w-10 h-10 rounded-full flex justify-center items-center text-white'>+</button>
//                     </div>
//                     <button type="submit" className='block bg-label w-32 h-8 rounded-2xl'>Cargar</button>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default CardProductCountDesktop
