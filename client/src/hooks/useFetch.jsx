import { useEffect, useState } from 'react'

const useFetch = url => {
	const [response, setResponse] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const abortController = new AbortController()
		setLoading(true)
		fetch(url, { signal: AbortController.signal })
			.then(res => res.json())
			.then(res => setResponse(res))
			.catch(err => setError(err))
			.finally(setLoading(false))
		return () => abortController.abort()
	}, [])
	return { response, loading, error }
}
export default useFetch

export const usePostdata = (url, obj) => {
	const [response, setResponse] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const abortController = new AbortController()
		setLoading(true)
		fetch(url, {
			signal: AbortController.signal,
			body: obj,
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
		})
			.then(res => res.json())
			.then(res => setResponse(res))
			.catch(err => setError(err))
			.finally(setLoading(false))
		return () => abortController.abort()
	}, [])
	return { response, loading, error }
}
