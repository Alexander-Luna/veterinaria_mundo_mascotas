import Axios from 'axios'
import {
  DEL_USUARIO,
  GET_ALL_CONTACTOS,
  GET_ALL_NOSOTROS,
  GET_ALL_POSTS,
  GET_ALL_PRODUCTOS,
  GET_ALL_SERVICIOS,
  GET_POST,
  GET_PRODUCTO,
  GET_SERVICIO, GET_USUARIO, GET_USUARIOS,
  POST_USUARIO, PUT_USUARIO
} from './actions'

const API_URL = process.env.REACT_APP_API_URL;

const verifyError=(error)=>{
  try{
    if(error.status===401){
      localStorage.clear();
      window.location.href = `/login`
    }
    if(error.status===500 || error.status===404 || error.status===403){
      // window.location.href = `/404`
    }
  }catch(e){
    //window.location.href = `/404`
  }

}

export const verifyToken = () => {
  if (!localStorage.getItem("access-token")) {
    localStorage.clear()
    window.location.href = `/login`
  } else {
    return JSON.parse(localStorage.getItem("access-token")).token;
  }
};

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

/*USUARIO*/

export const postUser = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_USUARIO,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/usuario`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_USUARIO,
          usuario: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_USUARIO,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getUsuarios = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/usuario`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_USUARIOS,
        usuarios: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_USUARIOS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteUsuario = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_USUARIO,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/usuario/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_USUARIO,
          deleteusuario: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_USUARIO,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putUsuario = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_USUARIO,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/usuario/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_USUARIO,
          usuario: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_USUARIO,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getUser = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_USUARIO,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/usuario/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_USUARIO,
          usuario: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

