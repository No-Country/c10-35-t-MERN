import React from 'react'
import { CiSearch } from 'react-icons/ci'

export const TextBoxWithIcon = ({ setFilter, filter }) => {
	const handleChange = e => {
		setFilter({ ...filter, search: e.target.value })
	}

	return (
		<div className='border-1 border-secundario3 w-full rounded-12'>
			<div className='relative '>
				<CiSearch className='pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3' />

				<input
					type='text'
					className='h-48  w-pr90 ml-6 text-sm text-white rounded-md  focus:outline-none focus:bg-white focus:text-gray-900 inputSearch'
					onChange={handleChange}
					placeholder='Buscar Items'
				/>
			</div>
		</div>
	)
}
