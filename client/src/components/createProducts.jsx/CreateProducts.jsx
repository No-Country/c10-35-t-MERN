import { VscChromeClose } from 'react-icons/vsc'
import TextBox from '../textBox/TextBox'
import TextScroll from '../textBox/TextScroll'

const CreateProducts = () => {
	return (
		<figure className='bg-yellow-700 h-screen w-screen '>
			<section className=' flex justify-end h-8 p-2'>
				<VscChromeClose />
			</section>
			<div className='bg-slate-400 h-36 flex justify-center '>
				<div className='m-2'>
					<p className=' mb-2'>Crear Producto</p>
					<img
						src='../../imagen/bee.jpg'
						className='w-24 h-24 bg-red-400'
					></img>
				</div>
			</div>
			<figcaption className='bg-red-300  h-fit p-4'>
				<div className='m-2 md:m-4'>
					<div className='w-42 md:w-32 md:h-10 pl-2  border-2 rounded-lg  text-center text-sm md:text-lg flex justify-start items-center'>
						Nombre del Producto
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='grid grid-cols-2 gap-x-40'>
						<TextBox />
						<TextScroll />
						<TextBox />
						<TextBox />
						<TextBox />
						<TextBox />
						<TextBox />
						<TextScroll />
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='m-2 md:m-4'>
						<div className='w-24 md:w-32 md:h-10 border-2 rounded-lg text-sm md:text-lg flex justify-center items-center'>
							Cargar Excel
						</div>
					</div>
					<div className='m-2 md:m-4'>
						<div className='w-20 md:w-32 md:h-10  border-2 rounded-lg  text-sm md:text-lg flex justify-center items-center'>
							Continuar
						</div>
					</div>
				</div>
			</figcaption>
		</figure>
	)
}
export default CreateProducts
