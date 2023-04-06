const TextBobxLg = (props) => {
	const { label, type, name, state, setState } = props

	const onChange = e => {
		setState(...state, e.target.value)
	}
	return (
		<label htmlFor={name}   className='m-2 md:m-4 '>{label}
			<input
				name={name}
				id={name}
				type={type}
				placeholder='Nombre del Producto'
				value={state}
				required
				onChange={onChange}
				className='w-ww343 h-8 md:w-44  md:h-10 pl-2  border-2 border-solid rounded-lg text-sm  text-center  md:text-lg flex justify-start items-center'
			></input>
		</label>
	)
}
export default TextBobxLg

