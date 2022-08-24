import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
  postReducer,
  nosotrosReducer,
  serviciosReducer,
  productosReducer,
  contactosReducer,
  postUser as postUserState,
  getUsuarios as UsuariosState,
  deleteUsuario as deleteUsuarioState,
  putUsuario as putUsuarioState,
  getUsuario as UsuarioState,
} from "./reducers"

export default createStore(
  combineReducers({
    postReducer,
    nosotrosReducer,
    serviciosReducer,
    productosReducer,
    contactosReducer,
    postUserState,
    UsuariosState,
    deleteUsuarioState,
    putUsuarioState,
    UsuarioState,
  }),
  composeWithDevTools(applyMiddleware(thunk))

)

