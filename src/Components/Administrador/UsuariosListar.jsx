import React from 'react'
import styles from './UsuariosListar.module.css'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import FecharMenu from '../Helper/FecharMenu'
import { ReactComponent as Detalhe } from '../../Assets/detalhe.svg'
import { ReactComponent as Detalhe1 } from '../../Assets/adm_user_listar.svg'
import { ReactComponent as DelatheAddUser } from '../../Assets/adm_user_add.svg'
import { ReactComponent as Penson } from '../../Assets/person.svg'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Check from '../Forms/Check'
import Table from '../Helper/Table'
import { getUsuarios } from '../../services/api/usuario/api'

const UsuariosListar = () => {
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const [admCheck, setAdmCheck] = React.useState(false)
  const [contaAtivaCheck, setContaAtivaCheck] = React.useState(false)
  const [users, setUsers] = React.useState('')
  const menuClose = [setMenusair, setMenuadmin]

  const handleAdmCheckChange = () => {
    setAdmCheck((prevChecked) => !prevChecked)
  }
  const handleContaAtivaCheckChange = () => {
    setContaAtivaCheck((prevChecked) => !prevChecked)
  }

  React.useEffect(() => {
    const listarUsuario = async () => {
      try {
        const response = await getUsuarios()
        if (response.status === 200) {
          // console.log(response.data)
          setUsers(response.data)
        } else {
          throw new Error(response.data.error)
        }
      } catch (error) {
        console.log(error)
      }
    }
    listarUsuario()
  }, [])
  return (
    <>
      <FecharMenu menuToClose={menuClose} />
      <Head title="Usuários" description="Página para listar todos os usuários do sistema." />
      <section className={styles.section}>
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
              <DelatheAddUser /> Ad. Usuário
            </Link>
            <input type="text" name="buscar" id="buscar" />
            <Button>Buscar</Button>
          </div>
        </div>
      </section>
      <hr className={styles.hr} />
      <section className={styles.sectionTeble}>
        <div className={styles.lista}>
          <Table datas={users} />
          <div className={styles.visualizarDados}>
            <div className={styles.dadosPerfil}>
              <div className={styles.info}>
                <div className={styles.info_foto}>
                  <Penson />
                </div>
                <div>
                  <h1>Jose Edmar de Siqueira</h1>
                  <h2>
                    <span>Gestor: </span>Leonardo Vello
                  </h2>
                  <h3>
                    <span>Login: </span>jesiqueira
                  </h3>
                </div>
              </div>
              <hr className={styles.hrInfo} />
            </div>
            <form className={styles.form}>
              <h3>Permissões</h3>
              <hr />
              <Check
                name="adm"
                textChecked="Conta Administrador"
                textNotChecked="Conta normal"
                isChecked={admCheck}
                handleCheckboxChange={handleAdmCheckChange}
              />
              <Check
                name="conta"
                textChecked="Conta Ativa"
                textNotChecked="Conta desativada"
                isChecked={contaAtivaCheck}
                handleCheckboxChange={handleContaAtivaCheckChange}
              />
              <div className={styles.password}>
                <Input label="Nova senha" name="password" />
              </div>
              <Button className={styles.button}>Atualizar</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default UsuariosListar
