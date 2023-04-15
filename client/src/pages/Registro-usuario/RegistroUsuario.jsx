/* eslint-disable no-undef */
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import logo from '../../assets/logo_Stocker.png'
import usePostData from '../../hooks/UseFetch/usePostData'
function RegistroUsuario() {
	const URL = 'https://stocker-api.fly.dev/api/v1/users/register'
	const { error, isLoading, responseData, handlePost } = usePostData()
	const navigate = useNavigate()
	const [data, setData] = useState({})
	const [nameCheck, setNameCheck] = useState(false)
	const [mailCheck, setMailCheck] = useState(false)
	const [passCheck, setPassCheck] = useState(false)
	const [repeatPassCheck, setrepeatPassCheck] = useState(true)
	const [isActive, setIsActive] = useState(false)
	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	useEffect(() => {
		if (nameCheck || mailCheck || passCheck || repeatPassCheck)
			setIsActive(true)
		if (!nameCheck & !mailCheck & !passCheck & !repeatPassCheck)
			setIsActive(false)
	}, [nameCheck, mailCheck, passCheck, repeatPassCheck])

	const handleNameBLur = e => {
		const nameFormatTest = /^[A-Z]+$/i
		const verifiedName = data[e.target.name]
		if (!nameFormatTest.test(verifiedName) || e.target.value === '') {
			errorName.classList.remove('hidden')
			setNameCheck(true)
		} else {
			errorName.classList.add('hidden')
			setNameCheck(false)
		}
	}
	const handleEmailBLur = e => {
		const emailFormatTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
		const verifiedEmail = data[e.target.name]
		if (!emailFormatTest.test(verifiedEmail) || e.target.value === '')
			errorMail.classList.remove('hidden')
		setMailCheck(true)
		if (emailFormatTest.test(verifiedEmail) & (e.target.value !== '')) {
			errorMail.classList.add('hidden')
			setMailCheck(false)
		}
	}
	const handlePassBLur = e => {
		if (e.target.value === '') {
			errorPassword.classList.remove('hidden')
			setPassCheck(true)
		} else {
			errorPassword.classList.add('hidden')
			setPassCheck(false)
		}
	}
	const handleRepeatPassBLur = e => {
		if (data.password !== e.target.value || e.target.value === '') {
			setrepeatPassCheck(true)
			errorRepeatedPassword.classList.remove('hidden')
		}
		if ((data.password === e.target.value) & (e.target.value !== '')) {
			setrepeatPassCheck(false)
			errorRepeatedPassword.classList.add('hidden')
		}
	}
	const handleSubmit = async e => {
		e.preventDefault()
		console.log(data)
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
			/{' '}
			<main
				id='login'
				className='flex flex-col flex-grow-2 justify-start w-full px-4 pb-4 text-center box-border h-full min-h-full '
			>
				{isLoading && <h1>Cargando...</h1>}
				<div className='w-238.33 h-fit flex flex-col items-center'>
					<img className='' src={logo} alt='Stocker Logo' />
					<h2>Crear tu cuenta</h2>
				</div>
				<form
					id='Form'
					action=''
					className=' flex flex-col items-center w-full min-h-full gap-y-2'
				>
					<div className='flex flex-col w-full justify-between gap-y-1'>
						<label
							htmlFor='user'
							className='text-left text-f14 text-labeltexto'
						>
							Ingresa tu nombre
						</label>
						<input
							className='py-3 pl-3 box-border border-1 border-solid border-black rounded-xl placeholder-black'
							type='text'
							name='full_name'
							id='full_name'
							onChange={handleChange}
							onBlur={handleNameBLur}
							placeholder='Ingrese usuario'
							required
						/>
						<span
							id='errorName'
							className='hidden text-f12 text-error text-left'
						>
							El nombre no puede incluir números ni símbolos
						</span>
					</div>
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
							placeholder='Ingrese corroe electónico'
							required
						/>
						<span
							id='errorMail'
							className='hidden text-f12 text-error text-left'
						>
							Ingrese un correo válido
						</span>
					</div>
					<div className='flex flex-col w-full justify-between gap-y-1'>
						<label
							htmlFor='password'
							className='text-left text-f14 text-labeltexto'
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
							id='errorPassword'
							className='hidden text-f12 text-error text-left'
						>
							Ingrese una contraseña válida
						</span>
					</div>
					<div className='flex flex-col w-full justify-between gap-y-1'>
						<label
							htmlFor='password'
							className='text-left text-f14 text-labeltexto'
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
							placeholder='confirme contraseña'
							required
						/>
						<span
							id='errorRepeatedPassword'
							className='hidden text-f12 text-error text-left'
						>
							Las contraseñas no coinciden
						</span>
					</div>

					<input
						type='submit'
						name=''
						disabled={isActive}
						value='Crear cuenta'
						onClick={handleSubmit}
						className='bg-secundario disabled:bg-desactivado disabled:text-secundario3 text-primario py-3 rounded-xl w-full font-bold mt-auto'
					/>
					<p className='text-f12'>¿Aún no tienes cuenta?</p>
				</form>
			</main>
		</>
	)
}

export default RegistroUsuario
