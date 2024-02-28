import React from 'react'
import styles from './TransferenciaEquipamento.module.css'
import Head from '../Helper/Head'
import { ReactComponent as TransferenciaLogo } from '../../Assets/transferencia.svg'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const TransferenciaEquipamento = () => {
  return (
    <>
      <Head title="Transferencia" description="Página para listar os equipamentos para transferencia ou descarte." />
      <section className={styles.section}>
        <main className={styles.content}>
          <div className={styles.menu}>
          <div className={styles.titulo}>
          <TransferenciaLogo />
          <h1>Transferir Equipamento</h1>
        </div>
          <form className={styles.forms}>
            <div className={styles.informacao}>
          <h3>Transferir equipamento</h3>
            </div>
            <div className={styles.inputRadio}>
            <label className={styles.localidade}>
              <input type="radio" name="local" id="transferir" value="transferir" />
              Localidade
            </label>
            <label className={styles.descarte}>
              <input type="radio" name="local" id="descarte" value="descarte" />
              Descarte
            </label>
            </div>
          </form>
          </div>
          <div className={styles.info}>
          <form className={styles.formContent}>
            <div>
              <Input label="Patrimônio" name="patrimonio" id="patrimonio" />
              <Input label="Serial" name="serial" id="serial" />
            </div>
            <div>
              <Input label="Categoria" name="categoria" id="categoria" />
              <Input label="Empresa" name="empresa" id="empresa" />
            </div>
            <div className={styles.button}>
              <Button>Transferir</Button>
            </div>
          </form>
          </div>
        </main>
      </section>
    </>
  )
}

export default TransferenciaEquipamento
