/* eslint-disable react/prop-types */

const Subtitles = ({ formData }) => {
	const { stock, cost } = formData

	return (
		<div className='hidden md:w-566  md:h-48 md:left-494  md:flex md:flex:row md:justify-between md:p-0 md:ml-14 md:pb-2 md:mt-0 md:items-center '>
			<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9 '>
				<h3 className='text-acento md:flex-none md:h-5 md:flex md:items-center '>
					total unidades
				</h3>
				<div className='text-secundario md:h-4 md:text-xl'>{stock}</div>
			</div>
			<div className='md:flex md:flex-col md:justify-center md:items-center md:h-9'>
				<h3 className='text-acento md:h-5 md:flex md:items-center'>
					valor total
				</h3>
				<div className='text-secundario md:h-4 md:text-xl'>$ {stock * cost}</div>
			</div>
		</div>
	)
}

export default Subtitles
