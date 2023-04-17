





import React, { useState } from 'react'
import Modal from 'react-modal'
import ModalMovimientoExitoso from '../Modals/ModalMovimientoExitoso'

Modal.setAppElement('#root');

function BtnConfirmarMovimiento() {


    // Modal Moviento exitoso
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }


    return (
        <>
            <button onClick={openModal} className='bg-secundario text-white rounded-xl w-full py-2'>Confirmar movimientos</button>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                className='bg-slate'
            >   
                <ModalMovimientoExitoso/>
            </Modal>
        </>
    )
}

export default BtnConfirmarMovimiento
