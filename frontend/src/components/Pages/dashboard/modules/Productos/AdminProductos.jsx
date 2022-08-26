import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Input from "../molecules/input/Input";
import alertify from "alertifyjs";
import {connect} from "react-redux";
import store from "../../../../../redux/store";
import ima from "../../../../img/alimento_humedo.png";
import {deleteProducto, getCategorias, getProductos, postProducto} from "../../../../../redux/actionCreators";
import Select from "../molecules/Select";

const AdminProductos=(props)=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const {match,productos,postproducto,deleteproducto,categorias}=props

  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [fecha_caducidad, setFecha_caducidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio_compra, setPrecio_compra] = useState('');
  const [precio_venta, setPrecio_venta] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cod_categoria, setCod_categoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [dcategorias, setDcategorias] = useState([]);

  useEffect(() => {
    store.dispatch(getProductos())
    store.dispatch(getCategorias())
  }, [match])

  useEffect(() => {
    setDcategorias([])
    categorias?.categorias?.map(e=>{
      const data= {
        'value':e.cod_categoria,
        'label':e.nombre
      };
      setDcategorias(
        dcategorias=>[
          ...dcategorias,
          data
        ]
      )
    })
  }, [categorias]);


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof postproducto.error!='undefined'){
      postproducto.error===false?alertify.success("Se creó correctamente"):alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getProductos())
      props.postProducto()
    }
  }, [postproducto])

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof deleteproducto.error!='undefined'){
      deleteproducto.error===false?alertify.success("Se eliminó correctamente"):alertify.error("No se puede eliminar")
      store.dispatch(getProductos())
      props.deleteProducto()
    }
  }, [deleteproducto])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {
      nombre:nombre,
      imagen:imagen,
      codigo:codigo,
      fecha_caducidad:fecha_caducidad,
      descripcion:descripcion,
      precio_compra:precio_compra,
      precio_venta:precio_venta,
      cantidad:cantidad,
      cod_categoria:cod_categoria
    }
    props.postProducto(data)
  }

  const handleDelete=(data)=> {
    alertify.confirm('Eliminar Producto', `¿Seguro de eliminar el producto: ${data.name}?`, () => {
        props.deleteProducto(data.id)
      }
      , function () {
      }).set('labels', {ok: 'Aceptar', cancel: 'Cancelar'});
  }

  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Productos</h6>
           <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
             Nuevo
           </Button>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Imagen</th>
             <th scope="col">Código</th>
             <th scope="col">Fecha Caducidad</th>
             <th scope="col">Descripción</th>
             <th scope="col">Precio Compra</th>
             <th scope="col">Precio Venta</th>
             <th scope="col">Cantidad</th>
             <th scope="col">Categoria</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           {Array.isArray(productos.productos) ? productos.productos.map((e, index) => {
             return(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>{e.nombre}</td>
                 <td>
                   <img src={ima} width="100" />
                 </td>
                 <td>{e.codigo}</td>
                 <td>{e.fecha_caducidad}</td>
                 <td>{e.descripcion}</td>
                 <td>{e.precio_compra}</td>
                 <td>{e.precio_venta}</td>
                 <td>{e.cantidad}</td>
                 <td>{e.cod_categoria}</td>
                 <td>
                   <Link to={`/admin/productos/${e.cod_producto}`} className={global.icon} title="Editar">
                     <i className="fas fa-user-edit"></i>
                   </Link>
                   <a style={{ cursor: 'pointer' }} onClick={() => handleDelete({ 'name': e.nombre, 'id': e.cod_producto })} className="delete" title="Eliminar">
                     <i className="fas fa-trash-alt"></i>
                   </a>
                 </td>
             </tr>
             )
           }) : <tr><td colSpan="8"><center>CARGANDO..</center></td></tr>
           }
           </tbody>
         </table>
       </div>
   </div>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit.bind()}>
          <Modal.Body>
            <Input
              sty="col-md-12"
              id="name"
              name="name"
              type="text"
              label="Nombre"
              required
              onChange={(e) => setNombre(e.target.value)}
              defaultValue={nombre}
            />
            <Input
              sty="col-md-12"
              id="codigo"
              name="codigo"
              type="text"
              label="Codigo"
              onChange={(e) => setCodigo(e.target.value)}
              defaultValue={codigo}
            />
            <Input
              sty="col-md-12"
              id="fecha_caducidad"
              name="fecha_caducidad"
              type="date"
              label="Fecha Caducidad"
              required
              onChange={(e) => setFecha_caducidad(e.target.value)}
              defaultValue={fecha_caducidad}
            />

            <Input
              sty="col-md-12"
              id="descripcion"
              name="descripcion"
              type="text"
              label="Descripción"
              required
              onChange={(e) => setDescripcion(e.target.value)}
              defaultValue={descripcion}
            />

            <Input
              sty="col-md-12"
              id="precio_compra"
              name="precio_compra"
              type="text"
              label="Precio Compra"
              required
              onChange={(e) => setPrecio_compra(e.target.value)}
              defaultValue={precio_compra}
            />

            <Input
              sty="col-md-12"
              id="precio_venta"
              name="precio_venta"
              type="text"
              label="Precio Venta"
              required
              onChange={(e) => setPrecio_venta(e.target.value)}
              defaultValue={precio_venta}
            />
            <Input
              sty="col-md-12"
              id="cantidad"
              name="cantidad"
              type="text"
              label="Cantidad"
              required
              onChange={(e) => setCantidad(e.target.value)}
              defaultValue={cantidad}
            />
            <Select
              label="Categoria"
              required
              options={dcategorias}
              id="cod_categoria"
              name="cod_categoria"
              handleChange={(e)=>setCod_categoria(e.target.value)}
              defaultValue={cod_categoria}
            />
            <Input
              sty="col-md-12"
              id="imagen"
              name="imagen"
              type="hidden"
              label="Imagen"
              required
              /*onChange={(e) => setImagen(e.target.value)}*/
              defaultValue='imagen'
            />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary">{btnSubmit ? 'Guardando...' : 'Guardar'}</Button>
        </Modal.Footer>
      </form>
    </Modal>
  </>
}

const mapStateToProps = (state) => ({
  productos:state.ProductosState,
  postproducto:state.postProductoState,
  deleteproducto:state.deleteProductoState,
  categorias:state.CategoriasState,
})

const mapDispatchToProps = {
  postProducto, deleteProducto
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminProductos)

