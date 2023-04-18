import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const BtnAddProduct = () => {
	return (
		<Link to={'/crear-producto'}>
			<button className='w-60 h-60 bg-acento rounded-60 flex justify-center items-center hover:bg-secundario '>
				<BiPlusMedical className='text-white w-w24 h-w24' />
			</button>
		</Link>
	)
}
