const initialState = {
  products: [],
  productToEdit: {}
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'products/fetchSuccess':
      return { products: action.payload }
    case 'products/addSuccess':
      return { products: state.products }
    default:
      return state
  }
}
