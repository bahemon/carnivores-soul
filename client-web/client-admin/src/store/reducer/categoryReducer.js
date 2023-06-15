const initialState = {
  categories: []
}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'categories/fetchSuccess':
      return { categories: action.payload }
    default:
      return state
  }
}