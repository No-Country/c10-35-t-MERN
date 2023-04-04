function Login() {
	return (
		<section className='flex flex-col h-screen'>
			<h1 className='text-slate-400'>www.stoker.com</h1>
			<h1>Inicia sesión</h1>

			<form
				action=''
				className='flex flex-col items-center w-full h-full gap-y-2'
			>
				<div className='flex flex-col  w-4/5 justify-between gap-y-1'>
					<label htmlFor='user' className='text-left text-xs text-slate-400'>
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
					<label
						htmlFor='password'
						className='text-left text-xs text-slate-400'
					>
						Contraseña:
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Ingrese contraseña'
					/>
				</div>
				<div className=' mt-auto w-4/5 relative before:block before:h-1 before:w-14  before:absolute before:-inset-1 before:mt-auto before:mb-auto before:ml-auto before:bg-secondary after:block after:h-1 after:w-14  after:absolute after:-inset-1 after:mt-auto after:mb-auto after:mr-auto after:bg-secondary'>
					<h3>O ingresa con</h3>
				</div>

				<input
					type='submit'
					name=''
					id='submit'
					value='Login'
					className='bg-secondary w-4/5 font-bold'
				/>
				<p className=''>¿Aún no tienes cuenta?</p>
			</form>
		</section>
	)
}

export default Login
