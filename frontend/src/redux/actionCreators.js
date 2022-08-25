

import Axios from 'axios'
import {
  GET_ALL_CONTACTOS,
  GET_ALL_NOSOTROS,
  GET_ALL_POSTS,
  GET_ALL_PRODUCTOS,
  GET_ALL_SERVICIOS,
  GET_CONTACTO,
  GET_POST,
  GET_PRODUCTO,
  GET_SERVICIO,
  DEL_USUARIO, GET_USUARIO, GET_USUARIOS,
  POST_USUARIO, PUT_USUARIO,
  DEL_CATEGORIA, GET_CATEGORIA, GET_CATEGORIAS,
  POST_CATEGORIA, PUT_CATEGORIA,
  DEL_CITA, GET_CITA, GET_CITAS,
  POST_CITA, PUT_CITA,
  DEL_CLIENTE, GET_CLIENTE, GET_CLIENTES,
  POST_CLIENTE, PUT_CLIENTE,
  DEL_ESPECIE, GET_ESPECIE, GET_ESPECIES,
  POST_ESPECIE, PUT_ESPECIE,
  DEL_FACTURA, GET_FACTURA, GET_FACTURAS,
  POST_FACTURA, PUT_FACTURA,
  DEL_HISTORIA_CLINICA, GET_HISTORIA_CLINICA, GET_HISTORIA_CLINICAS,
  POST_HISTORIA_CLINICA, PUT_HISTORIA_CLINICA,
  DEL_MASCOTA, GET_MASCOTA, GET_MASCOTAS,
  POST_MASCOTA, PUT_MASCOTA,
  DEL_PROVEEDOR, GET_PROVEEDOR, GET_PROVEEDORS,
  POST_PROVEEDOR, PUT_PROVEEDOR,
  DEL_RECETA, GET_RECETA, GET_RECETAS,
  POST_RECETA, PUT_RECETA,
  DEL_ROL, GET_ROL, GET_ROLS,
  POST_ROL, PUT_ROL
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

export const getUsuario = (id=null) => (dispatch) => {
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


/*ESPECIE*/

export const postEspecie = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_ESPECIE,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/especie`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_ESPECIE,
          especie: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_ESPECIE,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getEspecies = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/especie`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_ESPECIES,
        especies: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_ESPECIES,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteEspecie = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_ESPECIE,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/especie/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_ESPECIE,
          deleteespecie: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_ESPECIE,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putEspecie = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_ESPECIE,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/especie/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_ESPECIE,
          especie: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_ESPECIE,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getEspecie = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_ESPECIE,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/especie/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_ESPECIE,
          especie: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};


/*MASCOTA*/

export const postMascota = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_MASCOTA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/mascota`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_MASCOTA,
          mascota: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_MASCOTA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getMascotas = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/mascota`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_MASCOTAS,
        mascotas: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_MASCOTAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteMascota = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_MASCOTA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/mascota/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_MASCOTA,
          deletemascota: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_MASCOTA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putMascota = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_MASCOTA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/mascota/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_MASCOTA,
          mascota: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_MASCOTA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getMascota = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_MASCOTA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/mascota/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_MASCOTA,
          mascota: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};


/*CATEGORIAS*/

export const postCategoria = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_CATEGORIA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/categoria`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_CATEGORIA,
          categoria: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_CATEGORIA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getCategorias = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/categoria`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_CATEGORIAS,
        categorias: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_CATEGORIAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteCategoria = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_CATEGORIA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/categoria/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_CATEGORIA,
          deletecategoria: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_CATEGORIA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putCategoria = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_CATEGORIA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/categoria/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_CATEGORIA,
          categoria: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_CATEGORIA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getCategoria = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_CATEGORIA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/categoria/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_CATEGORIA,
          categoria: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*CITAS*/

export const postCita = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_CITA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/cita`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_CITA,
          cita: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_CITA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getCitas = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/cita`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_CITAS,
        citas: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_CITAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteCita = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_CITA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/cita/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_CITA,
          deletecita: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_CITA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putCita = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_CITA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/cita/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_CITA,
          cita: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_CITA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getCita = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_CITA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/cita/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_CITA,
          cita: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*CLIENTES*/

export const postCliente = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_CLIENTE,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/cliente`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_CLIENTE,
          cliente: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_CLIENTE,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getClientes = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/cliente`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_CLIENTES,
        clientes: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_CLIENTES,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteCliente = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_CLIENTE,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/cliente/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_CLIENTE,
          deletecliente: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_CLIENTE,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putCliente = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_CLIENTE,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/cliente/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_CLIENTE,
          cliente: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_CLIENTE,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getCliente = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_CLIENTE,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/cliente/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_CLIENTE,
          cliente: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*FACTURAS*/

