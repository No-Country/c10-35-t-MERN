// import { AiFillCaretDown } from 'react-icons/ai'

const TextScroll = () => {
	return (
		<label className='m-2 md:m-4'>
			<div className='flex justify-between'>
				<select
					name='selector'
					className='w-28 md:w-44 md:h-10 pl-2  border-2 rounded-lg text-sm md:text-lg flex justify-start items-center box-content '
				>
					<option value='op1'>Option 1</option>
					<option value='op2'>Option 2</option>
					<option value='op3'>Option3</option>
				</select>
				{/* <div className='ml-0 md:ml-14'>
					<AiFillCaretDown />
				</div> */}
			</div>
		</label>
	)
}
export default TextScroll
