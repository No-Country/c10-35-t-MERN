/* eslint-disable react/prop-types */
const TextBox = props => {
	const { label, type, name, state, setState } = props

	const onChange = e => {
		setState(...state, e.target.value)
	}
	return (
		<label htmlFor={name} className='m-2 md:m-4'>
			{label}
			<input
				name={name}
				id={name}
				type={type}
				value={state}
				onChange={onChange}
				required
				className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
			></input>
		</label>
	)
}
export default TextBox
