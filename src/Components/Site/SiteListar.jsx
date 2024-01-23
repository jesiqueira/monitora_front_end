import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Helper/Head'
import { ReactComponent as Site } from '../../Assets/site.svg'
import { ReactComponent as AdmHome } from '../../Assets/add_home.svg'
import styles from './SiteListar.module.css'
import { getLocalSites } from '../../services/api/localSite'
import Table from './SiteTable'

const SiteListar = () => {
  const [sites, setSites] = React.useState('')
  const [erro, setErro] = React.useState('')

  React.useEffect(() => {
    const getSites = async () => {
      const response = await getLocalSites()
      // console.log(response)
      if (response.status === 200) {
        setSites(response.data)
      }
    }
    getSites()
  }, [])

  function handleBuscar(event) {
    event.preventDefault()
    if (event.target[0].value) {
      const site = sites.filter((item) => item.nome.toLowerCase().includes(event.target[0].value.toLowerCase()))
      if (site) {
        setErro('')
        setSites(site)
      } else {
        setErro('Site / local não localizado, verifique nome')
      }
    } else {
      setErro('Preencher Campo de busca..')
    }
  }
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
            <form className={styles.form} onSubmit={handleBuscar}>
              <input type="text" placeholder="buscar site" />
              <button>Localizar</button>
            </form>
          </div>
          <div className={styles.erro}>{erro && <p>{erro}</p>}</div>
        </section>
        <section className={styles.tabela}>
          <hr />
          <Table sites={sites} />
          {/* <div className={styles.bgTable}><h1>Tabela aqui</h1></div> */}
        </section>
      </main>
    </>
  )
}

export default SiteListar
