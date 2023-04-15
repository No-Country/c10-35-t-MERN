/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { GrGoogle, GrFacebook } from 'react-icons/gr'
import logo from '../../assets/logo_Stocker.png'
import Onboarding from '../Onboarding/Onboarding'
import usePostData from '../../hooks/UseFetch/usePostData'
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

			<main
				id='login'
				className='flex flex-col justify-start h-screen w-full px-4 pt-90 pb-4 text-center box-border'
			>
				{isLoading && <h1>Cargando...</h1>}
				<div className='w-238.33 h-fit flex flex-col items-center'>
					<h2>Bienvenidos a</h2>
					<img className='my-8' src={logo} alt='Stocker Logo' />
					<h2>Inicia sesión</h2>
				</div>
				<form
					id='Form'
					action=''
					className=' flex flex-col items-center w-full min-h-full gap-y-2'
				>
					<div className='flex flex-col w-full justify-between gap-y-1'>
						<label htmlFor='user' className='text-left text-xs text-labeltexto'>
							Ingresa tu correo
						</label>
						<input
							className='py-3 pl-3 box-border border-1 border-solid border-black rounded-xl placeholder-black'
							type='email'
							name='email'
							id='email'
							onChange={handleChange}
							onBlur={handleEmailBLur}
							placeholder='Ingrese usuario'
						/>
					</div>
					<div className='flex flex-col w-full justify-between gap-y-1'>
						<label
							htmlFor='password'
							className='text-left text-xs text-labeltexto'
						>
							Ingresa tu contraseña
						</label>
						<input
							className='py-3 pl-3 box-border border-1 border-solid border-black rounded-xl placeholder-black'
							type='password'
							name='password'
							id='password'
							onChange={handleChange}
							onBlur={handlePassBLur}
							placeholder='Ingrese contraseña'
						/>
					</div>
					<div className='flex flex-col w-full justify-between gap-y-1'>
						<label
							htmlFor='password'
							className='text-left text-xs text-labeltexto'
						>
							Repite tu contraseña:
						</label>
						<input
							className='py-3 pl-3 box-border border-1 border-solid border-black rounded-xl placeholder-black'
							type='password'
							name='repeatedPassword'
							id='repeatedPassword'
							onChange={handleChange}
							onBlur={handleRepeatPassBLur}
							placeholder='Ingrese contraseña'
						/>
					</div>

					<input
						type='submit'
						name=''
						id='submit'
						value='Iniciar sesión'
						onClick={handleSubmit}
						className='bg-secundario text-primario py-3 rounded-xl w-full font-bold mt-auto'
					/>
					<p className='text-f12'>¿Aún no tienes cuenta?</p>
				</form>
			</main>
		</>
	)
}

export default Login
