import React from 'react'
import { Router, Routes, Route } from 'react-router'
import CreateProducts from '../CreateProducts/CreateProducts'

const ListRoutes = () => {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path='/*' element={<h1>not found</h1>} />
						<Route path='/' element={<h1>home</h1>} />
						<Route path='/inicio' element={<h1>inicio</h1>} />
						<Route path='/inventario' element={<h1>inventario</h1>} />
						<Route path='/crear-producto' element={<CreateProducts />} />
						<Route
							path='/registro-de-movimientos'
							element={<h1>registro-de-movimientos</h1>}
						/>
						<Route path='/reportes' element={<h1></h1>} />
						<Route path='/perfil' element={<h1>perfil</h1>} />
						<Route path='/configuracion' element={<h1>configuración</h1>} />
						<Route path='/detalles' element={<h1>detalles</h1>} />
						<Route path='/logout' element={<h1>Cerrar sesión</h1>} />
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default ListRoutes
