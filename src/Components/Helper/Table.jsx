import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((hearder, index) => (
            <th key={index}>{hearder}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
}

export default Table
