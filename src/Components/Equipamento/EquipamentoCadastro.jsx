import React from 'react'
import styles from './EquipamentoCadastro.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Select from '../Forms/Select'

const EquipamentoCadastro = () => {
  return (
    <div className={styles.container}>
      <h1>Cadastro de equipamentos</h1>
      <hr />
      <div className={styles.main}>
        <form className={styles.forms}>
          <div>
            <Input label="Patrimônio" name="patrimonio" id="patrimonio" />
            <Input label="Categoria" name="categoria" id="categoria" />
            <Input label="Fabricante" name="fabricante" id="fabricante" />
            <Input label="Modelo" name="modelo" id="modelo" />
            <Input label="Serial" name="serial" id="serial" />
          </div>
          <div>
            <div>
              <Input label="Posição" name="posicao" id="posicao" />
              <Input label="Data NF" name="datafn" id="datafn" />
              <Input label="Final Garantia" name="garantia" id="garantia" />
              <Select labelName="Localicade" name="local" />
            </div>
            <div className={styles.btn}>
              <Button>Cadastrar</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EquipamentoCadastro
