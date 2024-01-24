import React from 'react'
import styles from './SiteUpdate.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { ReactComponent as Home } from '../../Assets/apartment.svg'
import Head from '../Helper/Head'

function SiteUpdate() {
  return (
    <main className={styles.main}>
      <Head title="Sites-Update" description="Atualizar / excluir site cadastrado." />
      <h1 className={styles.titulo}>Update / Delete - Localidade</h1>
      <hr className={styles.hr} />
      <section className={styles.section}>
        <div className={styles.imagem}>
          <Home />
        </div>
        <form className={styles.form}>
          <Input label="Nome da Localidade" />
          <div className={styles.dadosForm}>
            <Input label="CEP" />
            <Input label="Estado" />
          </div>
          <Input label="Rua" />
          <div className={styles.dadosForm}>
            <Input label="Número" />
            <Input label="CNPJ" />
          </div>
          <Input label="Bairro" />
          <div className={styles.button}>
            <Button>Atualizar</Button>
            <Button>Excluir</Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default SiteUpdate
