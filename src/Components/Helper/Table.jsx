import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Table.module.css'

const Table = ({ datas }) => {
  if (!datas || datas.length === 0) {
    return <p>Nenhum Dados encontrado.</p>
  }

  function dataFormatada(dataString) {
    const data = new Date(dataString)
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0') // Os meses são baseados em zero
    const ano = data.getFullYear()
    const dataFormatada = `${dia} /${mes} /${ano}`
    return dataFormatada
  }

  const headers = Object.keys(datas[0])
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header) => {
            if (header === 'id') {
              return null
            }
            if (header === 'updatedAt') {
              return null
            }
            if (header === 'is_admin') {
              return (
                <th key={header}>
                  <Link to={`/link?sort=${header}`} target="_self">
                    PERMISSÃO
                  </Link>
                </th>
              )
            }
            if (header === 'createdAt') {
              return (
                <th key={header}>
                  <Link to={`/link?sort=${header}`} target="_self">
                    CRIADO-EM
                  </Link>
                </th>
              )
            }
            if (header === 'is_ativo') {
              return (
                <th key={header}>
                  <Link to={`/link?sort=${header}`} target="_self">
                    CONTA
                  </Link>
                </th>
              )
            } else if (header === 'localsite') {
              return <th key={header}>{header.toUpperCase()}</th>
            } else {
              return (
                <th key={header}>
                  <Link to={`/link?sort=${header}`} target="_self">
                    {header.toUpperCase()}
                  </Link>
                </th>
              )
            }
          })}
        </tr>
      </thead>
      <tbody>
        {datas.map((user) => (
          <tr key={user.login}>
            {headers.map((header) => {
              if (header === 'id') {
                return null
              }
              if (header === 'updatedAt') {
                return null
              }
              if (header === 'login') {
                return (
                  <td key={header}>
                    <Link to={`update?login=${user.login}`}>{user[header]}</Link>{' '}
                  </td>
                )
              }
              if (header === 'is_admin') {
                return <td key={header}>{user[header] ? 'Administrador' : 'Usuário'}</td>
              }
              if (header === 'is_ativo') {
                return <td key={header}>{user[header] ? 'Ativa' : 'Inativo'}</td>
              }
              if (header === 'createdAt') {
                return <td key={header}>{dataFormatada(user[header])}</td>
              } else if (header === 'localsite') {
                // Se o header for 'localsite', imprima os dados específicos
                return (
                  <td key={header}>
                    {/* ID: {user.localsite.id}, Nome:  */}
                    {user.localsite.nome}
                  </td>
                )
              } else {
                return <td key={header}>{user[header]}</td>
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
