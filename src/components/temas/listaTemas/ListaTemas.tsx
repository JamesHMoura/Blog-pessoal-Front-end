import React, { useContext, useEffect, useState } from 'react'
import CardTema from '../cardTema/CardTema'
import { AuthContext } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import Tema from '../../../models/Tema';



function ListaTemas() {

    const[temas, setTemas] =useState<Tema[]>([])

    const {usuario} = useContext(AuthContext);
    const token = usuario.token;

    const navigate = useNavigate()

    useEffect(() => {
        if(token===""){
            alert("qual foi irmão??")
            navigate("/login")
        }

    },[token])

    async function buscarTemas() {
        try{
            await buscar("/tema", setTemas, {
                headers:{
                    Authorization: token
                }
            })
        }catch(error){
            alert("Deu ruim em!")
        }
    }

    useEffect(() =>{
        buscarTemas()
    }, [temas.length])

    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-center'>Meus Temas</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {temas.map(tema => (
                        <CardTema key={tema.id} tema={tema} />
                    ))}
                </div>
            </div>
        </>
  )
}

export default ListaTemas