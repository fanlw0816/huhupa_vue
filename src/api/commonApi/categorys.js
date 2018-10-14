import fetch from './axiosObj'

// 公司分类接口
export function fetchCompanyCategorys () {
  return fetch({
    url: '/companyCategory/getAll',
    method: 'get'
  })
}

export function addCompanyCategorys (data) {
  return fetch({
    url: '/companyCategory/add',
    method: 'post',
    data
  })
}

export function editCompanyCategory (data) {
  return fetch({
    url: '/companyCategory/edit',
    method: 'put',
    data
  })
}

export function deleteCompanyCategory (cid) {
  return fetch({
    url: `/companyCategory/delete/${cid}`,
    method: 'delete'
  })
}
