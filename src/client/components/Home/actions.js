import { clientInstance as axios } from '@common/utils'

export const changeMenu = (menu) => ({type: 'CHANGE_MENU', menu})

export const getMenu = () => {
  return (dispatch) => {
    return axios.get('/geo/menu')
      .then(res => {
        const { menu } = res.data
        dispatch(changeMenu(menu))
      })
  }
}