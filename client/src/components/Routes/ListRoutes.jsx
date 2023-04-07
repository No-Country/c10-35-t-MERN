import React from 'react'
import Reports from '../../pages/Reports/Reports'
import Login from '../../pages/Login/Login'
import { Routes, Route } from 'react-router'
import CreateProducts from '../CreateProducts/CreateProducts'
import { data } from '../../data'

const ListRoutes = () => {
	return (
		<>
			<div>
				<Routes>
					<Route path='/*' element={<h1>not found</h1>} />
					<Route path='/' element={<Login />} />
					<Route path='/inicio' element={<h1>inicio</h1>} />
					<Route path='/inventario' element={<h1>inventario</h1>} />
					<Route path='/crear-producto' element={<CreateProducts />} />
					<Route
						path='/registro-de-movimientos'
						element={<h1>registro-de-movimientos</h1>}
					/>
					<Route path='/reportes' element={<Reports charData={data} />} />
					<Route path='/perfil' element={<h1>perfil</h1>} />
					<Route path='/configuracion' element={<h1>configuración</h1>} />
					<Route path='/detalles' element={<h1>detalles</h1>} />
					<Route path='/logout' element={<h1>Cerrar sesión</h1>} />
				</Routes>
			</div>
		</>
	)
}

export default ListRoutes
