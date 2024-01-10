import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Helper/Head'

const SiteListar = () => {
  return (
    <>
      <Head title='Sites' description="Lista de todos os sites cadastrados." />
      <h1>Lista de todos os sites</h1>
      <Link to="cadastro"> Novo Site</Link>
    </>
  )
}

export default SiteListar
