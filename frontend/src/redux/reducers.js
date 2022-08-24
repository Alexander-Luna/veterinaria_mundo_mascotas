import {
  DEL_USUARIO,
  GET_ALL_CONTACTOS,
  GET_ALL_NOSOTROS,
  GET_ALL_POSTS,
  GET_ALL_PRODUCTOS,
  GET_ALL_SERVICIOS,
  GET_CONTACTO,
  GET_POST,
  GET_PRODUCTO,
  GET_SERVICIO, GET_USUARIO, GET_USUARIOS,
  POST_USUARIO, PUT_USUARIO
} from "./actions"

export const postReducer = (state ={}, action) =>{
  if (action.type === GET_ALL_POSTS){
    return{
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST){
    return{
      ...state,
      post: action.post
    }
  }
  return state
}

export const nosotrosReducer = (state ={}, action) =>{
  if (action.type === GET_ALL_NOSOTROS){
    return{
      ...state,
      usnos: action.usnos
    }
  }
  return state
}

export const serviciosReducer = (state ={}, action) =>{
  if (action.type === GET_ALL_SERVICIOS){
    return{
      ...state,
      services: action.services
    }
  }

  if (action.type === GET_SERVICIO){
    return{
      ...state,
      service: action.service
    }
  }
  return state
}

export const productosReducer = (state ={}, action) =>{
  if (action.type === GET_ALL_PRODUCTOS){
    return{
      ...state,
      products: action.products
    }
  }

  if (action.type === GET_PRODUCTO){
    return{
      ...state,
      product: action.product
    }
  }
  return state
}

export const contactosReducer = (state ={}, action) =>{
  if (action.type === GET_ALL_CONTACTOS){
    return{
      ...state,
      contacs: action.contacs
    }
  }

  if (action.type === GET_CONTACTO){
    return{
      ...state,
      contac: action.contac
    }
  }
  return state
}

export const postUser=(state={}, action)=>{
  if(action.type===POST_USUARIO){
    if(action.error===true){
      return{
        error:true,
        errors:action.errors
      }
    }else if(action.clean===true){
      return {}
    }
    return {
      error:false
    }
  }
  return state
}

export const getUsuarios=(state={}, action)=>{
  if(action.type===GET_USUARIOS){
    if(action.error===true){
      return{
        error:true,
        errors:action.errors
      }
    }
    return {
      error:false,
      usuarios:action.usuarios
    }
  }

  return state
}

export const deleteUsuario=(state={}, action)=>{
  if(action.type===DEL_USUARIO){
    if(action.error===true){
      return{
        error:true,
        errors:action.errors
      }
    }else if(action.clean===true){
      return {}
    }
    return {
      error:false
    }
  }
  return state
}

export const putUsuario=(state={}, action)=>{
  if(action.type===PUT_USUARIO){
    if(action.error===true){
      return{
        error:true,
        errors:action.errors
      }
    }else if(action.clean===true){
      return {}
    }
    return {
      error:false
    }
  }
  return state
}

export const getUsuario=(state={}, action)=>{
  if(action.type===GET_USUARIO){
    if(action.error===true){
      return{
        error:true,
        errors:action.errors
      }
    }else if(action.clean===true){
      return {}
    }
    return {
      error:false,
      usuario:action.user
    }
  }
  return state
}