export const postFactura = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_FACTURA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/factura`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_FACTURA,
          factura: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_FACTURA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getFacturas = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/factura`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_FACTURAS,
        facturas: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_FACTURAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteFactura = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_FACTURA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/factura/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_FACTURA,
          deletefactura: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_FACTURA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putFactura = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_FACTURA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/factura/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_FACTURA,
          factura: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_FACTURA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getFactura = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_FACTURA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/factura/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_FACTURA,
          factura: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*HISTORIA_CLINICAS*/

export const postHistoria_clinica = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_HISTORIA_CLINICA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/historia_clinica`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_HISTORIA_CLINICA,
          historia_clinica: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_HISTORIA_CLINICA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getHistoria_clinicas = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/historia_clinica`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_HISTORIA_CLINICAS,
        historia_clinicas: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_HISTORIA_CLINICAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteHistoria_clinica = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_HISTORIA_CLINICA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/historia_clinica/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_HISTORIA_CLINICA,
          deletehistoria_clinica: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_HISTORIA_CLINICA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putHistoria_clinica = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_HISTORIA_CLINICA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/historia_clinica/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_HISTORIA_CLINICA,
          historia_clinica: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_HISTORIA_CLINICA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getHistoria_clinica = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_HISTORIA_CLINICA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/historia_clinica/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_HISTORIA_CLINICA,
          historia_clinica: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*PROVEEDORS*/

export const postProveedor = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_PROVEEDOR,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/proveedor`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_PROVEEDOR,
          proveedor: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_PROVEEDOR,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getProveedors = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/proveedor`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_PROVEEDORS,
        proveedors: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_PROVEEDORS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteProveedor = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_PROVEEDOR,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/proveedor/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_PROVEEDOR,
          deleteproveedor: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_PROVEEDOR,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putProveedor = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_PROVEEDOR,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/proveedor/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_PROVEEDOR,
          proveedor: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_PROVEEDOR,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getProveedor = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_PROVEEDOR,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/proveedor/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_PROVEEDOR,
          proveedor: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*RECETAS*/

export const postReceta = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_RECETA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/receta`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_RECETA,
          receta: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_RECETA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getRecetas = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/receta`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_RECETAS,
        recetas: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_RECETAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteReceta = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_RECETA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/receta/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_RECETA,
          deletereceta: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_RECETA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putReceta = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_RECETA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/receta/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_RECETA,
          receta: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_RECETA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getReceta = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_RECETA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/receta/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_RECETA,
          receta: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*ROLS*/

export const postRol = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_ROL,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/rol`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_ROL,
          rol: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_ROL,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getRols = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/rol`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_ROLS,
        rols: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_ROLS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deleteRol = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_ROL,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/rol/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_ROL,
          deleterol: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_ROL,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putRol = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_ROL,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/rol/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_ROL,
          rol: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_ROL,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getRol = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_ROL,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/rol/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_ROL,
          rol: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};

/*PLANTILLAS*/
/*
NO BORRAR X SI HAY QUE CREAR MAS PARA HACER EN AUTOMATICO
export const postPlantilla = (dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: POST_PLANTILLA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.post(`${API_URL}/api/plantilla`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: POST_PLANTILLA,
          plantilla: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: POST_PLANTILLA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getPlantillas = (search=null) => (dispatch) => {
  const token = verifyToken();

  Axios.get(`${API_URL}/api/plantilla`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return dispatch({
        type: GET_PLANTILLAS,
        plantillas: resp.data.data,
      });
    })
    .catch((err) => {
      verifyError(err.response)
      return dispatch({
        type: GET_PLANTILLAS,
        error: true,
        errors: err.response.data.data,
      });
    });
};

export const deletePlantilla = (dat= null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: DEL_PLANTILLA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.delete(`${API_URL}/api/plantilla/${dat}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return dispatch({
          type: DEL_PLANTILLA,
          deleteplantilla: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: DEL_PLANTILLA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const putPlantilla = (id,dat = null) => (dispatch) => {
  if (dat === null) {
    return dispatch({
      type: PUT_PLANTILLA,
      clean: true,
    });
  } else {
    const token = verifyToken();
    Axios.put(`${API_URL}/api/plantilla/${id}`, dat, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: PUT_PLANTILLA,
          plantilla: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
        return dispatch({
          type: PUT_PLANTILLA,
          error: true,
          errors: err.response.data.data,
        });
      });
  }
};

export const getPlantilla = (id=null) => (dispatch) => {
  const token = verifyToken();
  if(id===null){
    return dispatch({
      type: GET_PLANTILLA,
      clean: true,
    });
  }else {
    Axios.get(`${API_URL}/api/plantilla/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        return dispatch({
          type: GET_PLANTILLA,
          plantilla: resp.data.data,
        });
      })
      .catch((err) => {
        verifyError(err.response)
      });
  }
};
*/
