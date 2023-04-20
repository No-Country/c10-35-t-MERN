import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'
import { RiMenuLine } from 'react-icons/ri'

export default function NavBar({ iconBack, navBarTile }) {
	const [navbar, setNavbar] = useState(false)

	return (
		<nav className='sticky h-16 w-full top-0 left-0 z-40 bg-white text-secundario'>
			<div className='justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:pr-8'>
				<div className='flex items-center justify-between px-4 py-3 md:py-5 md:block md:px-8'>
					<div className='flex items-center'>
						<Link
							to='#'
							onClick={() => window.history.back()}
							className='text-2xl mr-2'
						>
							{iconBack}
						</Link>
						<Link to={'/inicio'}>
							<h1>{navBarTile}</h1>
						</Link>
					</div>
					<div className='md:hidden'>
						<button className='text-2xl' onClick={() => setNavbar(!navbar)}>
							{navbar ? <IoCloseSharp /> : <RiMenuLine />}
						</button>
					</div>
				</div>

				<div>
					<div
						className={`flex-1 justify-self-center pb-3 md:block md:pb-0 ${
							navbar ? 'h-screen' : 'hidden'
						}`}
					>
						<ul className='items-center justify-center space-y-8 text-secundario bg-white md:flex md:space-x-6 md:space-y-0'>
							<li className='hover:text-acento transition delay-75'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-acento' : undefined
									}}
									to='/perfil'
									onClick={() => setNavbar(!navbar)}
								>
									<h4>
										Perfil
									</h4>
								</NavLink>
							</li>
							<li className='hover:text-acento transition delay-75'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-acento' : undefined
									}}
									to='/configuracion'
									onClick={() => setNavbar(!navbar)}
								>
									<h4>
										Configuración
									</h4>
								</NavLink>
							</li>
							<li className='hover:text-acento transition delay-75'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-acento' : undefined
									}}
									to='/detalles'
									onClick={() => setNavbar(!navbar)}
								>
									<h4>
										Nosotros
									</h4>
								</NavLink>
							</li>
							<li className='hover:text-acento transition delay-75 pb-6 md:pb-0'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-acento' : undefined
									}}
									to='/logout'
									onClick={() => setNavbar(!navbar)}
								>
									<h4>
										Cerrar sesión
									</h4>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}
