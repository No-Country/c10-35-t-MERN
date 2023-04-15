import React, { useState } from 'react'
import { CategoryCard } from './CategoryCard'

export const CategoryListContainer = ({
	categoriesList,
	setFilter,
	filter,
}) => {

	const [idCard, setIdCard] = useState(0);


	const filterCategory = (id) =>{

		if(id===idCard){
			setIdCard(0)
			setFilter({ ...filter, category:"" });
		}else{
			setIdCard(id)
			setFilter({ ...filter, category:id });
		}

		
		
	}


	return (

		

		<div className='flex w-full'>
			{categoriesList.map((category, i) => {
				return (
					<CategoryCard
						key={category.id}
						id={category.id}
						title={category.title}
						price={category.price}
						stock={category.stock}
						setFilter={setFilter}
						filter={{ ...filter }}
						filterCategory={filterCategory}
						type={idCard === category.id? 1:0}
					/>
				)
			})}
		</div>
	)
}
