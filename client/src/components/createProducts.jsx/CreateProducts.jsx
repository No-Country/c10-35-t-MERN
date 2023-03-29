import { VscChromeClose } from 'react-icons/vsc'

const CreateProducts = () => {
	return (
		<figure className='bg-yellow-700 h-96 w-full'>
			<section className=' flex justify-end p-2'>
				<VscChromeClose />
			</section>
			<div className='bg-slate-400 h-36 flex justify-center'>
					<p className=''>Crear Producto</p>
				<div>
				<img src='' className='w-24 h-24'></img>
				</div>

			</div>
			<figcaption className='bg-red-300 h-40'></figcaption>
		</figure>
	)
}
export default CreateProducts
