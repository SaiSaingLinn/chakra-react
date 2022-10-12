import httpClient from './constant/httpClient'
export * from './constant/routes'

const controller = async (endpoint:string, ...data:any) => {
  let tmp = endpoint.split(':')
  return await httpClient({
    method: tmp[0],
    url: tmp[1],
    ...data
  })
    .then(res => res)
    .catch(error => error)
}

export default controller