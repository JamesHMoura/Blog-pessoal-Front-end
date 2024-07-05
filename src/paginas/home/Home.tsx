import React from 'react';
import homeLogo from '../../assets/sonic-sonic-the-hedgehog.gif'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
    return (
        <>
        <div className="min-h-[50vh] fundoHome lg:block bg-indigo-900 flex items-center">
          <div className='container grid grid-cols-2 mx-auto text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
                <div className="flex justify-around gap-4">
                <ModalPostagem />
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='imagem w-1/3 rounded-full' />
      
            </div>
          </div>
        </div>

        
        <ListaPostagens />
      </>
    );
}

export default Home;