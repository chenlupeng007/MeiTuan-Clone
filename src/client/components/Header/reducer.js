const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_CITY':
      return {...state, ...action.position}
      break;
    case 'CHANGE_SEARCH_LIST':
      return {...state, ...{searchList: action.searchList}}
      break;
    case 'CHANGE_HOTPLACE':
      return { ...state, ...{ hotPlace: action.hotPlace } }
      break;
    default:
      return state;
  }
}

export default reducer;