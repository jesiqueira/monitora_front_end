import React from 'react'
import styles from './UsuariosListar.module.css'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import FecharMenu from '../Helper/FecharMenu'
import { ReactComponent as Detalhe1 } from '../../Assets/colDetalhe.svg'
import { ReactComponent as DelatheColaborador } from '../../Assets/addcolaborador.svg'

const UsuariosListar = () => {
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const menuClose = [setMenusair, setMenuadmin]
  return (
    <>
      <FecharMenu menuToClose={menuClose} />
      <Head title="Usuários" description="Página para listar todos os usuários do sistema." />
      <section className={`${styles.admin} container`}>
        <div>
          <Detalhe1 />
          <h1>Adm. Usuários</h1>
        </div>
        <div>
          <div>
            <DelatheColaborador />
            <Link to="cadastro"> Add Usuário</Link>
          </div>
        </div>
      </section>
      <section className={`${styles.lista} container`}></section>
    </>
  )
}

export default UsuariosListar
