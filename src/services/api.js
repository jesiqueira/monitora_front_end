import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

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
