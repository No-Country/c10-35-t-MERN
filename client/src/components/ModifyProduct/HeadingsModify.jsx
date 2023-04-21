import { RiArrowLeftSLine, RiCloseCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const HeadingsModify = () => {
  return (
    <div>
    {/* --------contenedor general de barra superior -------- */}
    <div className='flex-none order-1 grow-0 md:mt-3'>
        {/* --------contenedor de items h1 y botones------- */}
        <div className='w-373 h-43  mt-2 top-31 left-0 px-0 py-4 gap-3 flex flex-row items-center  flex-none order-1 grow-0 md:pt-8  '>
            <Link
                to={'/inventario'}
                className='flex-none order-0 grow-0 w-6 h-6 top-2.5 left-4 md:hidden'
            >
                <RiArrowLeftSLine className='w-8 h-8' />
            </Link>

            <h1             
            className=' w-335 h-43 left-l52 flex items-end font-primaria font-normal text-3xl md:top-0.5 md:w-56 md:h-31 md:flex-none md:order-none md:grow-0  md:font-secundaria md:text-2xl md:font-bold md:ml-64 md:mt-0'>
                Modificar Producto
            </h1>

            <Link to={'/inventario'}>
                <div className='ml-14 mr-3'>
                    <RiCloseCircleFill className='w-6 h-6 top-2.5 left-335 flex-none order-2 grow-0 ml-6 md:w-9 md:h-9 md:order-1 md:ml-107 md:mb-2' />
                </div>
            </Link>
        </div>
    </div>
</div>
  )
}

export default HeadingsModify