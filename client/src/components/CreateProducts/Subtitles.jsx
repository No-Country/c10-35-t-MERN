/* eslint-disable react/prop-types */


const Subtitles = ({formData}) => {
	const {cantidad,categorias}=formData
	


  return (
    <div className='hidden md:w-566 md:h-52 md:left-494 md:top-178 md:flex  md:flex:row md:justify-between md:p-0 md:ml-14 md:pb-2 md:mt-5 md:items-center md:gap-11 '>
						<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
							<h3 className='text-acento md:flex md:flex-col md:justify-center  md:h-5  md:items-center '>
								categorias
							</h3>
							<div className='text-secundario md:h-4'>{categorias}</div>
						</div>
						<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
							<h3 className='text-acento md:flex-none md:h-5 md:flex md:items-center'>
								total unidades
							</h3>
							<div className='text-secundario md:h-4 '>{cantidad}</div>
						</div>
						<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
							<h3 className='text-acento md:h-5 md:flex md:items-center'>
								valor total
							</h3>
							<div className='text-secundario md:h-4'> {}</div>
						</div>
					</div>
  )
}

export default Subtitles