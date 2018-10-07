import fetch from './axiosObj'

export function fetchExampla (params) {
  return fetch({
    url: '/example',
    method: 'port',
    data: params
  })
}
