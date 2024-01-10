import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SiteListar from './SiteListar'
import SiteCadastro from './SiteCadastro'

const Site = () => {
  return (
    <Routes>
      <Route path="/*" element={<SiteListar />} />
      <Route path="cadastro" element={<SiteCadastro />} />
    </Routes>
  )
}

export default Site
