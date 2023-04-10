import { GrGoogle, GrFacebook } from 'react-icons/gr'
import { useNavigate } from 'react-router'
function Login() {
	const navigate = useNavigate()
	const handleSubmit = e => {
		e.preventDefault()
		if (form.user.value === '' || form.password.value === '')
			return alert("campos vacios")
		navigate('/inicio')
	}
	return (
		<section className='flex flex-col h-screen py-7 text-center '>
			<p className='font-secundaria font-normal'>Bienvenidos a</p>
			<h1>STOKER</h1>
			<h6>Inicia sesión</h6>
			<form
				id='form'
				action=''
				className=' flex flex-col items-center w-full h-full gap-y-2'
			>
				<div className='flex flex-col  w-4/5 justify-between gap-y-1'>
					<label htmlFor='user' className='text-left text-xs'>
						Usuario:
					</label>
					<input
						type='text'
						name='user'
						id='user'
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
	)
}

export default Login
