import React from 'react'
import styles from './Administrador.module.css'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import { ReactComponent as Detalhe1 } from '../../Assets/colDetalhe.svg'
import { ReactComponent as AddColaborador } from '../../Assets/addcolaborador.svg'

const Administrador = () => {
  return (
    <>
      <Head title="Admin" description="Está é a home do sistema monitora" />
      <section className={`${styles.admin} container`}>
        <div>
          <Detalhe1 />
          <h1>Adm. Usuários</h1>
        </div>
        <div>
          <div>
            <AddColaborador />
            <Link>Add Usuário</Link>
          </div>
        </div>
      </section>
      <section className={`${styles.lista} container`}></section>
    </>
  )
}

export default Administrador
