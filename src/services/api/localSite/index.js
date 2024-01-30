import { api } from '../../Api'

export const getLocalSites = async (sort = 'nome', page = 1) => {
  let url = `/site?sort=${sort}&page=${page}`
  return api.get(url)
}

export const createLocalSite = async (data) => {
  let url = '/site'
  return api.post(url, data)
}

export const show = async (id) => {
  let url = `/site/${id}`
  return api.get(url)
}
