import { clientInstance as axios } from '@common/utils'

export const changeProductData = data => ({type: 'CHANGE_PRODUCTDATA', data})

export const getProductData = params => {
  return axios.get('/search/resultsByKeywords', { params }).then(res => {
    let { data: { pois } } = res

     return axios.get('/categroy/crumbs', {
      params: {
        city: params.city
      }
    }).then(res => {
      let { data: { areas, types } } = res

      const data = {
        list: pois.filter(item => item.photos.length).map(item => {
          return {
            type: item.type,
            img: item.photos[0].url,
            name: item.name,
            comment: Math.floor(Math.random() * 10000),
            rate: Number(item.biz_ext.rating),
            price: Number(item.biz_ext.cost),
            scene: item.tag,
            tel: item.tel,
            status: '可订明日',
            location: item.location,
            module: item.type.split(';')[0]
          }
        }),
        areas: areas.filter(item => item.type !== '').slice(0, 5),
        types: types.filter(item => item.type !== '').slice(0, 5),
      }
      return data
    })
  })
}