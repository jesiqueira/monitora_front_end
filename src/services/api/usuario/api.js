import { api } from '../../Api'

export const getUsuarios = async () => {
  try {
    let url = '/users'
    return api.get(url)
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.status)
      console.error(error.response.data)
    } else if (error.request) {
      console.error('Request error:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    console.error(error.config)
    throw error // rethrow the error to propagate it
  }
}

export const createSession = async (login, password) => {
  try {
    let url = '/session'
    return api.post(url, { login: login, password: password })
  } catch (error) {
    console.error('Response error:', error.response.status)
    console.error(error.response.data)
  }
}

export const validaToken = async (token) => {
  try {
    let url = '/validaToken'
    return api.post(url, { token: token })
  } catch (error) {
    console.error('Response error:', error.response.status)
    console.error(error.response.data)
  }
}