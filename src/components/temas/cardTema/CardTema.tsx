import React from 'react'
import Tema from '../../../models/Tema'
import { Link } from 'react-router-dom'
import {Trash, PencilLine } from '@phosphor-icons/react'

interface CardTemaProps{
    tema: Tema
}

function CardTema({tema}: CardTemaProps) {
  return (
    <div className='border-2 border-black rounded'>
    <h3 className='text-xl font-bold bg-slate-500 text-white'>Tema</h3>
    <p className='py-2 py-1' >{tema.tema}</p>
    <div className='flex justify-end gap-4'>
      
      <Link to={`/editarTema/${tema.id}`} className='rounded-full w-10 h-10 text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center'>
        <button><PencilLine size={32} /></button>
      </Link>
      <Link to={`/deletarTema/${tema.id}`} className='rounded-full w-10 h-10 text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center'>
        <button><Trash size={32} /></button>
      </Link>
    </div>
</div>
  )
}

export default CardTema