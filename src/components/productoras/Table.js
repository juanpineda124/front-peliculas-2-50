import React from 'react'

export default function Table({productoras = []}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Estado</th>
        <th scope="col">Fecha creacion</th>
        <th scope="col">Fecha modificacion</th>
        <th scope="col">Slogan</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>
      {
        productoras.map(({nombre, estado, fechaCreacion, fechaModificacion, slogan, descripcion}, index) => {
          return (
            <tr key={index}>
              <th scope="row">{ index + 1 }</th>
              <td>{nombre}</td>
              <td>{estado ? 'Activo': 'Inactivo'}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaModificacion}</td>
              <td>{slogan}</td>
              <td>{descripcion}</td>
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
