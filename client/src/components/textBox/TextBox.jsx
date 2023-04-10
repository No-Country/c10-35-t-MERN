/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const TextBox = props => {
	const { label, type, name, estado, cambiarEstado, regularExp } = props

	const onChange = e => {
		cambiarEstado({ ...estado, campo: e.target.value })
	}
	const validation = () => {
		if (regularExp) {
			if (regularExp.test(estado.campo)) {
				cambiarEstado({ ...estado, valid: 'true' })
			} else {
				cambiarEstado({ ...estado, valid: 'false' })
			}
		}
		if (estado.valid.lenght !== 0) {
			cambiarEstado({ ...estado, valid: 'true' })
		} else {
			cambiarEstado({ ...estado, valid: 'false' })
		}
	}

	return (
		<>
			<label htmlFor={name} className='m-2 md:m-4'>
				{label}
			</label>
			<input
				name={name}
				id={name}
				type={type}
				value={estado.campo}
				onChange={onChange}
				onBlur={validation}
				valid={estado.valid}
				required
				className='w-28 md:w-44 h-6 md:h-10  pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
			></input>
			{estado.valid === 'true' && null}
			{estado.valid === 'false' && (
				<p className=' text-error'>Solo recibe numeros</p>
			)}
		</>
	)
}
export default TextBox
