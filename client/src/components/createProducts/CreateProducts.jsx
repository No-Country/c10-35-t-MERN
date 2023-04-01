import { VscChromeClose } from 'react-icons/vsc'
import TextBox from '../textBox/TextBox'
import TextScroll from '../textBox/TextScroll'
import TextBobxLg from '../textBox/TextBoxLg'

const CreateProducts = () => {
	return (
		<form className=' h-screen w-screen '>
			<div className='flex justify-end h-10 p-4 md:p-6 md:pb-8'>
				<button>
					<VscChromeClose />
				</button>
			</div>
			<div className='h-36 md:h-56 flex justify-center items-center'>
				<div className='m-2 '>
					<p className=' mb-2 pl-2 md:text-xl text-slate-700 font-semibold'>
						Crear Producto
					</p>

					<img
						src='https://i.imgur.com/Tgt6TjG.jpeg'
						className='w-32 h-28 md:w-40 md:h-40'
					></img>
				</div>
			</div>
			<div className='h-fit  p-4 mt-2'>
				<div className='m-2 mb-4 md:m-4 '>
					<p className='pb-0 md:pl-2 text-xs md:text-base text-slate'>
						Ingrese el nombre del producto
					</p>
					<TextBobxLg />
									
				</div>
				<div className='flex justify-center'>
					<div className='grid grid-cols-2 gap-x-20 md:gap-x-96'>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4  text-slate-400 pl-2 '>
								ingrese la cantidad
							</p>
							<TextBox />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4 text-slate-400 pl-2'>
								seleccione la unidad
							</p>
							<TextScroll />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4 text-slate-400 pl-2'>
								ingrese el costo
							</p>
							<TextBox />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4 text-slate-400 pl-2'>
								costo total
							</p>
							<TextBox />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4 text-slate-400 pl-2'>
								ingrese el precio
							</p>

							<TextBox />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4 text-slate-400 pl-2'>
								alertar en esta cantidad
							</p>

							<TextBox />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4  text-slate-400 pl-2'>
								nombre Provedor
							</p>

							<TextBox />
						</div>
						<div className='flex flex-col'>
							<p className='text-xs md:text-base md:pl-4  text-slate-400 pl-2'>
								categoria personalizada
							</p>

							<TextScroll />
						</div>
					</div>
				</div>
				<div className='flex justify-between mt-4'>
					<button className='m-2 md:m-4 '>
						<div className='w-28 h-8 md:w-48 md:h-10 border-2 rounded-lg font-semibold text-slate-600 text-sm md:text-lg flex justify-center items-center '>
							Cargar Excel
						</div>
					</button>
					<button className='m-2 md:m-4'>
						<div className='w-28 h-8 md:w-48 md:h-10  border-2 rounded-lg  text-sm font-semibold text-slate-600 md:text-lg flex justify-center items-center'>
							Continuar
						</div>
					</button>
				</div>
			</div>
		</form>
	)
}
export default CreateProducts
