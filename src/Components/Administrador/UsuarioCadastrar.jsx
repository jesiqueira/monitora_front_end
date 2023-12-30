import React from 'react'
import styles from './UsuarioCadastrar.module.css'
import { UserContext } from '../../Contexts/UserContext'
import FecharMenu from '../Helper/FecharMenu'
import { ReactComponent as Addusers } from '../../Assets/add-user.svg'
import { ReactComponent as Detalhe } from '../../Assets/detalhe.svg'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const UsuarioCadastrar = () => {
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const menuClose = [setMenusair, setMenuadmin]
  return (
    <div className={styles.estrutura}>
      <FecharMenu menuToClose={menuClose} />
      <div className={styles.detalhe}>
        <Detalhe />
      </div>
      <h1>Cadastro de Usuário</h1>
      <article className={styles.article}>
        <Addusers />
        <form className={styles.form}>
          <Input label="nome" type="text" placeholder="Name do usuário" />
          <Input label="login" />
          <Input label="password" type="password" />
          <Input label="local" />
          <Button>Cadastrar</Button>
        </form>
      </article>
    </div>
  )
}

export default UsuarioCadastrar
