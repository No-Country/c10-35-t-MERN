import { Link } from 'react-router-dom';
import { RiDashboardFill, RiFileTextLine, RiNotification3Line } from 'react-icons/ri';

export default function NavbarMobile() {

    return (
        <nav className='fixed bottom-0 flex justify-between w-full px-4 py-2 text-secundario bg-white'>
            <Link to='/'>
                <button className='group flex flex-col items-center justify-center w-16 h-16 p-2 transition duration-200 ease-in-out border rounded-lg flex-column font-secundaria border-secundario focus:bg-secundario active:bg-secundario active:text-acento active:last:text-white'>
                    <RiDashboardFill className='group-focus:text-acento w-6 h-6'/>
                    <span className='group-focus:text-white mt-1 text-f8 font-bold'>
                        Inicio
                    </span>
                </button>
            </Link>
            <Link to='/'>
                <button className='group flex flex-col items-center justify-center w-16 h-16 p-2 transition duration-200 ease-in-out border rounded-lg flex-column font-secundaria border-secundario focus:bg-secundario active:bg-secundario active:text-acento active:last:text-white'>
                    <RiFileTextLine className='group-focus:text-acento w-6 h-6'/>
                    <span className='group-focus:text-white mt-1 text-f8 font-bold'>
                        Inventario
                    </span>
                </button>
            </Link>
            <Link to='/'>
                <button className='group flex flex-col items-center justify-center w-16 h-16 p-2 transition duration-200 ease-in-out border rounded-lg flex-column font-secundaria border-secundario focus:bg-secundario active:bg-secundario active:text-acento active:last:text-white'>
                    <RiNotification3Line className='group-focus:text-acento w-6 h-6'/>
                    <span className='group-focus:text-white mt-1 text-f8 font-bold'>
                        Notificaciones
                    </span>
                </button>
            </Link>
        </nav>
    )
}