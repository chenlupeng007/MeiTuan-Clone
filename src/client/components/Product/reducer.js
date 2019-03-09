const defaultState = {list: [], types: [], areas: [], point: []}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCTDATA':
      return { ...state, ...action.data };
      break;
    default:
      return state;
  }
}

export default reducer