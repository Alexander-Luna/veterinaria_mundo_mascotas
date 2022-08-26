import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Input from "../molecules/input/Input";
import alertify from "alertifyjs";
import {connect} from "react-redux";
import {deleteCategoria, getCategorias, postCategoria} from "../../../../../redux/actionCreators";
import store from "../../../../../redux/store";

const Categoria=(props)=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const {match,categorias,postcategoria,deletecategoria}=props

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState();


  useEffect(() => {
    store.dispatch(getCategorias())
  }, [match])


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof postcategoria.error!='undefined'){
      postcategoria.error===false?alertify.success("Se creó correctamente"):alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getCategorias())
      props.postCategoria()
    }
  }, [postcategoria])

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof deletecategoria.error!='undefined'){
      deletecategoria.error===false?alertify.success("Se eliminó correctamente"):alertify.error("No se puede eliminar")
      store.dispatch(getCategorias())
      props.deleteCategoria()
    }
  }, [deletecategoria])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {
      descripcion:descripcion,
      nombre:nombre
    }
    props.postCategoria(data)
  }

  const handleDelete=(data)=> {
    alertify.confirm('Eliminar Categoria', `¿Seguro de eliminar la categoria: ${data.name}?`, () => {
        props.deleteCategoria(data.id)
      }
      , function () {
      }).set('labels', {ok: 'Aceptar', cancel: 'Cancelar'});
  }

  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Categorias</h6>
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
             <th scope="col">Descripción</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           {Array.isArray(categorias.categorias) ? categorias.categorias.map((e, index) => {
             return(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
               <td>{e.nombre}</td>
                 <td>{e.descripcion}</td>
               <td>
               <Link to={`/categorias/${e.cod_categoria}`} className={global.icon} title="Editar">
               <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':e.nombre,'id':e.cod_categoria})} className="delete"  title="Eliminar">
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
        <Modal.Title>Nueva Categoria</Modal.Title>
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
            onChange={(e)=>setNombre(e.target.value)}
            defaultValue={nombre}
          />
          <Input
            sty="col-md-12"
            id="descripcion"
            name="descripcion"
            type="text"
            label="descripcion"
            onChange={(e)=>setDescripcion(e.target.value)}
            defaultValue={descripcion}
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
  categorias:state.CategoriasState,
  postcategoria:state.postCategoriaState,
  deletecategoria:state.deleteCategoriaState,
})

const mapDispatchToProps = {
  postCategoria, deleteCategoria
}


export default connect(mapStateToProps, mapDispatchToProps)(Categoria)

