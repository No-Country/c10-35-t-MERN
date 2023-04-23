/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import Parragraph from "../Parragraph/Parragraph"

const TextBobxLg = props => {
	const { label, type, name, estado, cambiarEstado, regularExp,form,setForm} =
		props

	const onChange = e => {
		setForm (
			...form,
		cambiarEstado({
			 ...estado, campo: e.target.value }))
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
		<div className=' w-96'>
			<label htmlFor={name} className='m-2 md:m-4 '>
				{label}
			</label>
			<input
				name={name}
				// id={name}
				type={type}
				placeholder='Nombre del Producto'
				required
				value={estado.campo}
				onChange={onChange}
				onBlur={validation}
				valid={estado.valid}
			
				className='w-80 h-8 pl-2  border-2 border-solid rounded-lg text-sm  text-center  md:text-lg flex justify-start items-center'
			></input>
			{estado.valid === 'true' && null}
			{estado.valid === 'false' && (
				<p className=' text-error'>Solo recibe letras</p>
			)}
		</div>
	)
}
export default TextBobxLg
