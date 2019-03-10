const defaultState = { list: [], product: [] }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_DETAILDATA':
      return { ...state, ...action.data };
      break;
    default:
      return state;
  }
}

export default reducer