import fetch from './axiosObj'

// 公司管理接口
export function addCompany (data) {
  return fetch({
    url: '/company/add',
    method: 'post',
    data
  })
}

export function getCompanyById (cid) {
  return fetch({
    url: `/company/${cid}`,
    method: 'get'
  })
}

export function fetchAllCompany () {
  return fetch({
    url: `/company/getAll`,
    method: 'get'
  })
}

export function editCompany (data) {
  return fetch({
    url: '/company/edit',
    method: 'put',
    data
  })
}

export function deleteCompany (pid) {
  return fetch({
    url: `/company/delete/${pid}`,
    method: 'delete'
  })
}
