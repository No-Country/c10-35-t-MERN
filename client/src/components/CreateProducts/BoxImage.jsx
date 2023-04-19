import producto from '../../assets/ProdXDefecto.png'

export const BoxImage = () => {
  return (
    <div className='flex-none md:bg-yellow-500'>
    <img
        src={producto}
        className='w-250 h-180 p-0 top-28 left-16 border-7 rounded-xl gap-22 border-solid border-acento2 box-border flex flex-row justify-center items-center absolute md:mt-14 md:w-305 md:h-221 md:left-214 md:rounded-10  md:gap-2.5 md:border-secundario md:border-2 '
    ></img>
    <p className='text-xs font-secundaria font-normal text-secundario absolute w-72 h-18 left-133 top-297 mt-0 md:text-acento2 md:w-28 md:h-5 md:left-418 md:top-375  md:font-bold md:text-base md:mt-3 md:mb-1'>
        cargar foto
    </p>
</div>
  )
}
