// import { AiFillCaretDown } from 'react-icons/ai'

const unidades = [
	{
		id: 1,
		unit: 'Kg',
	},
	{ id: 2, unit: 'M' },
	{
		id: 3,
		unit: 'L',
	},
	{
		id: 4,
		unit: 'units',
	},

]

const TextScroll = (handleChange, form) => {
	return (
		<label className='m-2 md:m-4 flex justify-between'>
			
				<select
					name='units'
					 onChange={handleChange}
					defaultValue={unidades[3].unit}
					required
					className='w-28 md:w-44 md:h-10 pl-2  border-2 rounded-lg text-sm md:text-lg flex justify-start items-center box-content '
				>
					{unidades.map(function (el) {
						return (
							<option value={el.unit} key={el.id}>
								{el.unit}
							</option>
						)
					})}
				</select>

			
			
		</label>
	)
}
export default TextScroll
