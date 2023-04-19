import crearProductoUrl from './icon-crear-producto.svg'

export default function DashboardResume() {
    const dashboardResumeProducts = [
        {id: 1, img: crearProductoUrl, name: 'Gaseosa Limón', stock: 120, total: 3600},
        {id: 2, img: crearProductoUrl, name: 'Detergente', stock: 50, total: 7200},
        {id: 3, img: crearProductoUrl, name: 'Galletas', stock: 33, total: 2500},
        {id: 4, img: crearProductoUrl, name: 'Galletas', stock: 33, total: 2500},
        {id: 5, img: crearProductoUrl, name: 'Galletas', stock: 33, total: 2500}
    ]

    return (
    <section className='mt-8 bg-primario rounded-t-3xl font-secundaria p-4 h-240 overflow-auto no-scrollbar'>
        <h3 className='mb-4 pl-2 text-left'>
            Resumen de inventario
        </h3>
        {
            dashboardResumeProducts
            ? dashboardResumeProducts.map((product) => (
                <section key={product.id} className='shadow-sombra my-2 rounded-xl flex items-center p-2.5 w-w343 h-h72 bg-white'>
                    <img 
                        src={product.img} 
                        alt='Ícono de crear producto' 
                        className='flex-1 mr-2 w-16 h-11 object-stretch rounded border-2 border-acento2'
                    />
                    <div className='flex-2'>
                        <h4 className='mb-1 text-left'>
                            {product.name}
                        </h4>
                        <div className='flex w-64 justify-between'>
                            <p className='font-bold'>
                                Stock:
                            </p>
                            <p>
                                {product.stock}
                            </p>
                            <p className='font-bold ml-4'>
                                Total:
                            </p>
                            <p className='mr-1'>
                                $ {product.total}
                            </p>
                        </div>
                    </div>
                </section>
            ))
            : <p>Loading... </p>
        }
    </section>
    )
}
