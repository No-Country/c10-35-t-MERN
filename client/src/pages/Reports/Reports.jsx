/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import BarChart from '../Reports/BarChart'
import CakeChart from '../Reports/CakeChart'
import CircleChart from '../Reports/CircleChart'
import NavBar from '../../components/NavBar/NavBar'
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile'
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop'
import { useEffect, useState } from 'react'
import useGetData from '../../hooks/UseFetch/UseGetData'

function Reports({ charData }) {
	const [name, setName] = useState('')
	const URL = `https://pokeapi.co/api/v2/pokemon/${name || 'ditto'}`
	const URL2 = `https://pokeapi.co/api/v2/pokemon/${name || 'pikachu'}`
	const { getData, isGetLoading, getError } = useGetData(URL)
	// const ditto = useGetData(URL)
	// const pikachu = useGetData(URL2)
	// console.log(ditto.getData)
	// console.log(pikachu.getData)

	return (
		<div className='lg:grid lg:grid-cols-[130px_1fr] lg:gap-x-8'>
			<NavbarDesktop />
			<div>
				<NavBar navBarTile='Reportes' />
				<div className='flex flex-col justify-center items-center w-full py-5 lg:px-10'>
					<div className='flex flex-col px-30 py-2.5 rounded-lg border-solid border-1 shadow-sombra border-black mb-5 text-center lg:flex-row lg:flex-wrap lg:justify-between lg:w-566 lg:h-184 lg:reounded-12 lg:bg-primario lg:border-0 lg:px-9 lg:py-5'>
						<h2 className='text-secundario mb-2 lg:w-full'>Stock total</h2>
						<div className=' flex justify-between lg:justify-center lg:w-238'>
							<h3 className='text-left text-acento lg:mr-8'>Total:</h3>
							<span className='lg:hidden font-secundaria text-xl font-bold text-secundario'>
								$100
							</span>
							<span className='font-secundaria text-xl font-bold text-secundario'>
								$10000000
							</span>
						</div>
						<div className='flex justify-between lg:justify-center  lg:w-132'>
							<h3 className='text-left text-acento lg:mr-4'>UND:</h3>
							<span className='font-secundaria text-xl font-bold text-secundario'>
								$2000
							</span>
						</div>
						<div className='hidden lg:flex bg-white lg:shadow-sombra lg:m-auto lg:justify-around lg:py-3 lg:w-343 lg:rounded-12'>
							<h5 className='text-left text-secundario'>
								Productos baja rotación
							</h5>
							<span className='font-secundaria text-f16 font-bold text-acento'>
								UND 200
							</span>
						</div>
					</div>
					<div className='flex relative justify-center items-center w-full bg-primario lg:bg-white'>
						<div className='flex w-4/5 absolute -top-2 lg:-top-6 justify-center items-center gap-3 h-11 '>
							<button className='text-white'>
								<input
									className='hidden report-input-check'
									type='radio'
									id='pikachu'
									onClick={e => setName(e.target.id)}
									name='row1'
									defaultChecked='true'
								/>
								<label
									className='text-f16 font-secundaria text-xl font-bold text-secundario px-8 rounded-xl py-3 bg-white shadow-lg'
									htmlFor='pikachu'
								>
									Dia
								</label>
							</button>
							<button className='text-white'>
								<input
									className='hidden report-input-check'
									type='radio'
									id='charmander'
									name='row1'
									onClick={e => setName(e.target.id)}
								/>
								<label
									className='text-f16 font-secundaria text-xl font-bold text-secundario px-8 rounded-xl py-3 bg-white shadow-lg'
									htmlFor='charmander'
								>
									Semana
								</label>
							</button>
							<button className='text-white'>
								<input
									className='hidden report-input-check'
									type='radio'
									id='bulbasaur'
									onClick={e => setName(e.target.id)}
									name='row1'
								/>
								<label
									className='text-f16 font-secundaria text-xl font-bold text-secundario px-8 rounded-xl py-3 bg-white shadow-lg'
									htmlFor='bulbasaur'
								>
									Mes
								</label>
							</button>
						</div>
						<div className='flex w-4/5 justify-center mt-14 gap-2 lg:w-full lg:justify-between'>
							<div className='w-36 lg:w-446'>
								<h3 className='text-left hidden lg:block'>Ingresos</h3>
								<div className='bg-white rounded-xl h-16 lg:h-157  p-2 shadow-sombra'>
									<CakeChart charData={getData} url={URL} />
								</div>
							</div>
							<div className='w-36 lg:w-446'>
								<h3 className='text-left hidden lg:block'>Ingresos</h3>
								<div className='bg-white w-full rounded-xl h-16 lg:h-157 p-2 shadow-sombra'>
									<CakeChart charData={getData} />
								</div>
							</div>
						</div>
					</div>
					<main className='flex bg-primario justify-evenly items-start w-full  gap-2 px-4 py-3 lg:justify-between lg:p-0 lg:bg-white mb-10'>
						<article className='flex flex-col text-center w-1/2 lg:w-447 lg:h-300 bg-red-200 '>
							<h3 className='lg:text-left'>Ingresos y egresos</h3>
							<div className='bg-white shadow-sombra w-full lg:h-full'>
								<BarChart charData={getData} />
							</div>
						</article>
						<article className=' flex flex-col justify-center  text-center w-1/2 lg:w-446 lg:h-300'>
							<h3 className='lg:text-left'>Categorias y unidades</h3>
							<div className='bg-white shadow-sombra w-full lg:h-full  '>
								<CircleChart charData={getData} />
							</div>
						</article>
					</main>
					<div className='flex bg-primario w-full py-5 justify-center lg:hidden'>
						<div className='flex justify-between items-center p-2 bg-white rounded-12 shadow-sombra mb-2 w-11/12'>
							<h5 className='text-left text-secundario'>
								Productos baja rotación
							</h5>
							<span className='font-secundaria text-f16 font-bold text-acento'>
								UND 200
							</span>
						</div>
					</div>
					<button className='bg-secundario w-343 rounded-xl text-white py-4 font-bold'>
						Descargar registro
					</button>
				</div>
			</div>
			<NavbarMobile />
		</div>
	)
}

export default Reports
