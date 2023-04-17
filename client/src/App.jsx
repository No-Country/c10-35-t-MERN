import Reports from './pages/Reports/Reports'
import { Route, Routes } from 'react-router'
import { data } from './data'
import ListRoutes from './components/Routes/ListRoutes'
function App() {
	return (
		<div className='h-full flex flex-col max-h-full flex-grow text-center'>
			<ListRoutes />
		</div>
	)
}

export default App
