/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_Stocker.png'
import Onboarding from '../Onboarding/Onboarding'
import usePostData from '../../hooks/UseFetch/usePostData'
function Login() {
	const URL = 'https://stocker-api.fly.dev/api/v1/users/login'
	const { error, isLoading, responseData, handlePost } = usePostData()
	const navigate = useNavigate()
	const [data, setData] = useState({})
	const [mailCheck, setMailCheck] = useState(true)
	const [passCheck, setPassCheck] = useState(true)
	const [repeatPassCheck, setrepeatPassCheck] = useState(true)
	const [isActive, setIsActive] = useState(false)
	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	useEffect(() => {
		if (mailCheck || passCheck || repeatPassCheck) setIsActive(true)
		if (!mailCheck & !passCheck & !repeatPassCheck) setIsActive(false)
	}, [mailCheck, passCheck, repeatPassCheck])
	const handleEmailBLur = e => {
		const emailFormatTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
		const verifiedEmail = data[e.target.name]
		if (!emailFormatTest.test(verifiedEmail) || e.target.value === '')
			errorUserName.classList.remove('hidden')
		setMailCheck(true)
		if (emailFormatTest.test(verifiedEmail) & (e.target.value !== '')) {
			errorUserName.classList.add('hidden')
			setMailCheck(false)
		}
	}
	const handlePassBLur = e => {
		if (e.target.value === '') {
			errorUserPass.classList.remove('hidden')
			setPassCheck(true)
		} else {
			errorUserPass.classList.add('hidden')
			setPassCheck(false)
		}
	}
	const handleRepeatPassBLur = e => {
		if (data.password !== e.target.value || e.target.value === '') {
			setrepeatPassCheck(true)
			errorRepeatedPass.classList.remove('hidden')
		}
		if ((data.password === e.target.value) & (e.target.value !== '')) {
			setrepeatPassCheck(false)
			errorRepeatedPass.classList.add('hidden')
		}
	}
	const handleSubmit = async e => {
		e.preventDefault()
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
							required
						/>
						<span
							id='errorUserName'
							className='hidden text-f12 text-error text-left'
						>
							Ingrese dirección de correo válida
						</span>
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
							required
						/>
						<span
							id='errorUserPass'
							className='hidden text-f12 text-error text-left'
						>
							Formato de contraseña incorrecto
						</span>
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
						<span
							id='errorRepeatedPass'
							className='hidden text-f12 text-error text-left'
						>
							Las contraseñas no coinciden
						</span>
					</div>

					<input
						type='submit'
						name=''
						id='submit'
						value='Iniciar sesión'
						onClick={handleSubmit}
						disabled={isActive}
						className='bg-secundario text-primario  disabled:bg-desactivado disabled:text-secundario3 py-3 rounded-xl w-full font-bold mt-auto'
					/>
				</form>
				<NavLink to='/reportes'>
					<p className='text-f12'>¿Aún no tienes cuenta?</p>
				</NavLink>
			</main>
		</>
	)
}

export default Login
