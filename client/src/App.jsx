import Login from './components/Login/Login'
import Reports from './components/Reports/Reports'
import { Route, Routes } from 'react-router'

function App() {
	return (
		<div className='App text-center'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/reportes' element={<Reports />} />
			</Routes>
		</div>
	)
}

export default App
