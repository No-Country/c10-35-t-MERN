
import { Link } from 'react-router-dom'
import  polloFallo from '../../assets/polloFallo.png'
const ModalFallaCarga = (setVisible) => {
  return (
    <section
    id='modal'
    className='h-full w-full  left-0 top-0 right-0 fixed flex justify-center items-center bg-fondoT'
>
    <div
        id='modal-container'
        className= 'w-300 h-300 rounded-xl flex flex-col justify-center items-center p-6 md:p-10 gap-3 bg-primario md:right-1 md:w-335 md:left-614 md:pl-10 md:h-335'
    >
        <h3
            id='modal-paragraph'
            className='w-247 mb-2 not-italic text-center text-error '
        >
            ¡Ups algo salio mal!
        </h3>
        <p className='font-secundaria font-normal text-sm  text-secundario'>
        Los productos no pudieron ser creados , por favor revisa si todos los campos del formato están correctamente llenados.
        </p>
        <img
            src={polloFallo}
            alt='imagen falla conexion'
            className='w-20 h-20 flex-none'
        />
        <Link to={'/inicio'} className='flex-none'>
            <button onClick={()=>setVisible(false)}
            className='w-40 h-h48 rounded-xl p-2.5 bg-secundario flex flex-row justify-center items-center'>
                <div className='text-white w-16 h-22 font-secundaria not-italic font-bold text-base flex-none  '>
                    aceptar
                </div>
            </button>
        </Link>
    </div>
</section>
  )
}

export default ModalFallaCarga