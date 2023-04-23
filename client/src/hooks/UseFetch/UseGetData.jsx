import { useEffect, useState } from 'react'
import useIsMounted from '../useIsMounted'

const useGetData = url => {
	const [getData, setGetData] = useState(null)
	const [isGetLoading, setIsGetLoading] = useState(true)
	const [getError, setGetError] = useState(null)
	const TOKEN = sessionStorage.getItem('token')
	const isMounted = useIsMounted()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					headers: { authorization: 'bearer ' + TOKEN },
				})

				const result = await response.json()
				console.log('montado')
				setGetData(result)
				setIsGetLoading(false)
			} catch (error) {
				if (isMounted) {
					console.log(error)
					setGetError(error)
					setIsGetLoading(false)
				}
			}
		}

		fetchData()
		return () => (useIsMounted.current = false)
	}, [url, isMounted])

	return { getData, isGetLoading, getError, setGetData }
}
export default useGetData
