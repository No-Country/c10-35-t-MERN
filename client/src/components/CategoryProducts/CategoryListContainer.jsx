import React from 'react'
import { CategoryCard } from './CategoryCard'

export const CategoryListContainer = ({
	categoriesList,
	setFilter,
	filter,
}) => {
	return (
		<div className='flex w-full gap-4'>
			{categoriesList.map((category, i) => {
				return (
					<CategoryCard
						key={category.id}
						id={category.id}
						title={category.title}
						price={category.price}
						stock={category.stock}
						type={i === 0 ? 1 : 0}
						setFilter={setFilter}
						filter={{ ...filter }}
					/>
				)
			})}
		</div>
	)
}
