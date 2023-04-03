import React from 'react'

export const CategoryCard = () => {
	return (
		<div className='mx-5 border-2 rounded-3xl bg-slate-200 p-10'>
			<div className='w-full flex justify-center'>
				<h2 className='font-bold'>Bebidas</h2>
			</div>

			<div className='w-full flex-col mt-5'>
            <ul className="list-none">
                <li><span className='font-bold'>Texto:</span> 1500</li>
                <li><span className='font-bold'>Total:</span> $1000</li>

            </ul>
			</div>
		</div>
	)
}
