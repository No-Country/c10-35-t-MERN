import { useState } from 'react'

const usePostData = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [responseData, setResponseData] = useState(null)

	const handlePost = async (url, obj, e) => {
		e.preventDefault()
		setIsLoading(true)
		setError(null)
		setResponseData(null)

		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then(res => res.json())
			.then(res => setResponseData(res))
			.catch(err => setError(err))
			.finally(() => setIsLoading(false))
	}

	return {
		isLoading,
		error,
		responseData,
		handlePost,
	}
}
export default usePostData
