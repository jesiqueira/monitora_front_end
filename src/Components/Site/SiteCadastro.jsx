import React from 'react'
import Head from '../Helper/Head'
import { ReactComponent as Home } from '../../Assets/apartment.svg'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import styles from './SiteCadastro.module.css'

function SiteCadastro() {
  return (
    <>
      <Head title="Sites" description="Cadastro de sites / local" />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.titulo}>
            <h1>Cadastrar nova Localidade</h1>
            <hr />
          </div>
          <div className={styles.imagemHome}>
            <Home />
          </div>
          <form className={styles.form}>
            <Input label="Nome" placeholder="Call Center - São Carlos" />
            <Input label="Cep" placeholder="00.000-000" />
            <Input label="Estado" placeholder="SP" />
            <Input label="Rua" placeholder="Rua Coronel Jose Augusto de Oliveira Salles" />
            <Input label="Número" placeholder="3225" />
            <Input label="Cnpj" placeholder="61074175000138" />
            <Input label="Bairro" placeholder="Vila Izabel" />
            <Button>Cadastrar</Button>
          </form>
        </main>
      </div>
    </>
  )
}

export default SiteCadastro
