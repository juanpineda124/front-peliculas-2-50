import React, { useEffect, useState } from 'react'
import { obtenerTipos } from '../../services/TipoService'
import Title from '../ui/Title.js'
import Modal from './Modal'
import Table from './Table'
import ButtonModal from '../ui/ButtonModal'

export default function Productora() {

    const [ tipos, setTipos ] = useState([])
  useEffect(() => {
    listarTipos()
  }, [])


   const listarTipos = async() => {
    try {
        const { data } = await obtenerTipos()
        setTipos(data)
    }catch (e){
        console.log(e)
    }
} 

  return (
    <>
      <Title title={'Tipos'}/>
      <Table tipos={tipos}/>
      <ButtonModal title='Nuevo tipo'/>
      <Modal />
    </>
  )
}