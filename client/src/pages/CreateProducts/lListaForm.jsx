import React from 'react'

const lListaForm = () => {
  return (
    <div className='w-375 h-469  mt-343 left-0 bg-primario3 absolute rounded-tr-3xl rounded-tl-3xl md:w-566 md:h-418 md:gap-4 md:flex-none md:grow-0 md:order-none md:flex md:flex-col md:ml-16  md:bg-white md:mt-280'>
    {/* ------desde aca empiezan los inputs---- */}

    <div className='w-341 h-70 top-0 left-4 absolute flex flex-col items-start p-0 gap-1 md:w-607 md:mt-0 md:mb-0 md:h-18 md:pb-2'>
        <label
            id='labelInput'
            className='w-40 h-18 md:h-20 md:mb-4 md:pb-1'
        >
            nombre
        </label>
        <input
            type='text'
            id='nombre'
            name='nombre'
            value={form.nombre}
            onBlur={handleBlur}
            onChange={handleChange}
            
            className='w-341 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl order-1 grow-0 px-3 py-4 gap-2.5 box-border md:w-556
'
        ></input>
        {errors.nombre && (
            <p className='md:mb-1 mr-2' id='errorp'>
                {errors.nombre}
            </p>
        )}
    </div>

    {/* ---------------- primer grupo-------- */}
    <div className='md:w-72 '>
        <div id='divInput' className='left-4 top-24  md:top-84'>
            <label id='labelInput' htmlFor='' className='w-122 h-18'>
                cantidad
            </label>

            <input
                type='number'
                id='inputForm'
                name='cantidad'
                value={form.cantidad}
                onBlur={handleBlur}
                onChange={handleChange}
            
            ></input>
        </div>
        {errors.cantidad && (
            <p
                id='errorp'
                className='md:mt-195 md:ml-2 mt-164 ml-3 pt-1'
            >
                {errors.cantidad}
            </p>
        )}
<div
            id='divInput'
            className='left-200 top-24 md:left-305 md:top-84 '
        >
            <label id='labelInput' className='w-133'>
                unidades
            </label>
            <select
                className='w-40 h-h48 bg-white border-solid border-1 border-secundario3 rounded-xl flex-none order-1 grow-0 px-3 py-2 gap-2.5 box-border text-base font-secundaria  text-secundario items-center  md:w-266'
                name='unidades'
                onChange={handleChange}
            >
                <option id='' value=''>
                    Seleciona unidad
                </option>
                <option id='unidades' value='unidades'>
                    Unidades
                </option>
                <option id='Kg' value='Kg'>
                    Kg
                </option>
                <option id='Mts' value='Mts'>
                    Mts
                </option>
                <option id='Lts' value='Lts'>
                    Lts
                </option>
            </select>
        </div>
        
    </div>
    {/* --------------- segundo grupo---------- */}
    <div>
        <div id='divInput' className='left-4 top-178'>
            <label id='labelInput' htmlFor='' className='w-102'>
                costo
            </label>
            <input
                type='number'
                id='inputForm'
                name='costo'
                value={form.costo}
                onBlur={handleBlur}
                onChange={handleChange}
        
            ></input>
            {errors.costo && (
                <p className=' md:ml-2 pr-6' id='errorp'>
                    {errors.costo}
                </p>
            )}
        </div>
        <div className='md:hidden'>
            <div id='divInput' className='top-178 left-200 md:left-305'>
                <label id='labelInput' htmlFor='' className='w-107'>
                    costo Total
                </label>
                <input
                    type='number'
                    id='inputForm'
                    name='total'
                    value={form.total}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>
                {errors.total && (
                    <p className='pr-6' id='errorp'>
                        {errors.total}
                    </p>
                )}
            </div>
        </div>
        <div className='hidden md:left-305 md:w-555  md:h-52 md:top-214 md:gap-8 md:flex md:flex-col md:p-0 md:absolute'>
            <div className='md:text-start'>
                <label
                    htmlFor=''
                    className='md:w-200 md:text-start md:h-8 md:pt-8  md:font-secundaria md:text-lg md:font-normal md:text-labeltexto  md:grow-0 md:order-none'
                >
                    categoria
                </label>
                <input
                    type='text'
                    name='categorias'
                    value={form.categorias}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className='md:w-266
                md:h-h48 
                md:bg-white md:border-solid md:border-1 md:border-secundario3 md:rounded-xl  md:order-1 md:grow-0 md:px-3 md:py-4 md:gap-2.5 md:box-border'
                ></input>
                {<errors className='categoria'></errors> && (
                    <p className='md:font-secundaria md:text-xs md:font-normalmd: text-error md:w-48 md:h-4  md:grow-0 md:order-2'>
                        {errors.categorias}
                    </p>
                )}
            </div>
        </div>
    </div>

    {/* ----------tercer grupo----------- */}
    <div>
        <div id='divInput' className='left-4 top-266'>
            <label id='labelInput' className='w-107' htmlFor=''>
                precio
            </label>
            <input
                type='number'
                id='inputForm'
                name='precio'
                value={form.precio}
                onBlur={handleBlur}
                onChange={handleChange}
            
            ></input>
            {errors.precio && (
                <p className='pr-6' id='errorp'>
                    {errors.precio}
                </p>
            )}
        </div>

        <div id='divInput' className='top-266 left-200 md:left-305'>
            <label id='labelInput' className='w-156' htmlFor=''>
                alerta
            </label>
            <input
                type='number'
                id='inputForm'
                name='alerta'
                value={form.alerta}
                onBlur={handleBlur}
                onChange={handleChange}
            
            ></input>
            {errors.alerta && (
                <p className='pr-6' id='errorp'>
                    {errors.alerta}
                </p>
            )}
        </div>
    </div>
    {/* -------------cuarto grupo----------------- */}
    <div className=''>
        <button
            className='w-40 h-h48  top-96   md:top-418 md:w-266 left-4 rounded-xl p-2.5 gap-2.5 bg-acento2 flex flex-row justify-center items-center absolute'
            onClick={() =>setModal(true)}
        >
            <div className=' text-primario w-120 h-22 font-secundaria not-italic font-bold text-base  grow-0order-0 '>
                Cargar Excel
            </div>
        </button>

        <button
            type='submit'
            value='send'
            onClick={() => setVisible(true)}
            className='w-40 h-h48 top-96 md:top-418 md:w-266 left-200 md:left-305 rounded-xl p-2.5 gap-2.5 bg-secundario flex flex-row justify-center items-center absolute'
        >
            <div className=' text-primario font-secundaria w-78 h-22 font-bold text-base not-italic  order-0 grow-0 '>
                Continuar
            </div>
        </button>

        {visible ? <ModalProductocargado texto={"Productos cargados exitosamente!"}/> : null}
        {modal ? <ModalExcel setModal={setModal} /> : null}
        {/* {response? null:  <ModalFallaCarga setVisible={setVisible}/>} */}
    </div>
</div> 
  )
}

export default lListaForm