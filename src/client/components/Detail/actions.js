import { clientInstance as axios } from '@common/utils'

export const changeDetailData = data => ({ type: 'CHANGE_DETAILDATA', data })

export const getDetailData = params => {
  return (dispatch) => {
    return axios.get('/search/products', { params }).then(res => {
      let { data: { product, more: list } } = res

      const data = {
        product,
        list
      }

      dispatch(changeDetailData(data))
    })
  }
}