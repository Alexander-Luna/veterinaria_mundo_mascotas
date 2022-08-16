import Axios from 'axios'
import { GET_ALL_CONTACTOS, GET_ALL_NOSOTROS, GET_ALL_POSTS, GET_ALL_PRODUCTOS, GET_ALL_SERVICIOS, GET_POST, GET_PRODUCTO, GET_SERVICIO } from './actions'

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch =>{
  Axios.get(`${API_URL}/posts`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_POSTS,
        posts: resp.data
      })
    }
  )
}

export const getAllNosotros = () => dispatch =>{
  Axios.get(`${API_URL}/nosotros`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_NOSOTROS,
        usnos: resp.data
      })
    }
  )
}

export const getAllServicios = () => dispatch =>{
  Axios.get(`${API_URL}/Servicios`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_SERVICIOS,
        services: resp.data
      })
    }
  )
}

export const getAllProductos = () => dispatch =>{
  Axios.get(`${API_URL}/Productos`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_PRODUCTOS,
        products: resp.data
      })
    }
  )
}

export const getAllContactos = () => dispatch =>{
  Axios.get(`${API_URL}/Contactos`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_CONTACTOS,
        contacs: resp.data
      })
    }
  )
}

export const getPost = id => dispatch =>{
  Axios.get(`${API_URL}/posts/${id}`)
  .then(
    resp => {
      return dispatch({
        type:GET_POST,
        post: resp.data
      })
    }
  )
}

export const getServicio = id => dispatch =>{
  Axios.get(`${API_URL}/Servicios/${id}`)
  .then(
    resp => {
      return dispatch({
        type:GET_SERVICIO,
        service: resp.data
      })
    }
  )
}

export const getProducto = id => dispatch =>{
  Axios.get(`${API_URL}/Productos/${id}`)
  .then(
    resp => {
      return dispatch({
        type:GET_PRODUCTO,
        product: resp.data
      })
    }
  )
}

export const getContacto = id => dispatch =>{
  Axios.get(`${API_URL}/Contactos/${id}`)
  .then(
    resp => {
      return dispatch({
        type:GET_SERVICIO,
        contac: resp.data
      })
    }
  )
}