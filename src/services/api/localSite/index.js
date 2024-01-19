import { api } from '../../Api'

export const getLocalSites = async () => {
  let url = '/site'
  return api.get(url)
}
export const createLocalSite = async (data) => {
  let url = '/site'
  return api.post(url, data)
}
