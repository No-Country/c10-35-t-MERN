


import React, { useState } from 'react'


import { CategoryListContainer } from '../../components/CategoryProducts/CategoryListContainer';


const categories = [
	{
		id: 1,
		title: 'Verduras',
		stock: '12',
		price: '1600',
	},
	{
		id: 2,
		title: 'Bebidas',
		stock: '13',
		price: '1500',
	},
]

const products = [
	{
		id: 1,
		title: 'Leche',
		stock: '12',
		price: '1600',
		idCategory: 2,
	},
	{
		id: 2,
		title: 'Lechuga',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
	{
		id: 3,
		title: 'Lechuga-1',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
	{
		id: 4,
		title: 'Lechuga-2',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
	{
		id: 5,
		title: 'Lechuga-3',
		stock: '10',
		price: '20',
		idCategory: 1,
	},
]



function SectionCategory() {
    const [filter, setFilter] = useState({
        search: '',
        category: '',
    })

    return (
        <div>
            <h2 className='flex start pb-4'>Categorías</h2>
            <CategoryListContainer categoriesList={categories} setFilter={setFilter} filter={{ ...filter }}/>
        </div>
    )
}

export default SectionCategory
