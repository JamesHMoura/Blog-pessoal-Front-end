import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import img from '../../assets/sonic3.gif'

function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-indigo-900 text-white flex justify-center max-h-[80px]'>
          <div className="container flex justify-between text-lg">
            <div className='flex justify-center items-center'>
            <img src={img} alt="" className='imagem h-[100px]' />
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
            </div>
            

            <div className='flex gap-4 items-center'>
              <Link to='/postagens' className='hover:underline'>Postagens</Link>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar