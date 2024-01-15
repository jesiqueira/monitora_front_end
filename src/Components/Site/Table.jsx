import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Table.module.css'

const Table = ({ sites }) => {
  if (!sites || sites.length === 0) {
    return <p>Nenhum Local / site encontrado.</p>
  }

  function dataFormatada(dataString) {
    const data = new Date(dataString)
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0') // Os meses são baseados em zero
    const ano = data.getFullYear()
    const dataFormatada = `${dia} /${mes} /${ano}`
    return dataFormatada
  }

  const headers = Object.keys(sites[0])
  return (
    <div className={styles.tableSiteContainer}>
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

              if (header === 'createdAt') {
                return (
                  <th key={header}>
                    <Link to={`/admin?sort=${header}`} target="_self">
                      CRIADO-EM
                    </Link>
                  </th>
                )
              } else {
                return (
                  <th key={header}>
                    <Link to={`/admin?sort=${header}`} target="_self">
                      {header.toUpperCase()}
                    </Link>
                  </th>
                )
              }
            })}
          </tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <tr key={site.nome}>
              {headers.map((header) => {
                if (header === 'id') {
                  return null
                }
                if (header === 'updatedAt') {
                  return null
                }
                if (header === 'createdAt') {
                  return <td key={header}>{dataFormatada(site[header])}</td>
                } else {
                  return <td key={header}>{site[header]}</td>
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
