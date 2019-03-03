import { clientInstance as axios } from '@common/utils'

export const changeMenu = (menu) => ({ type: 'CHANGE_MENU', menu })
export const changeList = (result) => ({ type: 'CHANGE_LIST', result })

export const getMenu = () => {
  return (dispatch) => {
    return axios.get('/geo/menu')
      .then(res => {
        const { menu } = res.data
        dispatch(changeMenu(menu))
      })
  }
}

export const getList = (params, kind = 'all') => {
  return (dispatch) => {
    return axios.get('/search/resultsByKeywords', { params })
      .then(res => {
        const { pois } = res.data

        let arr = pois.filter(item => item.photos.length)
          .map(item => ({
            title: item.name,
            pos: item.type.split(';')[0],
            price: item.biz_ext.cost || '暂无',
            img: item.photos[0].url,
            url: '/'
          }))

        const result = {
          [kind]: arr
        }

        dispatch(changeList(result))
      })
  }
}