import React from 'react'
import styles from './UsuariosListar.module.css'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import FecharMenu from '../Helper/FecharMenu'
import { ReactComponent as Detalhe } from '../../Assets/detalhe.svg'
import { ReactComponent as Detalhe1 } from '../../Assets/adm_user_listar.svg'
import { ReactComponent as DelatheColaborador } from '../../Assets/adm_user_add.svg'
import Button from '../Forms/Button'
import Table from '../Helper/Table'

const UsuariosListar = () => {
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const menuClose = [setMenusair, setMenuadmin]
  return (
    <>
      <FecharMenu menuToClose={menuClose} />
      <Head title="Usuários" description="Página para listar todos os usuários do sistema." />
      <section className={styles.estrutura}>
        <div className={styles.detalhe}>
          <Detalhe />
        </div>
        <div className={styles.titulo}>
          <div>
            <Detalhe1 />
            <h1>Adm. Usuários</h1>
          </div>
          <div>
            <Link to="cadastro">
              <DelatheColaborador /> Add Usuário
            </Link>
            <input type="text" name="buscar" id="buscar" />
            <Button>Buscar</Button>
          </div>
        </div>
      </section>
      <hr className={styles.hr} />
      <article className={styles.article}>
        <div className={styles.lista}>
          <Table />
          <div>
            <h1>Jose Edmar de Siqueira</h1>
            <h2>Leonardo Vello</h2>
            <h3>jesiqueira</h3>
            <hr />
            <div>
              <h3>Permissões</h3>
              <hr />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default UsuariosListar
