import React from 'react'
import { CiSearch } from 'react-icons/ci'

export const TextBoxWithIcon = ({ setFilter, filter }) => {
	const handleChange = e => {
		setFilter({ ...filter, search: e.target.value })
	}

	return (
		<div className='border-1 border-secundario3 rounded-12'>
			<div className='relative '>
				<CiSearch className='pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3' />

				<input
					type='text'
					className='h-48 w-pr80 ml-6 text-sm rounded-md  text-secundario focus:outline-none focus:text-gray-900 inputSearch md:w-pr90'
					onChange={handleChange}
					placeholder='Buscar Items'
				/>
			</div>
		</div>
	)
}
