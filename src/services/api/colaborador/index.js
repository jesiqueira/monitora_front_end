import { api } from '../../Api'

export const getColaboradores = async () => {
  try {
    let url = '/colaborador'
    return api.get(url)
  } catch (error) {
    console.log(error)
  }
}

export const createColaborador = async (idSite, colaborador) => {
  let url = `/colaborador/${idSite}/colaborador`
  return api.post(url, colaborador)
}