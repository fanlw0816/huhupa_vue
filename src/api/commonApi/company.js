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
