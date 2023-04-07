/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import BarChart from '../Reports/BarChart'
import CakeChart from '../Reports/CakeChart'
import CircleChart from '../Reports/CircleChart'
import NavBar from '../../components/NavBar/NavBar'

function Reports({ charData }) {
	return (
		<>
			<NavBar navBarTile='Reportes' />
			<div className='flex flex-col justify-center items-center w-full py-5 '>
				<div className='flex flex-col px-4 py-3 rounded-lg border-solid border-2 border-secondary mw-32 mb-5 text-center'>
					<h3 className='font-bold '>Stock total</h3>
					<p className='font-bold text-f12'>Total: $100000</p>
					<p className='font-bold text-f12'>Unidades: 2000</p>
				</div>
				<div className='flex relative justify-center py-8 items-center w-full bg-gray-200'>
					<div className='flex w-4/5 absolute -top-2 justify-between'>
						<a
							href='#'
							className='text-xs py-1 px-4 border-solid border-2 border-secondary rounded-xl bg-white'
						>
							Sermanal
						</a>
						<a
							href='#'
							className='text-xs py-1 px-4 rounded-xl border-solid border-2 border-secondary bg-white'
						>
							Mensual
						</a>
						<a
							href='#'
							className='text-xs py-1 px-4 rounded-xl border-solid border-2 border-secondary bg-white'
						>
							Diaria
						</a>
					</div>
					<div className='flex w-4/5 justify-center h-full gap-2'>
						<div className='w-20 h-20 bg-primario'>
							<CakeChart charData={charData} />
						</div>
						<div className='w-20 h-20 bg-primario'>
							<CakeChart charData={charData} />
						</div>
						<div className='w-20 h-20 bg-primario'>
							<CakeChart charData={charData} />
						</div>
					</div>
				</div>
				<main className='flex bg-gray-200 justify-evenly items-start w-full  gap-2 px-4 py-3 mb-3'>
					<article className='flex flex-col  text-center w-1/2'>
						<h2 className='text-f12'>Ingresos y egresos</h2>
						<div className='bg-primario75 w-full '>
							<BarChart charData={charData} />
						</div>
					</article>
					<article className=' flex flex-col justify-center  text-center w-1/2'>
						<h2 className='text-f12'>Categorias y unidades</h2>
						<div className='bg-primario75 w-full '>
							<CircleChart charData={charData} />
						</div>
					</article>
				</main>
				<div className='flex justify-between items-center p-2 rounded-sm bg-gray-200 mb-2 w-4/5'>
					<p>Stock a calcular</p>
					<p>UND7</p>
				</div>
				<div className='flex justify-between items-center p-2 rounded-sm bg-gray-200 w-4/5'>
					<p>Productos baja rotación</p>
					<p>UND1</p>
				</div>
			</div>
		</>
	)
}

export default Reports
