import React from 'react'
import Login from './Login/Login'
import Reports from './Reports/Reports'
import { data } from '../data.js'

const Layout = () => {
	return (
		<>
			<Reports charData={data} />
		</>
	)
}

export default Layout
