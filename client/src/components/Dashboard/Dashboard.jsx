import { SlMenu } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const dashboardCategories = [
        {id: 1, name: 'Inventario', route: 'inventario'}, 
        {id: 2, name: 'Creación de productos', route: 'crear'}, 
        {id: 3, name: 'Registro de movimientos', route: 'movimientos'},
        {id: 4, name: 'Reportes', route: 'reportes'}
    ];

    return (
        <div className='m-auto max-w-xs'>
            <nav className='flex justify-between items-center px-2 bg-blue-200'>
                <h1>
                    Inicio
                </h1>
                <SlMenu />
            </nav>
            <nav className='grid grid-cols-2 grid-rows-2 gap-5 mt-4 mx-2'>
                {
                    dashboardCategories 
                    ? dashboardCategories.map((category) => (
                        <Link to={`/${category.route}`} key={category.id}>
                            <h2 className='flex items-center justify-center w-full h-28 text-center py-4 bg-blue-200'>
                                {category.name}
                            </h2>
                        </Link>
                    ))
                    : <p>Loading...</p>
                }
            </nav>
            <section className='mt-8'>
                <h3 className='text-left'>
                    Resumen de inventario
                </h3>
                <table className='table-fixed mt-2 border border-gray-400 w-full text-center' >
                    <tr>
                        <th className='pt-4 pb-2 px-4'>
                            Cantidad de items
                        </th>
                        <th className='pt-4 pb-2 px-4'>
                            Unidad(und)
                        </th>
                    </tr>
                    <tr className='bg-blue-200'>
                        <td className='py-2'>
                            items
                        </td>
                        <td className='py-2'>
                            4
                        </td>
                    </tr>
                    <tr>
                        <th className='pt-6 pb-2'>
                            Total und
                        </th>
                        <th className='pt-6 pb-2'>
                            Total valor
                        </th>
                    </tr>
                    <tr className='bg-blue-200'>
                        <td className='py-2'>
                            500
                        </td>
                        <td className='py-2'>
                            100000
                        </td>
                    </tr>
                </table>
            </section>
        </div>
    )
}