import { Link } from 'react-router-dom'
import inventarioUrl from './icon-inventario.svg'
import crearProductoUrl from './icon-crear-producto.svg'
import movimientosUrl from './icon-movimientos.svg'
import reportesUrl from './icon-reportes.svg'

export default function DashboardMenu() {
    return (
        <nav className='grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8 mt-8 mx-4 font-secundaria'>
            <Link to={`/`}>
                <button className='group shadow-xl flex flex-col items-center justify-center w-full h-40 w-40 text-center py-8 px-4 bg-white rounded-xl hover:bg-secundario delay-75'>
                    <img src={inventarioUrl} alt='Ícono de inventario' className='group-hover:text-acento'/>
                    <span className='font-base font-bold mt-4 group-hover:text-white'>
                        Inventario
                    </span>
                </button>
            </Link>
            <Link to={`/`}>
                <button className='group shadow-xl flex flex-col items-center justify-center w-full h-40 w-40 text-center py-8 px-4 bg-white rounded-xl hover:bg-secundario delay-75'>
                    <img src={crearProductoUrl} alt='Ícono de crear producto' className='group-hover:text-acento'/>
                    <span className='font-base font-bold mt-4 group-hover:text-white'>
                        Creación de productos
                    </span>
                </button>
            </Link>
            <Link to={`/`}>
                <button className='group shadow-xl flex flex-col items-center justify-center w-full h-40 w-40 text-center py-8 px-4 bg-white rounded-xl hover:bg-secundario delay-75'>
                    <img src={movimientosUrl} alt='Ícono de movimientos' className='group-hover:text-acento'/>
                    <span className='font-base font-bold mt-4 group-hover:text-white'>
                        Movimientos
                    </span>
                </button>
            </Link>
            <Link to={`/`}>
                <button className='group shadow-xl flex flex-col items-center justify-center w-full h-40 w-40 text-center py-8 px-4 bg-white rounded-xl hover:bg-secundario delay-75'>
                    <img src={reportesUrl} alt='Ícono de reportes' className='group-hover:text-acento'/>
                    <span className='font-base font-bold mt-4 group-hover:text-white'>
                        Reportes
                    </span>
                </button>
            </Link>
        </nav>
    )
}
