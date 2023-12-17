import React from 'react'
const Table = ({ colaboradores }) => {
  if (!colaboradores || colaboradores.length === 0) {
    return <p>Nenhum colaborador encontrado.</p>
  }

  const headers = Object.keys(colaboradores[0])

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => {
            if (header === 'is_ativo') {
              return <th key={header}>Ativo</th>
            } else {
              return <th key={header}>{header}</th>
            }
          })}
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.login}>
            {headers.map((header) => {
              if (header === 'is_ativo') {
                return <td key={header}>{colaborador[header] ? 'Ativo' : 'Inativo'}</td>
              } else {
                return <td key={header}>{colaborador[header]}</td>
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
