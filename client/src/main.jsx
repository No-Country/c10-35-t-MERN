import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import { Inventary } from './pages/inventary'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Inventary />,
		children:[
			{
				path:'/dashboard',
				element:<Dashboard/>
			}
		]
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
