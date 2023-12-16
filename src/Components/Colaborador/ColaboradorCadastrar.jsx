import React from 'react'
import styles from './ColaboradorCadastrar.module.css'
import Head from '../Helper/Head'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { ReactComponent as Detalhe } from '../../Assets/detalhe.svg'

const ColaboradorCadastrar = () => {
  function handleSubmit(envet) {
    envet.preventDefault()
  }
  return (
    <>
      <Head title="Add Colaborador" description="Páginas para cadastro de novos colaboradores na empresa." />
      <Detalhe className={styles.detalhe} />
      <div className={styles.container}>
        <h1>Cadastrar colaborador</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" id="nome" name="nome" type="text" />
          <Input label="CPF" id="cpf" name="cpf" type="text" />
          <Input label="RG" id="rg" name="rg" type="text" />
          <Input label="CEP" id="cep" name="cep" type="text" />
          <Input label="Estado" id="estado" name="estado" type="text" />
          <Input label="Endereco" id="endereco" name="endereco" type="text" />
          <Input label="Bairro" id="bairro" name="bairro" type="text" />
          <Input label="Número" id="numero" name="numero" type="text" />
          <Input label="Cidade" id="cidade" name="cidade" type="text" />
          <Input label="Telefone" id="telefone" name="telefone" type="text" />
          <Input label="Login" id="login" name="login" type="text" />
          <Input label="Gestor" id="gestor" name="gestor" type="text" />
          <Input label="Setor" id="setor" name="setor" type="text" />
          <Input label="Local" id="local" name="local" type="text" />
          <Input label="Relacao" id="relacao" name="relacao" type="text" />

          <Button>Cadastrar</Button>
        </form>
      </div>
    </>
  )
}

export default ColaboradorCadastrar
