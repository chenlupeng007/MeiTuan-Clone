const defaultMenu = []

const reducer = (state = defaultMenu, action) => {
  switch (action.type) {
    case 'CHANGE_MENU':
      return [...state, ...action.menu]
      break;
    default:
      return state
  }
}

export default reducer;