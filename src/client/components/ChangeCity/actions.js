import { clientInstance as axios } from '@common/utils'

export const changeProvinces = provinces => ({type: 'CHANGE_PROVINCES', provinces})
export const changeAllCity = allCity => ({type: 'CHANGE_ALLCITY', allCity})
export const changeHotCity = hotCity => ({type: 'CHANGE_HOTCITY', hotCity})

export const getProvinces = () => {
  return (dispatch) => {
    return axios.get('/geo/province')
      .then(res => {
        const { province } = res.data
        const provinces = province.map(item => ({
          value: item.id,
          label: item.name
        }))
        dispatch(changeProvinces(provinces))
      })
  }
}

export const getCities = province => {
  return axios.get(`/geo/province/${province}`,)
    .then(res => {
      const { city } = res.data
      const cities = city.map(item => ({
        value: item.id,
        label: item.name
      }))
      return cities
    })
}

export const getAllCity = () => {
  return (dispatch) => {
    return axios.get('/geo/city')
      .then(res => {
        const { city } = res.data

        const cities = city.map(item => ({
          value: item.name,
        }))
        dispatch(changeAllCity(cities))
      })
  }
}

export const getHotCity = () => {
  return (dispatch) => {
    return axios.get('/geo/hotCity')
      .then(res => {
        const { hots } = res.data
        dispatch(changeHotCity(hots))
      })
  }
}