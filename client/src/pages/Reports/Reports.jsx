/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import BarChart from '../Reports/BarChart'
import CakeChart from '../Reports/CakeChart'
import CircleChart from '../Reports/CircleChart'
import NavBar from '../../components/NavBar/NavBar'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop'

function Reports({ charData }) {
	return (
		<div className='lg:grid lg:grid-cols-[130px_1fr] lg:gap-x-8'>
			<NavbarDesktop />
			<div>
			<NavBar navBarTile='Reportes' />
			<div className='flex flex-col justify-center items-center w-full py-5 '>
				<div className='flex flex-col px-30 py-2.5 rounded-lg border-solid border-1 shadow-sombra border-black mb-5 text-center'>
					<h2 className='text-secundario mb-2'>Stock total</h2>
					<div className='flex justify-between'>
						<h3 className='text-left text-acento'>Total:</h3>
						<span className='font-secundaria text-xl font-bold text-secundario'>
							$100
						</span>
					</div>
					<div className='flex justify-between'>
						<h3 className='text-left text-acento'>UND:</h3>
						<span className='font-secundaria text-xl font-bold text-secundario'>
							$2000
						</span>
					</div>
				</div>
				<div className='flex relative justify-center items-center w-full bg-primario'>
					<div className='flex w-4/5 absolute -top-2 justify-center items-center gap-3 h-11 w-full'>
						<button
							href='#'
							className='text-f16 font-secundaria text-xl font-bold text-primario px-8 rounded-xl h-full bg-secundario shadow-lg'
						>
							Dia
						</button>
						<button
							href='#'
							className='text-f16 font-secundaria text-xl font-bold text-primario px-8 rounded-xl h-full bg-secundario shadow-lg'
						>
							Mes
						</button>
						<button
							href='#'
							className='text-f16 font-secundaria text-xl font-bold text-primario px-8 rounded-xl h-full bg-secundario shadow-lg'
						>
							Año
						</button>
					</div>
					<div className='flex w-4/5 justify-center mt-14 gap-2'>
						<div className='bg-white rounded-xl h-20 w-36 shadow-sombra'>
							<CakeChart charData={charData} />
						</div>
						<div className='bg-white rounded-xl h-20 w-36 shadow-sombra'>
							<CakeChart charData={charData} />
						</div>
					</div>
				</div>
				<main className='flex bg-primario justify-evenly items-start w-full  gap-2 px-4 py-3 '>
					<article className='flex flex-col  text-center w-1/2'>
						<h2 className='text-f12'>Ingresos y egresos</h2>
						<div className='bg-white shadow-sombra w-full '>
							<BarChart charData={charData} />
						</div>
					</article>
					<article className=' flex flex-col justify-center  text-center w-1/2'>
						<h2 className='text-f12'>Categorias y unidades</h2>
						<div className='bg-white shadow-sombra w-full '>
							<CircleChart charData={charData} />
						</div>
					</article>
				</main>
				<div className='flex bg-primario w-full py-5 justify-center'>
					<div className='flex justify-between items-center p-2 rounded-sm bg-white rounded-xl shadow-sombra mb-2 w-11/12'>
						<h5 className='text-left text-secundario'>
							Productos baja rotación
						</h5>
						<span className='font-secundaria text-f16 font-bold text-acento'>
							UND 200
						</span>
					</div>
				</div>
				</div>
			</div>
			<NavbarMobile />
		</div>
	)
}

export default Reports
