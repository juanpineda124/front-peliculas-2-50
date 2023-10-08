import React from 'react'

export default function Table({medias = []}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Serial</th>
        <th scope="col">Titulo</th>
        <th scope="col">Sinopsis</th>
        <th scope="col">URL</th>
        <th scope="col">Imagen</th>
        <th scope="col">Fecha creacion</th>
        <th scope="col">Fecha modificacion</th>
        <th scope="col">Año estreno</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>
      {
        medias.map(({serial, titulo, sinopsis, url, imagen, fechaCreacion, fechaModificacion, añoEstreno}, index) => {
          return (
            <tr key={index}>
              <th scope="row">{ index + 1 }</th>
              <td>{serial}</td>
              <td>{titulo}</td>
              <td>{sinopsis}</td>
              <td>{url}</td>
              <td>{imagen}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaModificacion}</td>
              <td>{añoEstreno}</td>
              <td> 
              <button type="button" class="btn btn-info">Editar</button>
              <button type="button" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  )
}
