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
} from "./actions"

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }
  return state
}

export const nosotrosReducer = (state = {}, action) => {
  if (action.type === GET_ALL_NOSOTROS) {
    return {
      ...state,
      usnos: action.usnos
    }
  }
  return state
}

export const serviciosReducer = (state = {}, action) => {
  if (action.type === GET_ALL_SERVICIOS) {
    return {
      ...state,
      services: action.services
    }
  }

  if (action.type === GET_SERVICIO) {
    return {
      ...state,
      service: action.service
    }
  }
  return state
}

export const productosReducer = (state = {}, action) => {
  if (action.type === GET_ALL_PRODUCTOS) {
    return {
      ...state,
      products: action.products
    }
  }

  if (action.type === GET_PRODUCTO) {
    return {
      ...state,
      product: action.product
    }
  }
  return state
}

export const contactosReducer = (state = {}, action) => {
  if (action.type === GET_ALL_CONTACTOS) {
    return {
      ...state,
      contacs: action.contacs
    }
  }

  if (action.type === GET_CONTACTO) {
    return {
      ...state,
      contac: action.contac
    }
  }
  return state
}

export const postUser = (state = {}, action) => {
  if (action.type === POST_USUARIO) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getUsuarios = (state = {}, action) => {
  if (action.type === GET_USUARIOS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      usuarios: action.usuarios
    }
  }

  return state
}

export const deleteUsuario = (state = {}, action) => {
  if (action.type === DEL_USUARIO) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putUsuario = (state = {}, action) => {
  if (action.type === PUT_USUARIO) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getUsuario = (state = {}, action) => {
  if (action.type === GET_USUARIO) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      usuario: action.user
    }
  }
  return state
}

/*CATEGORIA*/

