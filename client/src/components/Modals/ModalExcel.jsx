

const ModalExcel = (setModal) => {
	return (
		
			<section
				id='modalExcel'
				className='bg-primario2 fixed top-0 left-0 right-0 bottom-0 flex transition-all ease-out duration-300 '
			>
				<div
					id='modal-containerExcel'
					className='bg-secundario3 w-11/12 m-auto max-w-96 h-60 rounded-lg '
				>
					<div className=' flex justify-end'>
						<button className=' pr-2 pt-2'>
							<svg
								onClick={() => setModal(false)}
								className='h-8 p-0 m-0 fill-grey-400'
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								viewBox='0 0 24 24'
							>
								<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z' />
							</svg>
						</button>
					</div>

					<p
						id='modal-paragraph'
						className=' py-12 px-10 text-center font-secundaria text-red-500'
					>
						Disponible solo en version Premiun
					</p>
				</div>
			</section>
		
	)
}

export default ModalExcel
