import { combineReducers } from "redux"
import productReducer from "./productReducer"
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
  productReducer,
  categoryReducer
})

export default rootReducer