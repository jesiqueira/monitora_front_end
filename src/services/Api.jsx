import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: `http://localhost:${process.env.REACT_APP_PORT}`,
})
