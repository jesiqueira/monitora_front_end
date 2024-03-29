import React from 'react'
import styles from './Equipamento.module.css'
import Input from '../Forms/Input'
import Select from '../Forms/Select'
import Button from '../Forms/Button'
import { ReactComponent as DATABASE } from '../../Assets/databases.svg'
import { ReactComponent as SIGNAL } from '../../Assets/signal.svg'
import { ReactComponent as ADD } from '../../Assets/add_circle.svg'
import { ReactComponent as PDF } from '../../Assets/pdf.svg'
import { ReactComponent as EXCELL } from '../../Assets/excell.svg'

import { Link } from 'react-router-dom'

const EquipamentoListar = () => {
  // const [local, setLocal] = React.useState(['Estoque', 'Em uso', 'Emprestimo'])
  // {local && <p>{local}</p>}
  const [select, setSelect] = React.useState('')
  const opcao = [
    {
      id: 1,
      nome: 'PATRIMÔNIO',
    },
    {
      id: 2,
      nome: 'SERIAL',
    },
  ]
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.menu}>
          <div className={styles.titulo}>
            <DATABASE />
            <h1>EQUIPAMENTO EM - ESTOQUE</h1>
          </div>
          <div className={styles.menu_item}>
            <span>
              <SIGNAL /> Status Dos Equipamentos
            </span>
            <Link to="equipamentoCadastro">
              <ADD /> Adicionar
            </Link>
            <div className={styles.exportar}>
              <PDF />
              <EXCELL />
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.inputRadio}>
            <label htmlFor="estoque">
              <input type="radio" name="local" id="estoque" value="estoque" defaultChecked />
              Estoque
            </label>
            <label htmlFor="site">
              <input type="radio" name="local" id="site" value="site" />
              Site / Home
            </label>
            <label htmlFor="emprestimo">
              <input type="radio" name="local" id="emprestimo" value="emprestimo" />
              Emprestimo
            </label>
          </div>
          <div className={styles.buscar}>
            <Input placeholder="Buscar por....." />
            <Select select={select} setSelect={setSelect} locais={opcao} />
            <Button>Buscar</Button>
          </div>
        </form>
        <div className={styles.lista}>
          <p>Carregando Dados..........</p>
        </div>
      </main>
    </div>
  )
}

export default EquipamentoListar
