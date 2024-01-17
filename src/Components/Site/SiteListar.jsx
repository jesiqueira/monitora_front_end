import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Helper/Head'
import { ReactComponent as Site } from '../../Assets/site.svg'
import { ReactComponent as AdmHome } from '../../Assets/add_home.svg'
import styles from './SiteListar.module.css'
import { getLocalSites } from '../../services/api/localSite'
import Table from './SiteTable'

const SiteListar = () => {
  const [site, setSite] = React.useState('')

  React.useEffect(() => {
    const getSites = async () => {
      const response = await getLocalSites()
      // console.log(response)
      if (response.status === 200) {
        setSite(response.data)
      }
    }
    getSites()
  }, [])
  return (
    <>
      <Head title="Sites" description="Lista de todos os sites cadastrados." />
      <main className={styles.principal}>
        <section className={styles.titulo}>
          <div className={styles.nomeSite}>
            <Site />
            <h1>Adminitrar sites</h1>
          </div>
          <div className={styles.buscarSite}>
            <Link to="cadastro">
              <AdmHome /> Novo Site
            </Link>
            <form className={styles.form}>
              <input type="text" placeholder="buscar site" />
              <button>Localizar</button>
            </form>
          </div>
        </section>
        <section className={styles.tabela}>
          <hr />
          <Table sites={site} />
          {/* <div className={styles.bgTable}><h1>Tabela aqui</h1></div> */}
        </section>
      </main>
    </>
  )
}

export default SiteListar
