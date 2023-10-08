import React from 'react'

export default function Table({directores = []}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha creacion</th>
          <th scope="col">Fecha modificacion</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
          directores.map(({nombre, estado, fechaCreacion, fechaModificacion}, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ index + 1 }</th>
                <td>{nombre}</td>
                <td>{estado ? 'Activo': 'Inactivo'}</td>
                <td>{fechaCreacion}</td>
                <td>{fechaModificacion}</td>
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
