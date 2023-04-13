import React from 'react'
import { Routes, Route } from 'react-router'
import Reports from '../../pages/Reports/Reports'
import Login from '../../pages/Login/Login'
import { Inventary } from '../../pages/Inventary/inventary'
import Dashboard from '../../pages/Dashboard/Dashboard'
import DashboardPopup from '../Dashboard/DashboardPopup'
import CreateProducts2 from '../../pages/CreateProducts/CreateProducts2'
import Ingresos from '../../pages/Ingresos/Ingresos'
import Egresos from '../../pages/Egresos/Egresos'
import ProductosMover from '../../pages/ProductosMover/ProductosMover'

const ListRoutes = () => {
	return (
		<>
			<div>
				<Routes>
					<Route path='/*' element={<h1>not found</h1>} />
					<Route path='/' element={<Login />} />
					<Route path='/inicio' element={<Dashboard/>} />
					<Route path='/inventario' element={<Inventary/>} />
					<Route path='/crear-producto' element={<CreateProducts2 />} />
					<Route path='/registro-de-movimientos' element={<DashboardPopup />} />
					<Route path='/reportes' element={<Reports />} />
					<Route path='/perfil' element={<h1>perfil</h1>} />
					<Route path='/configuracion' element={<h1>configuración</h1>} />
					<Route path='/detalles' element={<h1>detalles</h1>} />
					<Route path='/logout' element={<h1>Cerrar sesión</h1>} />
					<Route path='/ingresos' element={<Ingresos/>} />
					<Route path='/egresos' element={<Egresos/>} />
					<Route path='/productoMover' element={<ProductosMover/>} />
				</Routes>
			</div>
		</>
	)
}

export default ListRoutes
