import CreateProducts from './components/CreateProducts/CreateProducts'
// import ListRoutes from './components/Routes/ListRoutes'


function App() {
	return (
<<<<<<< HEAD
		<div className='App text-center'>
			<Routes>
				<Route path='/*' element={<h1>not found</h1>} />
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='/' element={<h1>home</h1>} />
				<Route path='/inicio' element={<h1>inicio</h1>} />
				<Route path='/inventario' element={<h1>inventario</h1>} />
				<Route path='/crear-producto' element={<h1>crear-producto</h1>} />
				<Route
					path='/registro-de-movimientos'
					element={<h1>registro-de-movimientos</h1>}
				/>
				<Route path='/reportes' element={<h1></h1>} />
				<Route path='/perfil' element={<h1>perfil</h1>} />
				<Route path='/configuracion' element={<h1>configuración</h1>} />
				<Route path='/detalles' element={<h1>detalles</h1>} />
				<Route path='/logout' element={<h1>Cerrar sesión</h1>} />
				<Route path='/Ingreso' element={<h1>Cerrar sesión</h1>} />
			</Routes>
=======
		<>
		<div >
			
	
		<CreateProducts/>
      
>>>>>>> 967207f2d7da72cf75de9ff669f371d6962ad5f3
		</div>
		</>
	)
}

export default App
