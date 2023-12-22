import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ColaboradorListar from './ColaboradorListar'
import ColaboradorCadastrar from './ColaboradorCadastrar'

const Colaborador = () => {
  return (
    <Routes>
      <Route path="/" element={<ColaboradorListar />} />
      <Route path="adicionar" element={<ColaboradorCadastrar/>} />
    </Routes>
  )
}

export default Colaborador
