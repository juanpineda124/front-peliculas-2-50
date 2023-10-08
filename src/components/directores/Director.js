import React, { useEffect, useState } from 'react'
import { obtenerDirectores } from '../../services/DirectorService'
import Title from '../ui/Title.js'
import Modal from './Modal'
import Table from './Table'
import ButtonModal from '../ui/ButtonModal'

export default function Productora() {

    const [ directores, setDirectores ] = useState([])
  useEffect(() => {
    listarDirectores()
  }, [])


   const listarDirectores = async() => {
    try {
        const { data } = await obtenerDirectores()
        setDirectores(data)
    }catch (e){
        console.log(e)
    }
} 

  return (
    <>
   
      <Title title={'Directores'}/>
      <Table directores={directores}/>
      <ButtonModal title='Nuevo director'/>
      <Modal />
    </>
  )
}