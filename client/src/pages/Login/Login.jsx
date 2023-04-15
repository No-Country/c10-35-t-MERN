/* eslint-disable no-undef */
import { GrGoogle, GrFacebook } from 'react-icons/gr'
import { useNavigate } from 'react-router'
import Onboarding from '../Onboarding/Onboarding'
import usePostData from '../../hooks/UseFetch/usePostData'
import { useEffect, useState } from 'react'
function Login() {
	const URL = 'https://stocker-api.fly.dev/api/v1/users/login'
	const { error, isLoading, responseData, handlePost } = usePostData()
	const navigate = useNavigate()
	const [data, setData] = useState({})
	const [verify, setVerify] = useState('')
	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	const handleEmailBLur = e => {
		if (e.target.value === '') setVerify('campo vacio')
		const emailFormatTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
		const verifiedEmail = data[e.target.name]
		if (!emailFormatTest.test(verifiedEmail)) setVerify('email')
	}
	const handlePassBLur = e => {
		if (e.target.value === '') setVerify('pass vacio')
	}
	const handleRepeatPassBLur = e => {
		if (e.target.value === '') setVerify('rep pass vacio')
		if (data.password !== e.target.value) setVerify(false)
	}
	const handleSubmit = async e => {
		e.preventDefault()
		console.log(data)
		console.log(isLoading)
		if (verify === '') return window.alert(verify)
		if (password !== repeatedPassword) console.log(password, repeatedPassword)

		await handlePost(URL, data, e)
	}
	useEffect(() => {
		if ((responseData !== null) & (responseData?.message !== ''))
			return window.alert(responseData.message)
		if ((responseData !== null) & (error !== null))
			return window.alert(error.toString())
		if ((responseData !== null) & (responseData?.token !== undefined)) {
			sessionStorage.setItem('token', responseData.token)
			navigate('/inicio')
		}
	}, [responseData, error])
	return (
		<>
			<Onboarding />

			<section
				id='login'
				className='hidden flex flex-col h-screen py-7 text-center '
			>
				{isLoading && <h1>Cargando...</h1>}
				<h2 className='font-secundaria font-normal'>Bienvenidos a</h2>
				<h1>STOKER</h1>
				<h6>Inicia sesión</h6>
				<form
					id='Form'
					action=''
					className=' flex flex-col items-center w-full h-full gap-y-2'
				>
					<div className='flex flex-col  w-4/5 justify-between gap-y-1'>
						<label htmlFor='user' className='text-left text-xs'>
							Email:
						</label>
						<input
							type='email'
							name='email'
							id='email'
							onChange={handleChange}
							onBlur={handleEmailBLur}
							placeholder='Ingrese usuario'
						/>
					</div>
					<div className='flex flex-col w-4/5 justify-between gap-y-1'>
						<label htmlFor='password' className='text-left text-xs'>
							Contraseña:
						</label>
						<input
							type='password'
							name='password'
							id='password'
							onChange={handleChange}
							onBlur={handlePassBLur}
							placeholder='Ingrese contraseña'
						/>
					</div>
					<div className='flex flex-col w-4/5 justify-between gap-y-1'>
						<label htmlFor='password' className='text-left text-xs'>
							repetir Contraseña:
						</label>
						<input
							type='password'
							name='repeatedPassword'
							id='repeatedPassword'
							onChange={handleChange}
							onBlur={handleRepeatPassBLur}
							placeholder='Ingrese contraseña'
						/>
					</div>
					<div className='flex h-32 justify-center text-center mt-auto w-4/5 relative border-t-2 gap-4'>
						<p className='text-f12 bg-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2'>
							O ingresa con
						</p>
						<GrFacebook className='mt-6 text-label text-3xl' />
						<GrGoogle className='mt-6 text-label text-3xl' />
					</div>
					<input
						type='submit'
						name=''
						id='submit'
						value='Iniciar sesión'
						onClick={handleSubmit}
						className='bg-gray-300 py-3 rounded-xl w-4/5 font-bold'
					/>
					<p className='text-f12'>¿Aún no tienes cuenta?</p>
				</form>
			</section>
		</>
	)
}

export default Login
