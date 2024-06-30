import React from 'react'
import Tema from '../../../models/Tema'

interface CardTemaProps{
    tema: Tema
}

function CardTema({tema}: CardTemaProps) {
  return (
    <div className='border-2 border-black rounded'>
    <h3 className='text-xl font-bold bg-slate-500 text-white'>Tema</h3>
    <p className='py-2 py-1' >{tema.tema}</p>
    <div className='flex'>
        <button className='py-2 uppercase bg-indigo-400 hover:bg-indigo-800 w-full'>editar</button>
        <button className='py-2 uppercase bg-red-400 hover:bg-red-800 w-full'>deletar</button>
    </div>
</div>
  )
}

export default CardTema