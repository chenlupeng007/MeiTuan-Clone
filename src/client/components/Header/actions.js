import {clientInstance as axios} from '@common/utils'

export const changePosition = position => ({type: 'CHANGE_CITY', position})
export const changeSearchList = searchList => ({ type: 'CHANGE_SEARCH_LIST', searchList })
export const changeHotPlace = hotPlace => ({type: 'CHANGE_HOTPLACE',hotPlace})

export const getPosition = () => {
  return (dispatch) => {
    return axios.get('/geo/getPosition')
      .then(res => {
        dispatch(changePosition(res.data))
      })
  }
}

export const getSearchList = (params) => {
  return (dispatch) => {
    return axios.get('/search/top', { params })
      .then(res => {
        dispatch(changeSearchList(res.data.top))
      })
  }
}

export const getHotPlace = (params) => {
  return (dispatch) => {
    return axios.get('/search/hotPlace', { params })
      .then(res => {
        dispatch(changeHotPlace(res.data.result))
      })
  }
}