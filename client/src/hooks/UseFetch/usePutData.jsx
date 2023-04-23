import { useState } from 'react'

const usePutData = () => {
	const [putIsLoading, setPutputIsLoading] = useState(false)
	const [putError, setPutError] = useState(null)
	const [putResponse, setPutRespons] = useState(null)

	const handlePut = async (url, obj, e) => {
		e.preventDefault()
		const TOKEN = sessionStorage.getItem('token')
		setPutputIsLoading(true)
		setPutError(null)
		setPutRespons(null)

		await fetch(url, {
			method: 'PUT',
			headers: {
				authorization: 'bearer ' + TOKEN,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then(res => res.json())
			.then(res => setPutRespons(res))
			.catch(err => setPutError(err))
			.finally(setPutputIsLoading(false))
	}

	return {
		putIsLoading,
		putError,
		putResponse,
		handlePut,
	}
}
export default usePutData
