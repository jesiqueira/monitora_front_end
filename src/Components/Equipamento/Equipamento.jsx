import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EquipamentoListar from './EquipamentoListar'
import EquipamentoCadastro from './EquipamentoCadastro'

const Equipamento = () => {
  return (
    <Routes>
      <Route path="/*" element={<EquipamentoListar />} />
      <Route path='equipamentoCadastro' element={<EquipamentoCadastro/>}/>
    </Routes>
  )
}

export default Equipamento
