const initialState = {
  products: [],
  productDetail: {}
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'products/fetchSuccess':
      return { products: action.payload }
    case 'products/fetchDetailSuccess':
      return { productDetail: action.payload }
    default:
      return state
  }
}

export default productReducer