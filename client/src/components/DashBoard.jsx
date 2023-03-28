function DashBoard() {
	return (
		<div className='flex flex-col bg-red-400'>
			<header>
				<nav className='text-center'>
					<h1>NAVBAR</h1>
				</nav>
			</header>
			<section>
				<div className='bg-yellow-200 flex flex-wrap w-full gap-2 justify-center text-center'>
					<div className='h-14 leading-10 w-32 bg-slate-300'>
						<h2>Inventario</h2>
					</div>
					<div className='h-14 w-32 bg-slate-300'>
						<h2>Creación de productos</h2>
					</div>
					<div className='h-14 w-32 bg-slate-300'>
						<h2>Registro de inventario</h2>
					</div>
					<div className='h-14 w-32 bg-slate-300'>
						<h2>Reportes</h2>
					</div>
				</div>
			</section>
			<section className='flex flex-col justify-center text-center'>
				<h3>Resumen de inventario</h3>
				<table>
					<thead>
						<tr>
							<th>Cantidad items</th>
							<th>Unidad und</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>items</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Total</td>
							<td>Total valor</td>
						</tr>
						<tr>
							<td>500</td>
							<td>100000</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	)
}

export default DashBoard
