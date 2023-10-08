import React, { useEffect, useState } from 'react'
import { obtenerMedias } from '../../services/MediaService'
import Title from '../ui/Title.js'
import Modal from './Modal.js'
import Table from './Table'
import ButtonModal from '../ui/ButtonModal'

export default function Productora() {

    const [ medias, setMedias ] = useState([])
  useEffect(() => {
    listarMedias()
  }, [])


   const listarMedias = async() => {
    try {
        const { data } = await obtenerMedias()
        setMedias(data)
    }catch (e){
        console.log(e)
    }
} 

  return (
    <>
      <Title title={'Peliculas y Series'}/>
      <Table medias={medias}/>
      <ButtonModal title='Nueva media'/>
      <Modal />
    </>
  )
}