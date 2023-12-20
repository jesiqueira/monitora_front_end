import React from 'react'
import styles from './ColaboradorListar.module.css'
import Head from '../Helper/Head'
import { Link, useLocation } from 'react-router-dom'
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
import { getColaboradores } from '../../services/api/colaborador'
import Paginacao from '../Helper/Paginacao'
import useFiltro from '../../Hooks/useFiltroForm'

const Colaborador = () => {
  // const tipo = useFiltro('tipo')

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const sort = queryParams.get('sort') || 'nome'
  // console.log(sort)

  const [colaboradores, setColaboradores] = React.useState('')
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const [loading, setLoading] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [tatalIntemInDataBase, setTotalIntemInDataBase] = React.useState(0)
  const [filtro, setFiltro] = React.useState('')
  const [erro, setErro] = React.useState(null)
  const menuClose = [setMenusair, setMenuadmin]
  const intemsPorPage = 25

  React.useEffect(() => {
    const buscarColaboradores = async (sort, page) => {
      try {
        setLoading(true)
        const response = await getColaboradores(sort, page)

        // Acesso ao cabeçalho 'X-Total-Count' da resposta
        const totalCountFromHeader = response.headers.get('TotalCount')
        setTotalIntemInDataBase(parseInt(totalCountFromHeader) || 0)

        setColaboradores(response.data)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    buscarColaboradores(sort, currentPage)
  }, [sort, currentPage])

  const validacao = (campo, valor) => {
    const re = /^[a-zA-Z]+$/
    // .regex.test()
    if (campo === 'selecione') {
      setErro('Selecione um valor válido..')
      return false
    } else if (!re.test(valor)) {
      setErro('Valor inválido para campo de busca.')
      return false
    } else {
      setErro(false)
    }
    return true
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const campo = event.target[1].value
    const valor = event.target[0].value
    setErro(false)

    if (validacao(campo, valor)) {
      setErro('')
      const filtro = `${campo}=%${valor}%`
      console.log('Query: ', filtro)
    }
  }

  return (
    <>
      <FecharMenu menuToClose={menuClose} />
      <Head title="Colaboradores" description="Páginas com todos os colaboradores das empresa." className={styles.head} />
      <div className={styles.estrutura}>
        <div className={styles.detalhe}>
          <Detalhe />
        </div>
        <main className={styles.content}>
          <div className={styles.menu}>
            <div className={styles.titulo}>
              <Detalhe1 />
              <h1>Colaboradores</h1>
            </div>
            <div className={styles.add_detalhe}>
              <div>
                <AddColaborador />
                <Link to="adicionar">Add Colaborador</Link>
              </div>
              <div>
                <Pdf />
                <Excell />
              </div>
            </div>
          </div>
          <div className={`${styles.lista}`}>
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
              {erro ? <p>{erro}</p> : ''}
            </form>
          </div>
          <div className={styles.info}>{loading && <p>Estamos preparando as informações por favor, aguarde.....</p>}</div>
          <div className={styles.table}>{colaboradores && <Table colaboradores={colaboradores} />}</div>
        </main>
        <div className={styles.paginacao}>
          <Paginacao totalItems={tatalIntemInDataBase} itemsPorPagina={intemsPorPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}

export default Colaborador
