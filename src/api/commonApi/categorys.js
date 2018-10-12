import fetch from './axiosObj'

export function fetchCompanyCategorys () {
  return fetch({
    url: '/companyCategory/getAll',
    method: 'get'
  })
}
