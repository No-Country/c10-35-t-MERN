import verdura from '../../assets/verdura.png'
import verdura0 from '../../assets/verdura-0.png'

export const CategoryCard = ({
	id,
	title,
	price,
	stock,
	setFilter,
	filter,
	filterCategory,
	type,
}) => {
	

	const bgColorCard = type === 1 ? 'bg-secundario' : 'white'
	const textColor = type === 1 ? 'text-white' : 'text-secundario'
	const colorTitle = type === 1 ? 'text-acento' : 'text-secundario'

	return (
		<motion className='group'>
			<div 
				className={`${bgColorCard} h-176 w-140 rounded-12 p-3 shadow-sombra group-hover:bg-secundario`}
				onClick={() => {
					filterCategory(id)
				}}
			>
				<div className='w-full h-full flex justify-center items-center flex-col'>
					<div className='w-full mt-4 mb-4'>
						<h3 className={` ${colorTitle} group-hover:text-acento`}>{title}</h3>
					</div>

					<div>
						<img
							src={type === 1 ? verdura : verdura0}
							alt='img'
							className='mb-12 w-46.03 h-50'
						/>
					</div>

					<div className='w-full grid grid-cols-3 grid-rows-2 mb-4'>
						<div className='col-span-1 row-span-1'>
							<h5 className='text-acento font-bold'>Und:</h5>
						</div>

						<div className='col-span-2 row-span-1 text-right'>
							<h5 className={`font-bold ${textColor} group-hover:text-white`}>{stock}</h5>
						</div>

						<div className='col-span-1  row-span-1'>
							<h5 className='text-acento font-bold'>Total:</h5>
						</div>

						<div className='col-span-2  row-span-1 text-right'>
							<h5 className={`font-bold ${textColor} group-hover:text-white`}>${price}</h5>
						</div>
					</div>
				</div>
			</div>
		</motion>
	)
}
