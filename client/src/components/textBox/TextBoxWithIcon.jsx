import React from 'react'
import { CiSearch } from 'react-icons/ci'

export const TextBoxWithIcon = ({ setFilter, filter }) => {
	const handleChange = e => {
		setFilter({ ...filter, search: e.target.value })
	}

	return (
		<div className='border-1 border-secundario3 w-full rounded-12'>
			<div className='relative text-gray-600 focus-within:text-gray-400'>
				<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
					<button
						type='submit'
						className='p-1 focus:outline-none focus:shadow-outline'
					>
						<CiSearch className='pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3' />
					</button>
				</span>
				<input
					type='search'
					className='py-12 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 inputSearch w-full ml-4'
					onChange={handleChange}
					placeholder='Buscar Items'
				/>
			</div>
		</div>
	)
}
