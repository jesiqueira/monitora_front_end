import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsuariosListar from './UsuariosListar'

const Administrador = () => {
  return (
    <Routes>
      <Route path="/*" element={<UsuariosListar />} />
    </Routes>
  )
}

export default Administrador
