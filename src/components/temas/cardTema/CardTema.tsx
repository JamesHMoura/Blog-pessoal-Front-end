import React from 'react'
import Tema from '../../../models/Tema'
import { Link } from 'react-router-dom'

interface CardTemaProps{
    tema: Tema
}

function CardTema({tema}: CardTemaProps) {
  return (
    <div className='border-2 border-black rounded'>
    <h3 className='text-xl font-bold bg-slate-500 text-white'>Tema</h3>
    <p className='py-2 py-1' >{tema.tema}</p>
    <div className='flex'>
      
      <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
        <button>Editar</button>
      </Link>
      <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
        <button>Deletar</button>
      </Link>
    </div>
</div>
  )
}

export default CardTema