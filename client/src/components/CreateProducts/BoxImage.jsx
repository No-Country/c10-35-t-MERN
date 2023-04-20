import producto from '../../assets/ProdXDefecto.png'

export const BoxImage = () => {
  return (
    <div className=''>
    <img
        src={producto}
        className='w-4/6 h-180 p-0 top-28  md:top-16 left-20 border-7 rounded-xl gap-22 border-solid border-acento2 box-border justify-center items-center absolute md:mt-20 md:w-271 md:left-200 md:rounded-10  md:border-secundario md:border-2'
    ></img>
    <p className='text-xs font-secundaria font-normal text-secundario absolute w-full h-18 left-93 top-300 mt-0 md:text-acento2  md:w-32 md:h-5 md:left-355 md:top-300 md:pt-3 md:font-bold md:text-base md:mt-3 '>
        cargar foto
    </p>
</div>
  )
}
