/* eslint-disable react/prop-types */
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenuOutline, IoCloseSharp } from 'react-icons/io5'

export default function NavBar({ navBarTile }) {
	const [navbar, setNavbar] = useState(false)

	return (
		<nav className='w-full bg-gray-200 shadow'>
			<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
				<div>
					<div className='flex items-center justify-between py-3 md:py-5 md:block'>
						<a href='#'>
							<h1>{navBarTile}</h1>
						</a>
						<div className='md:hidden'>
							<button className='text-2xl' onClick={() => setNavbar(!navbar)}>
								{navbar ? <IoCloseSharp /> : <IoMenuOutline />}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'h-screen' : 'hidden'
						}`}
					>
						<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
							<li className='text-gray-600 hover:text-blue-600'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-red-500' : undefined
									}}
									to='/perfil'
									onClick={() => setNavbar(!navbar)}
								>
									Perfil
								</NavLink>
							</li>
							<li className='text-gray-600 hover:text-blue-600'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-red-500' : undefined
									}}
									to='/reportes'
									onClick={() => setNavbar(!navbar)}
								>
									Reportes
								</NavLink>
							</li>
							<li className='text-gray-600 hover:text-blue-600'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-red-500' : undefined
									}}
									to='/configuracion'
									onClick={() => setNavbar(!navbar)}
								>
									configuración
								</NavLink>
							</li>
							<li className='text-gray-600 hover:text-blue-600'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-red-500' : undefined
									}}
									to='/detalles'
									onClick={() => setNavbar(!navbar)}
								>
									Detalle compañia
								</NavLink>
							</li>
							<li className='text-gray-600 hover:text-blue-600'>
								<NavLink
									className={({ isActive }) => {
										return isActive ? 'text-red-500' : undefined
									}}
									to='/logout'
									onClick={() => setNavbar(!navbar)}
								>
									Cerrar sesión
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}
