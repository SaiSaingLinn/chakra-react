import httpClient from './constant/httpClient'
export * from './constant/routes'

const controller = async (endpoint:string, ...data:any) => {
  let tmp = endpoint.split(':')
  return await httpClient["get"](tmp[1], ...data)
    .then((res: any) => res && res)
    .catch((error: any) => error)
}

export default controller