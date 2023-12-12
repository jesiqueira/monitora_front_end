import React from 'react'
import styles from './Colaborador.module.css'
import Head from '../Helper/Head'
import { Link } from 'react-router-dom'
import { ReactComponent as Pdf } from '../../Assets/pdf.svg'
import { ReactComponent as Excell } from '../../Assets/excell.svg'
import { ReactComponent as Detalhe1 } from '../../Assets/colDetalhe.svg'
import { ReactComponent as AddColaborador } from '../../Assets/addcolaborador.svg'

const Colaborador = () => {
  return (
    <>
      <Head title="Colaboradores" description="Páginas com todos os colaboradores das empresa." />

      <section className={`${styles.menu} container`}>
        <div>
          <Detalhe1 />
          <h1>Colaboradores</h1>
        </div>
        <div>
          <div>
            <AddColaborador />
            <Link>Add Colaborador</Link>
          </div>
          <div>
            <Pdf />
            <Excell />
          </div>
        </div>
      </section>
      <section className={`${styles.lista} container`}></section>
    </>
  )
}

export default Colaborador
