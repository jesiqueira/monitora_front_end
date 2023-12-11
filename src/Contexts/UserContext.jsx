import React from 'react'
import { api, createSession, validaToken } from '../services/api'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [logado, setLogado] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          api.defaults.headers.Authorization = `Bearer ${token}`
          const response = await validaToken(token)
          console.log(response)
          if (!response.statusText === 'OK') throw new Error('Token inválido.')
        } catch (error) {
          console.log(error.response)
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [])

  async function userLogin(login, password) {
    try {
      const response = await createSession(login, password)
      setUser(response.data.user)
      setLogado(true)
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('user', response.data.user)

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      // console.log(response.data.token)
      // console.log(response.data.user)
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status de erro
        if (error.response.status === 401) {
          console.error('Erro de autorização: Credenciais inválidas ou ausentes')
          // Execute a lógica de tratamento de erro específica para 401 aqui, como redirecionar para a página de login
        } else {
          console.error('Erro na resposta do servidor:', error.response.data)
          console.error('Status do erro:', error.response.status)
        }
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.error('Não houve resposta do servidor')
      } else {
        // Algo aconteceu durante a configuração da solicitação que causou o erro
        console.error('Erro durante a configuração da solicitação:', error.message)
      }
    }
  }

  return <UserContext.Provider value={{ userLogin, user }}>{children}</UserContext.Provider>
}
