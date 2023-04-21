import { NavLink } from 'react-router-dom'
import { RiSettings3Line, RiNotification3Line } from 'react-icons/ri'
import stockerLogo from '../../assets/logo-navbar.png'
import inventarioUrl from '../../assets/icon-inventario-white.svg'
import crearProductoUrl from '../../assets/icon-crear-producto-white.svg'
import movimientosUrl from '../../assets/icon-movimientos-white.svg'
import reportesUrl from '../../assets/icon-reportes-white.svg'

export default function NavbarDesktop() {
	return (
		<nav className='h-screen lg:sticky lg:top-0 w-130 text-white bg-secundario max-md:hidden lg:block'>
			<NavLink to='/inventario'>
				<img className='py-8 mx-auto' src={stockerLogo} alt='Stocker logo' />
			</NavLink>
			<div className='h-navbar flex flex-col justify-between'>
				<div>
					<NavLink
						to='/inventario'
						className={({ isActive }) =>
							isActive
								? 'w-full h-20 bg-acento2 text-acento [&>button]:bg-acento2'
								: ''
						}
					>
						<button className='group flex flex-col items-center justify-center w-full h-20 py-2 transition duration-200 ease-in-out font-secundaria border-y focus:bg-acento2'>
							<img src={inventarioUrl} alt='' />
							<h5 className='group-focus:text-acento mt-1'>Inventario</h5>
						</button>
					</NavLink>
					<NavLink
						to='/crear-producto'
						className={({ isActive }) =>
							isActive
								? 'w-full h-20 bg-acento2 text-acento [&>button]:bg-acento2'
								: ''
						}
					>
						<button className='group flex flex-col items-center justify-center w-full h-20 py-2 transition duration-200 ease-in-out font-secundaria border-b focus:bg-acento2'>
							<img src={crearProductoUrl} alt='' />
							<h5 className='group-focus:text-acento mt-1'>
								Creación de producto
							</h5>
						</button>
					</NavLink>
					<NavLink
						to='/registro-de-movimientos'
						className={({ isActive }) =>
							isActive
								? 'w-full h-20 bg-acento2 text-acento [&>button]:bg-acento2'
								: ''
						}
					>
						<button className='group flex flex-col items-center justify-center w-full h-20 py-2 transition duration-200 ease-in-out font-secundaria border-b focus:bg-acento2'>
							<img src={movimientosUrl} alt='' />
							<h5 className='group-focus:text-acento mt-1'>Movimientos</h5>
						</button>
					</NavLink>
					<NavLink
						to='/reportes'
						className={({ isActive }) =>
							isActive
								? 'w-full h-20 bg-acento2 text-acento [&>button]:bg-acento2'
								: ''
						}
					>
						<button className='group flex flex-col items-center justify-center w-full h-20 py-2 transition duration-200 ease-in-out font-secundaria border-b focus:bg-acento2'>
							<img src={reportesUrl} alt='' />
							<h5 className='group-focus:text-acento mt-1'>Reportes</h5>
						</button>
					</NavLink>
				</div>
				<div>
					<NavLink
						to='/notificaciones'
						className={({ isActive }) =>
							isActive
								? 'w-full h-20 bg-acento2 text-acento [&>button]:bg-acento2'
								: ''
						}
					>
						<button className='group flex flex-col items-center justify-center w-full h-20 py-2 transition duration-200 ease-in-out font-secundaria border-y focus:bg-acento2'>
							<RiNotification3Line className='group-focus:text-acento w-6 h-6' />
							<h5 className='group-focus:text-acento mt-1'>Notificaciones</h5>
						</button>
					</NavLink>
					<NavLink
						to='/configuración'
						className={({ isActive }) =>
							isActive
								? 'w-full h-20 bg-acento2 text-acento [&>button]:bg-acento2'
								: ''
						}
					>
						<button className='group flex flex-col items-center justify-center w-full h-20 py-2 transition duration-200 ease-in-out font-secundaria border-b focus:bg-acento2'>
							<RiSettings3Line className='group-focus:text-acento w-6 h-6' />
							<h5 className='group-focus:text-acento mt-1'>Configuración</h5>
						</button>
					</NavLink>
				</div>
			</div>
		</nav>
	)
}
