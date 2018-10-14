import fetch from './axiosObj'

// 结算方式接口
export function fetchPaymentMethods () {
  return fetch({
    url: '/paymentMethod/getAll',
    method: 'get'
  })
}

export function addPaymentMethods (data) {
  return fetch({
    url: '/paymentMethod/add',
    method: 'post',
    data
  })
}

export function editPaymentMethods (data) {
  return fetch({
    url: '/paymentMethod/edit',
    method: 'put',
    data
  })
}

export function deletePaymentMethods (pid) {
  return fetch({
    url: `/paymentMethod/delete/${pid}`,
    method: 'delete'
  })
}
