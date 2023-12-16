import React from 'react'
import styles from './ColaboradorListar.module.css'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import { ReactComponent as Detalhe } from '../../Assets/detalhe.svg'
import { ReactComponent as Pdf } from '../../Assets/pdf.svg'
import { ReactComponent as Excell } from '../../Assets/excell.svg'
import { ReactComponent as Detalhe1 } from '../../Assets/colDetalhe.svg'
import { ReactComponent as AddColaborador } from '../../Assets/addcolaborador.svg'
import { UserContext } from '../../Contexts/UserContext'
import FecharMenu from '../Helper/FecharMenu'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Table from '../Helper/Table'

const Colaborador = () => {
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const menuClose = [setMenusair, setMenuadmin]

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Prevenindo')
  }

  const tableHeaders = ['Nome', 'Login', 'Setor', 'Gestor', 'Local']
  const tableData = [
    ['João', 'jao', 'css', 'JOnas', 'São Carlos'],
    ['Maria', 'mri', 'css', 'JOnas', 'São Carlos'],
    ['Carlos', 'casr', 'css', 'JOnas', 'São Carlos'],
  ]

  React.useEffect(() => {
    console.log('Entrou useEffect')
  }, [])

  return (
    <>
      <FecharMenu menuToClose={menuClose} />
      <Head title="Colaboradores" description="Páginas com todos os colaboradores das empresa." />
      <Detalhe className={styles.detalhe} />
      <div className={styles.estrutura}>
        <main className={styles.main}>
          <section className={styles.menu}>
            <div className={styles.titulo}>
              <Detalhe1 />
              <h1>Colaboradores</h1>
            </div>
            <div className={styles.add_detalhe}>
              <AddColaborador />
              <Link to="adicionar">Add Colaborador</Link>
              <Pdf />
              <Excell />
            </div>
          </section>
          <section className={`${styles.lista}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input type="text" name="tipo" placeholder="buscar..." />
              <select defaultValue="selecione">
                <option value="selecione" disabled>
                  selecione
                </option>
                <option value="nome">Nome</option>
                <option value="login">Login</option>
              </select>
              <Button>Buscar</Button>
            </form>
          </section>
          <section className={styles.table}>
            <Table headers={tableHeaders} data={tableData} />
          </section>
        </main>
      </div>
    </>
  )
}

export default Colaborador
