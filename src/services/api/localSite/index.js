import { api } from '../../Api'

export const getLocalSites = async () => {
  let url = '/site'
  return api.get(url)
}


