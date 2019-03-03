const defaultMenu = {
  artistic: {}
}

const reducer = (state = defaultMenu, action) => {
  switch (action.type) {
    case 'CHANGE_MENU':
      return {...state, ...{ menu: action.menu }}
      break;
    case 'CHANGE_LIST':
      return { ...state, ...{ artistic: { ...state.artistic, ...action.result}}}
      break;
    default:
      return state
  }
}

export default reducer;