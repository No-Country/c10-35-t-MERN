import { Link } from 'react-router-dom'
import inventarioUrl from './icon-inventario.svg'
import crearProductoUrl from './icon-crear-producto.svg'
import movimientosUrl from './icon-movimientos.svg'
import reportesUrl from './icon-reportes.svg'

export default function DashboardMenu() {
    const dashboardCategories = [
        {id: 1, img: inventarioUrl, name: 'Inventario', route: 'inventario'},
        {id: 2, img: crearProductoUrl, name: 'Creación de productos', route: 'crear-producto'},
        {id: 3, img: movimientosUrl, name: 'Movimientos', route: 'registro-de-movimientos'},
        {id: 4, img: reportesUrl, name: 'Reportes', route: 'reportes'}
    ]

    return (
        <nav className='grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8 mt-8 mx-4 font-secundaria'>
            { dashboardCategories 
            ?   dashboardCategories.map((category) => (
                    <Link to={`/${category.route}`} key={category.id}>
                        <button className='group shadow-sombra flex flex-col items-center justify-center w-full h-40 w-40 text-center py-8 px-4 bg-white rounded-xl hover:bg-secundario delay-75'>
                            <img src={category.img} alt={`Ícono de ${category.name}`} className='group-hover:text-acento'/>
                            <h4 className='mt-4 group-hover:text-white'>
                                {category.name}
                            </h4>
                        </button>
                    </Link>
                ))
            : <p>Loading...</p>
            }
        </nav>
    )
>>>>>>> 5c3d507 (Refactor: Style modification, create components (Cards, Modals, Buttons), create pages (Ingresos, Egresos, Productos a mover))
}
