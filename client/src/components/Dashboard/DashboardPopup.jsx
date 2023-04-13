import { Link } from 'react-router-dom'

export default function DashboardPopup() {
    return (
        <section className='w-72 bg-primario rounded-xl mx-auto mt-40 p-8 flex flex-col gap-y-8'>
            <h3 className='text-secundario'>
                ¿Qué deseas registrar?
            </h3>
            <Link to='/egresos'>
                <button className='font-secundaria font-bold bg-secundario text-primario rounded-xl p-3 w-40 hover:bg-secundario2 focus:bg-secundario3 focus:text-secundario'>
                    Egresos
                </button>
            </Link>
            <Link to='/ingresos'>
                <button className='font-secundaria font-bold bg-secundario text-primario rounded-xl p-3 w-40 hover:bg-secundario2 focus:bg-secundario3 focus:text-secundario'>
                    Ingresos
                </button>
            </Link>
        </section>
    )
}