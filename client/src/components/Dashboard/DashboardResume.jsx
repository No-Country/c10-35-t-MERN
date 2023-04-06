import crearProductoUrl from './icon-crear-producto.svg'

export default function DashboardResume() {
    return (
    <section className='mt-8 bg-primario rounded-t-3xl font-secundaria p-4'>
        <p className='mb-4 font-bold text-xl pl-2'>
            Resumen de inventario
        </p>
        <section className='shadow-xl my-2 rounded-xl flex items-center p-2.5 w-w343 h-h72 bg-white'>
            <img src={crearProductoUrl} alt='Ícono de crear producto' className='flex-1 mr-2 w-16 h-11 object-stretch rounded border-2 border-acentoBlue'/>
            <div className='flex-2'>
                <p className='font-bold mb-1'>
                    Gaseosa Limón
                </p>
                <div className='flex w-64 justify-between'>
                    <p className='font-bold'>
                        Stock:
                    </p>
                    <p>
                        120
                    </p>
                    <p className='font-bold ml-4'>
                        Total:
                    </p>
                    <p className='mr-1'>
                        $ 3600
                    </p>
                </div>
            </div>
        </section>
        <section className='shadow-xl my-2 rounded-xl flex items-center p-2.5 w-w343 h-h72 bg-white'>
            <img src={crearProductoUrl} alt='Ícono de crear producto' className='flex-1 mr-2 w-16 h-11 object-stretch rounded border-2 border-acentoBlue'/>
            <div className='flex-2'>
                <p className='font-bold mb-1'>
                    Detergente
                </p>
                <div className='flex w-64 justify-between'>
                    <p className='font-bold'>
                        Stock:
                    </p>
                    <p>
                        50
                    </p>
                    <p className='font-bold ml-4'>
                        Total:
                    </p>
                    <p className='mr-1'>
                        $ 7200
                    </p>
                </div>
            </div>
        </section>
    </section>
    )
}
