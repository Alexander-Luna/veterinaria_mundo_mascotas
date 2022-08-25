import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Input from "../molecules/input/Input";
import alertify from "alertifyjs";
import {deleteProveedor, getProveedors, getUsuarios, postProveedor} from "../../../../../redux/actionCreators";
import {connect} from "react-redux";
import store from "../../../../../redux/store";

const Proveedores=(props)=>{

  const {proveedors,postproveedor,deleteproveedor,match}=props

  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState();
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [cod_proveedor, setCod_proveedor] = useState('');

  //TRAER PROVEEDORES
  useEffect(() => {
    store.dispatch(getProveedors())
  }, [match])


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  //NUEVO PROVEEDOR
  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {
      nombre:nombre,
      descripcion:descripcion,
      email:email,
      direccion:direccion,
      numero_celular:celular,
      cod_proveedor:cod_proveedor
    }
    props.postProveedor(data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof postproveedor.error!='undefined'){
      postproveedor.error===false?alertify.success("Se creó correctamente"):alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getProveedors())
      props.postProveedor()
    }
  }, [postproveedor])

//ELIMINAR PROVEEDOR


  const handleDelete=(data)=>{
    alertify.confirm('Eliminar Proveedor', `¿Seguro de eliminar el proveedor: ${data.name}?`,()=> { props.deleteProveedor(data.id)}
      , function () {
      }).set('labels', {ok:'Aceptar', cancel:'Cancelar'});
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof deleteproveedor.error!='undefined'){
      deleteproveedor.error===false?alertify.success("Se eliminó correctamente"):alertify.error("No se puede eliminar")
      store.dispatch(getUsuarios())
      props.deleteUsuario()
    }
  }, [deleteproveedor])


  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Proveedores</h6>
           <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
             Nuevo
           </Button>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="row">Código</th>
             <th scope="col">Nombre</th>
             <th scope="col">Descripción</th>
             <th scope="col">Email</th>
             <th scope="col">Dirección</th>
             <th scope="col">Celular</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           {Array.isArray(proveedors.proveedors) ? proveedors.proveedors.map((e, index) => {
              return proveedors.proveedors.length===0?
                <tr><td colSpan="8"><center>SIN DATOS..</center></td></tr>
               :<tr>
               <th scope="row">{index+1}</th>
               <th>{e.cod_proveedor}</th>
               <td>{e.nombre}</td>
               <td>{e.descripcion}</td>
               <td>{e.direccion}</td>
               <td>{e.email}</td>
               <td>{e.numero_celular}</td>
               <td>
                 <Link to={`/proveedores/${e.cod_proveedor}`} className={global.icon} title="Editar">
                   <i className="fas fa-user-edit"></i>
                 </Link>
                 <a style={{cursor: 'pointer'}} onClick={() => handleDelete({'name': e.nombre, 'id': e.cod_proveedor})}
                    className="delete" title="Eliminar">
                   <i className="fas fa-trash-alt"></i>
                 </a>
               </td>
             </tr>
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
        <Modal.Title>Nuevo Proveedor</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit.bind()}>
        <Modal.Body>
          <Input
            sty="col-md-12"
            id="cod_proveedor"
            name="cod_proveedor"
            type="text"
            label="CI/RUC"
            required
            onChange={(e)=>setCod_proveedor(e.target.value)}
            defaultValue={cod_proveedor}
          />
          <Input
            sty="col-md-12"
            id="name"
            name="name"
            type="text"
            label="Nombre"
            required
            onChange={(e)=>setNombre(e.target.value)}
            defaultValue={nombre}
          />
          <Input
            sty="col-md-12"
            id="descripcion"
            name="lastname"
            type="text"
            label="Descripción"
            onChange={(e)=>setDescripcion(e.target.value)}
            defaultValue={descripcion}
          />
          <Input
            sty="col-md-12"
            id="email"
            name="email"
            type="email"
            label="Correo Electronico"
            required
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue={email}
          />

          <Input
            sty="col-md-12"
            id="direccion"
            name="direccion"
            type="text"
            label="Dirección"
            required
            onChange={(e)=>setDireccion(e.target.value)}
            defaultValue={direccion}
          />

          <Input
            sty="col-md-12"
            id="numero_celular"
            name="numero_celular"
            type="text"
            label="Celular"
            required
            onChange={(e)=>setCelular(e.target.value)}
            defaultValue={celular}
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
  proveedors:state.ProveedorsState,
  postproveedor:state.postProveedorState,
  deleteproveedor:state.deleteProveedorState
})

const mapDispatchToProps = {
  postProveedor,deleteProveedor
}
export default connect(mapStateToProps, mapDispatchToProps)(Proveedores)

