import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TransferenciaEquipamento from './TransferenciaEquipamento'

const Transferencia = () => {
  return (
    <Routes>
      <Route path='/*' element={<TransferenciaEquipamento />} />
    </Routes>
  )
}

export default Transferencia
