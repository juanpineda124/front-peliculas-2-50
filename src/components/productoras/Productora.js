import React, { useEffect, useState } from 'react'
import { obtenerProductoras } from '../../services/ProductoraServices.js'
import Title from '../ui/Title.js'
import Modal from './Modal.js'
import Table from './Table.js'
import ButtonModal from '../ui/ButtonModal.js'

export default function Productora() {

    const [ productoras, setProductoras ] = useState([])
  useEffect(() => {
    listarProductoras()
  }, [])


   const listarProductoras = async() => {
    try {
      const { data } = await obtenerProductoras()
      setProductoras(data)
    }catch (e){
      console.log(e)
    }
} 

  return (
    <>
      <Title title={'Productoras'}/>
      <Table productoras={productoras}/>
      <ButtonModal title='Nueva productora'/>
      <Modal />
    </>
  )
}

