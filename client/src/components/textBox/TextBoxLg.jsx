/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import Parragraph from "../Parragraph/Parragraph"

const TextBobxLg = props => {
	const { label, type, name, estado, cambiarEstado, regularExp} =
		props

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
	}

	return (
		<div>
			<label htmlFor={name} className='m-2 md:m-4 '>
				{label}
			</label>
			<input
				name={name}
				id={name}
				type={type}
				placeholder='Nombre del Producto'
				required
				value={estado.campo}
				onChange={onChange}
				onBlur={validation}
				valid={estado.valid}
			
				className='w-ww343 h-8 md:w-44  md:h-10 pl-2  border-2 border-solid rounded-lg text-sm  text-center  md:text-lg flex justify-start items-center'
			></input>
			{estado.valid === 'true' && null}
			{estado.valid === 'false' && (
				<p className=' text-error'>Solo recibe letras</p>
			)}
		</div>
	)
}
export default TextBobxLg
