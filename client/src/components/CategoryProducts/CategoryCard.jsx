import vegetal0 from '../../assets/category/vegetal0.svg';
import gaseosa0 from '../../assets/category/gaseosa0.svg';
import lacteos0 from '../../assets/category/Lacteos0.svg';
import snack0 from '../../assets/category/snack0.svg';
import limpieza0 from '../../assets/category/Limpieza0.svg';

import vegetal1 from '../../assets/category/vegetal1.svg';
import gaseosa1 from '../../assets/category/gaseosa1.svg';
import lacteos1 from '../../assets/category/Lacteos1.svg';
import snack1 from '../../assets/category/snacks1.svg';
import limpieza1 from '../../assets/category/Limpieza1.svg';

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
	

	const categories = [
		{
			id: 'Vegetales',
			img0: vegetal0,
			img1: vegetal1,
			
		},
		{
			id: 'Snacks',
			img0: snack0,
			img1: snack1,
		},
		{
			id: 'Lacteos',
			img0: lacteos0,
			img1: lacteos1,
		},
		{
			id: 'Limpieza',
			img0: limpieza0,
			img1: limpieza1,
		},
		{
			id: 'Bebidas',
			img0: gaseosa0,
			img1: gaseosa1,
		},
	]

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
							src={type === 0?  categories.find(e => e.id === id).img0 :   categories.find(e => e.id === id).img1}
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
