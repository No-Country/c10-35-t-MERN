import { FaBeer } from 'react-icons/fa'
function Login() {
	return (
		<div className='flex flex-col'>
			<section>
				<div className='flex flex-col justify-center text-center w-full'>
					<h1>Inicia sesión</h1>
					<form
						action=''
						className='w-full flex flex-col  items-center justify-center text-left gap-y-2.5 py-2'
					>
						<div className='flex flex-col  w-4/5 justify-between gap-y-1'>
							<label htmlFor='user' className='text-xs text-slate-400'>
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
							<label htmlFor='password' className='text-xs text-slate-400'>
								Contraseña:
							</label>
							<input
								type='password'
								name='password'
								id='password'
								placeholder='Ingrese contraseña'
							/>
						</div>
						<div>
							<h3>
								{' '}
								Lets go for a <FaBeer />?{' '}
							</h3>
						</div>
						<input
							type='submit'
							name=''
							id='submit'
							value='Login'
							className='bg-secondary w-4/5 font-bold'
						/>
					</form>
				</div>
			</section>
		</div>
	)
}

export default Login
