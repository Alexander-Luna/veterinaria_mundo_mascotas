import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
  postReducer,
  nosotrosReducer,
  serviciosReducer,
  productosReducer,
  contactosReducer
} from "./reducers"

export default createStore(
  combineReducers({
    postReducer,
    nosotrosReducer,
    serviciosReducer,
    productosReducer,
    contactosReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))

)

