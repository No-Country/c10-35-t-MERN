import { NavLink } from 'react-router-dom';
import { RiDashboardLine, RiFileTextLine, RiNotification3Line } from 'react-icons/ri';

export default function NavbarMobile() {
    return (
        <nav className='sticky bottom-0 left-0 z-50 flex justify-between w-full px-4 py-2 text-secundario bg-white'>
            <NavLink to='/inicio' className={({ isActive }) =>
                isActive ? "rounded-md bg-secundario text-acento [&>button>span]:text-white" : ""
            }>
                <button className='group flex flex-col items-center justify-center w-16 h-16 p-2 transition duration-200 ease-in-out border rounded-lg flex-column font-secundaria border-secundario focus:bg-secundario'>
                    <RiDashboardLine className='group-focus:text-acento w-6 h-6'/>
                    <span className='group-focus:text-white mt-1 iconos'>
                        Inicio
                    </span>
                </button>
            </NavLink>
            <NavLink to='/inventario' className={({ isActive }) =>
                isActive ? "rounded-md bg-secundario text-acento [&>button>span]:text-white" : ""
            }>
                <button className='group flex flex-col items-center justify-center w-16 h-16 p-2 transition duration-200 ease-in-out border rounded-lg flex-column font-secundaria border-secundario focus:bg-secundario'>
                    <RiFileTextLine className='group-focus:text-acento w-6 h-6'/>
                    <span className='group-focus:text-white mt-1 iconos'>
                        Inventario
                    </span>
                </button>
            </NavLink>
            <NavLink to='/notificaciones' className={({ isActive }) =>
                isActive ? "rounded-md bg-secundario text-acento [&>button>span]:text-white" : ""
            }>
                <button className='group flex flex-col items-center justify-center w-16 h-16 p-2 transition duration-200 ease-in-out border rounded-lg flex-column font-secundaria border-secundario focus:bg-secundario'>
                    <RiNotification3Line className='group-focus:text-acento w-6 h-6'/>
                    <span className='group-focus:text-white mt-1 iconos'>
                        Notificaciones
                    </span>
                </button>
            </NavLink>
        </nav>
    )
}