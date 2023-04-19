/* eslint-disable react/prop-types */
import { RiCloseCircleLine } from "react-icons/ri"

const ModalExcel = ({setModal}) => {
	return (
<section
	id='modalExcel'
	className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 '
>
	<div
		id='modal-containerExcel'
		className='bg-primario3 m-auto w-371 h-60 rounded-lg pr-14'
	>
		<div className=' flex justify-end mb-8 mr-2'>
			<button className=' pr-2 pt-2' onClick={() => setModal(false)}>
				<RiCloseCircleLine className='w-6 h-6 fill-secundario bottom-4' />
			</button>
		</div>

		<p
			id='modal-paragraph'
			className=' w-82 h-52 left-6 not-italic  items-centerqa<A order-none grow-0 py-12 px-10 text-center font-secundaria text-error top-4 text-xl'
		>
			Disponible solo en version Premiun
		</p>
	</div>
</section>

    )
}

export default ModalExcel
