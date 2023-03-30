const TextBox = () => {
	return (
		<label className='m-2 md:m-4'>
			<input
				name='price'
				type='number'
				className='w-28 md:w-44 h-6 md:h-10 pl-2  border-2 border-solid rounded-lg text-sm md:text-lg flex justify-start items-center'
			></input>
		</label>
	)
}
export default TextBox
