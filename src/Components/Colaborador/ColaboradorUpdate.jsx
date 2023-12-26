import React, { useState } from 'react'
import styles from './ColaboradorUpdate.module.css'
import Head from '../Helper/Head'
import { useLocation } from 'react-router-dom'
import { colaboradorShow, updateColaborador } from '../../services/api/colaborador'
import { ReactComponent as Detalhe } from '../../Assets/detalhe.svg'
import { ReactComponent as DetalheUpdade } from '../../Assets/updateColaboradorDetalhe.svg'
import { getLocalSites } from '../../services/api/localSite'
import { useNavigate } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

import { UserContext } from '../../Contexts/UserContext'

const ColaboradorUpdate = () => {
  const { loading, error } = React.useContext(UserContext)
  const [colaborador, setColaborador] = useState('')
  const [locais, setLocais] = React.useState(null)
  const [selecionado, setSelecionado] = React.useState('')
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const loginParam = queryParams.get('login')

  const navigate = useNavigate()

  React.useEffect(() => {
    const buscar = async () => {
      try {
        const response = await colaboradorShow(loginParam)
        // console.log(response)
        setColaborador(response.data)
      } catch (err) {
        // console.log('Erro coooooo: ', error)
      }
    }

    async function sites() {
      try {
        const response = await getLocalSites()
        if (response.status === 200) {
          setLocais(response.data)
        }
      } catch (err) {
        // console.log(error)
      }
    }
    sites()
    buscar()
  }, [loginParam])

  React.useEffect(() => {
    if (selecionado) {
      setColaborador((prev) => {
        const novoColaborador = {
          ...prev,
          localsite_id: selecionado,
        }
        return novoColaborador
      })
    }
  }, [selecionado])

  async function handleSubmit(event) {
    event.preventDefault()
    if (selecionado !== '') {
      const response = await updateColaborador(colaborador, colaborador.id)
      if (response.status === 200) {
        navigate('/colaborador')
      }
    } else {
      const response = await updateColaborador(colaborador, colaborador.id)
      if (response.status === 200) {
        navigate('/colaborador')
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'lecioneoOp') {
      setSelecionado(parseInt(value))
    } else {
      setColaborador((prevColaborador) => ({
        ...prevColaborador,
        [name]: value,
      }))
    }
  }
  return (
    <>
      <Head title="Update Colaboradores" description="Páginas para visualizar e atualizar dados dos colaboradores." className={styles.head} />
      <div className={styles.colaborador}>
        <Detalhe />
        <DetalheUpdade />
        <h1>Informações / Update - Colaborador</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <Input label="Nome" id="nome" name="nome" type="text" value={colaborador.nome || ''} onChange={handleInputChange} />
                <div className={styles.dados1}>
                  <Input label="CPF" id="cpf" name="cpf" type="text" value={colaborador.cpf || ''} onChange={handleInputChange} />
                  <Input label="RG" id="rg" name="rg" type="text" value={colaborador.rg || ''} onChange={handleInputChange} />
                  <Input label="CEP" id="cep" name="cep" type="text" value={colaborador.cep || ''} onChange={handleInputChange} />
                  <Input label="Estado" id="estado" name="estado" type="text" value={colaborador.estado || ''} onChange={handleInputChange} />
                </div>
                <Input label="Endereco" id="endereco" name="endereco" type="text" value={colaborador.endereco || ''} onChange={handleInputChange} />
                <div className={styles.dados2}>
                  <Input label="Bairro" id="bairro" name="bairro" type="text" value={colaborador.bairro || ''} onChange={handleInputChange} />
                  <Input label="Número" id="numero" name="numero" type="text" value={colaborador.numero || ''} onChange={handleInputChange} />
                  <Input label="Cidade" id="cidade" name="cidade" type="text" value={colaborador.cidade || ''} onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <Input label="Telefone" id="telefone" name="telefone" type="text" value={colaborador.telefone || ''} onChange={handleInputChange} />
                <Input label="Login" id="login" name="login" type="text" value={colaborador.login || ''} onChange={handleInputChange} />
                <Input label="Gestor" id="gestor" name="gestor" type="text" value={colaborador.gestor || ''} onChange={handleInputChange} />
                <Input label="Setor" id="setor" name="setor" type="text" value={colaborador.setor || ''} onChange={handleInputChange} />
                <label htmlFor="lecioneoOp" className={styles.local}>
                  Selecione Local
                  <select className={styles.selection} id="lecioneoOp" name="lecioneoOp" defaultValue="Selecione" onChange={handleInputChange}>
                    <option value="Selecione" disabled>
                      {colaborador && colaborador.localsite.nome}
                    </option>
                    {locais &&
                      locais.map((local) => (
                        <option key={local.id} value={local.id}>
                          {local.nome}
                        </option>
                      ))}
                  </select>
                </label>
                {/* {erroSelecionar && <p className={styles.erro}>{erroSelecionar}</p>} */}
                <div className={styles.relacao}>
                  <Input label="Relacao" id="relacao" name="relacao" type="text" value={colaborador.relacao || ''} onChange={handleInputChange} />
                </div>
              </div>
              {/* {opcaoSelecionada && <p>{opcaoSelecionada}</p>} */}
              <div className={styles.button}>{loading ? <Button disabled>Cadastrando....</Button> : <Button>Cadastrar</Button>}</div>

              {error && <p className={styles.erro}>{error}</p>}
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default ColaboradorUpdate
