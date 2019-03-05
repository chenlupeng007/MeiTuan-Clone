const defaultState = {
  provinces: [],
  allCity: [],
  hotCity: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_PROVINCES':
      return { ...state, ...{ provinces: action.provinces } }
      break;
    case 'CHANGE_ALLCITY':
      return { ...state, ...{ allCity: action.allCity } }
      break;
    case 'CHANGE_HOTCITY':
      return { ...state, ...{ hotCity: action.hotCity } }
      break;
    default:
      return state
  }
}

export default reducer;
