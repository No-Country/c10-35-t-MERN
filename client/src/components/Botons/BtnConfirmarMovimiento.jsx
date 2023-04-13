





import React, { useState } from 'react'
import Modal from 'react-modal'
import ModalMovimientos from '../Modals/ModalMovimientos'
import ModalMovimientoExitoso from '../Modals/ModalMovimientoExitoso'


function BtnConfirmarMovimiento() {

    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }


    return (
        <div className='fixed bottom-0 right-0 bg-white p-4 w-full h-20 flex items-center mb-20'>
            <button onClick={openModal} className='bg-acento text-secundario rounded-md w-full py-2'>Confirmar movimiento</button>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                className='bg-slate'
            >   
                <ModalMovimientoExitoso/>
            </Modal>
        </div>
        // <div className='fixed bottom-0 right-0 bg-white p-4 w-full h-20 flex items-center mb-20'>
        //     <Link to={'/productoMover'} type="submit" className=' bg-acento text-secundario rounded-md w-full py-2'>Confirmar movimiento</Link>
        // </div>
    )
}

export default BtnConfirmarMovimiento