export const postCategoria = (state = {}, action) => {
  if (action.type === POST_CATEGORIA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getCategorias = (state = {}, action) => {
  if (action.type === GET_CATEGORIAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      categorias: action.categorias
    }
  }

  return state
}

export const deleteCategoria = (state = {}, action) => {
  if (action.type === DEL_CATEGORIA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putCategoria = (state = {}, action) => {
  if (action.type === PUT_CATEGORIA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getCategoria = (state = {}, action) => {
  if (action.type === GET_CATEGORIA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      categoria: action.categoria
    }
  }
  return state
}

/*CITA*/

export const postCita = (state = {}, action) => {
  if (action.type === POST_CITA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getCitas = (state = {}, action) => {
  if (action.type === GET_CITAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      citas: action.citas
    }
  }

  return state
}

export const deleteCita = (state = {}, action) => {
  if (action.type === DEL_CITA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putCita = (state = {}, action) => {
  if (action.type === PUT_CITA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getCita = (state = {}, action) => {
  if (action.type === GET_CITA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      cita: action.cita
    }
  }
  return state
}

/*CLIENTE*/

export const postCliente = (state = {}, action) => {
  if (action.type === POST_CLIENTE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getClientes = (state = {}, action) => {
  if (action.type === GET_CLIENTES) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      clientes: action.clientes
    }
  }

  return state
}

export const deleteCliente = (state = {}, action) => {
  if (action.type === DEL_CLIENTE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putCliente = (state = {}, action) => {
  if (action.type === PUT_CLIENTE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getCliente = (state = {}, action) => {
  if (action.type === GET_CLIENTE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      cliente: action.cliente
    }
  }
  return state
}

/*ESPECIE*/

export const postEspecie = (state = {}, action) => {
  if (action.type === POST_ESPECIE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getEspecies = (state = {}, action) => {
  if (action.type === GET_ESPECIES) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      especies: action.especies
    }
  }

  return state
}

export const deleteEspecie = (state = {}, action) => {
  if (action.type === DEL_ESPECIE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putEspecie = (state = {}, action) => {
  if (action.type === PUT_ESPECIE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getEspecie = (state = {}, action) => {
  if (action.type === GET_ESPECIE) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      especie: action.especie
    }
  }
  return state
}

/*FACTURA*/

export const postFactura = (state = {}, action) => {
  if (action.type === POST_FACTURA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getFacturas = (state = {}, action) => {
  if (action.type === GET_FACTURAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      facturas: action.facturas
    }
  }

  return state
}

export const deleteFactura = (state = {}, action) => {
  if (action.type === DEL_FACTURA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putFactura = (state = {}, action) => {
  if (action.type === PUT_FACTURA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getFactura = (state = {}, action) => {
  if (action.type === GET_FACTURA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      factura: action.factura
    }
  }
  return state
}

/*HISTORIA_CLINICA*/

export const postHistoria_clinica = (state = {}, action) => {
  if (action.type === POST_HISTORIA_CLINICA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getHistoria_clinicas = (state = {}, action) => {
  if (action.type === GET_HISTORIA_CLINICAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      historia_clinicas: action.historia_clinicas
    }
  }

  return state
}

export const deleteHistoria_clinica = (state = {}, action) => {
  if (action.type === DEL_HISTORIA_CLINICA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putHistoria_clinica = (state = {}, action) => {
  if (action.type === PUT_HISTORIA_CLINICA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getHistoria_clinica = (state = {}, action) => {
  if (action.type === GET_HISTORIA_CLINICA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      historia_clinica: action.historia_clinica
    }
  }
  return state
}

/*MASCOTA*/

export const postMascota = (state = {}, action) => {
  if (action.type === POST_MASCOTA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getMascotas = (state = {}, action) => {
  if (action.type === GET_MASCOTAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      mascotas: action.mascotas
    }
  }

  return state
}

export const deleteMascota = (state = {}, action) => {
  if (action.type === DEL_MASCOTA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putMascota = (state = {}, action) => {
  if (action.type === PUT_MASCOTA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getMascota = (state = {}, action) => {
  if (action.type === GET_MASCOTA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      mascota: action.mascota
    }
  }
  return state
}

/*PROVEEDOR*/

export const postProveedor = (state = {}, action) => {
  if (action.type === POST_PROVEEDOR) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getProveedors = (state = {}, action) => {
  if (action.type === GET_PROVEEDORS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      proveedors: action.proveedors
    }
  }

  return state
}

export const deleteProveedor = (state = {}, action) => {
  if (action.type === DEL_PROVEEDOR) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putProveedor = (state = {}, action) => {
  if (action.type === PUT_PROVEEDOR) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getProveedor = (state = {}, action) => {
  if (action.type === GET_PROVEEDOR) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      proveedor: action.proveedor
    }
  }
  return state
}

/*RECETA*/

export const postReceta = (state = {}, action) => {
  if (action.type === POST_RECETA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getRecetas = (state = {}, action) => {
  if (action.type === GET_RECETAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      recetas: action.recetas
    }
  }

  return state
}

export const deleteReceta = (state = {}, action) => {
  if (action.type === DEL_RECETA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putReceta = (state = {}, action) => {
  if (action.type === PUT_RECETA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getReceta = (state = {}, action) => {
  if (action.type === GET_RECETA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      receta: action.receta
    }
  }
  return state
}

/*ROL*/

export const postRol = (state = {}, action) => {
  if (action.type === POST_ROL) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getRols = (state = {}, action) => {
  if (action.type === GET_ROLS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      rols: action.rols
    }
  }

  return state
}

export const deleteRol = (state = {}, action) => {
  if (action.type === DEL_ROL) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putRol = (state = {}, action) => {
  if (action.type === PUT_ROL) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getRol = (state = {}, action) => {
  if (action.type === GET_ROL) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      rol: action.rol
    }
  }
  return state
}
/*
//NO BORRAR LA PLANTILLA PARA AGREGAR MAS
//PLANTILLA

export const postPlantilla = (state = {}, action) => {
  if (action.type === POST_PLANTILLA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getPlantillas = (state = {}, action) => {
  if (action.type === GET_PLANTILLAS) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    }
    return {
      error: false,
      plantillas: action.plantillas
    }
  }

  return state
}

export const deletePlantilla = (state = {}, action) => {
  if (action.type === DEL_PLANTILLA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const putPlantilla = (state = {}, action) => {
  if (action.type === PUT_PLANTILLA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false
    }
  }
  return state
}

export const getPlantilla = (state = {}, action) => {
  if (action.type === GET_PLANTILLA) {
    if (action.error === true) {
      return {
        error: true,
        errors: action.errors
      }
    } else if (action.clean === true) {
      return {}
    }
    return {
      error: false,
      plantilla: action.plantilla
    }
  }
  return state
}

*/