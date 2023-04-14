/* eslint-disable no-undef */
import { GrGoogle, GrFacebook } from 'react-icons/gr'
import { useNavigate } from 'react-router'
import Onboarding from '../Onboarding/Onboarding'
import usePostData from '../../hooks/UseFetch/UsePostData'
import { useEffect, useState } from 'react'
function Login() {
	const URL = 'https://stocker-api.fly.dev/api/v1/users/login'
	const { error, isLoading, responseData, handlePost } = usePostData()
	const navigate = useNavigate()
	const data = {}
	const [verify, setVerify] = useState(false)
	const handleChange = e => {
		data[e.target.name] = e.target.value
	}
	const handleEmailBLur = e => {
		if (e.target.value === '') setVerify(false)
		const emailFormatTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
		const verifiedEmail = data[e.target.name]
		if (!emailFormatTest.test(verifiedEmail)) setVerify(false)
	}
	const handlePassBLur = e => {
		if (e.target.value === '') setVerify(false)
	}
	const handleRepeatPassBLur = e => {
		if (e.target.value === '') setVerify(false)
		if (data.pass !== e.target.value) setVerify(false)
	}
	const handleSubmit = async e => {
		e.preventDefault()
		if (!verify) return window.alert('arregle errores')
		// return alert('campos vacios')
		if (password !== repeatedPassword)
			return alert('Las contraseñas no coinciden')
		const userData = {
			email,
			password,
			repeatedPassword,
		}
		await handlePost(URL, userData, e)
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
			{responseData === null && <h1>CARGANDO...</h1>}

			<section
				id='login'
				className='hidden flex flex-col h-screen py-7 text-center '
			>
				<p className='font-secundaria font-normal'>Bienvenidos a</p>
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
							name='repeated_assword'
							id='repeat'
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
