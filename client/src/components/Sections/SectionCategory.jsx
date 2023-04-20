


import React, { useState } from 'react'


import { CategoryListContainer } from '../../components/CategoryProducts/CategoryListContainer';


const categories = [
	{
		id: 'Vegetales',
		title: 'Vegetales',
		stock: '20',
		price: '1600',
	},
	{
		id: 'Snacks',
		title: 'Snacks',
		stock: '17',
		price: '1500',
	},
	{
		id: 'Lacteos',
		title: 'Lacteos',
		stock: '11',
		price: '1500',
	},
	{
		id: 'Limpieza',
		title: 'Limpieza',
		stock: '11',
		price: '1500',
	},
	{
		id: 'Bebidas',
		title: 'Bebidas',
		stock: '11',
		price: '1500',
	},
]

const products = [
	{
		id: 1,
		title: 'Leche',
		stock: '12',
		cost: '1000',
		price: '1600',
		idCategory: 'Bebidas',
		minStock: 30,
		unidades: 'Lts',
		alerta: '10'
	},
	{
		id: 2,
		title: 'Lechuga',
		stock: '10',
		cost: '10',
		price: '20',
		idCategory: 'Vegetales',
		minStock: 20,
		unidades: 'unidades',
		alerta: '10'
	},
	{
		id: 3,
		title: 'Lechuga-1',
		stock: '10',
		cost: '9',
		price: '20',
		idCategory: 'Vegetales',
		minStock: 10,
		unidades: 'unidades',
		alerta: '10'
	},
	{
		id: 4,
		title: 'Lechuga-2',
		stock: '10',
		cost: '8',
		price: '20',
		idCategory: 'Vegetales',
		minStock: 5,
		unidades: 'unidades',
		alerta: '10'
	},
	{
		id: 5,
		title: 'Lechuga-3',
		stock: '10',
		cost: '13',
		price: '20',
		idCategory: 'Vegetales',
		minStock: 7,
		unidades: 'unidades',
		alerta: '10'
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
