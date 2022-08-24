import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import Input from "../molecules/input/Input";
import alertify from "alertifyjs";
import ima from '../../../../img/alimento_humedo.png'

const AdminProductos=()=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);

  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [fecha_caducidad, setFecha_caducidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio_compra, setPrecio_compra] = useState('');
  const [precio_venta, setPrecio_venta] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cod_categoria, setCod_categoria] = useState('');
  const [imagen, setImagen] = useState('');

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleDelete=(data)=>{
    alertify.confirm('Eliminar Producto', `¿Seguro de eliminar el Producto: ${data.name}?`,()=> { }
      , function () {
      }).set('labels', {ok:'Aceptar', cancel:'Cancelar'});
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
           <tr>
             <th scope="row">1</th>
             <td>RECETA ORIGINAL DE POLLO</td>
             <td>
               <img src={ima} width="100"/>
             </td>
             <td>11525</td>
             <td>02/02/2023</td>
             <td>Alimento completo y balanceado para nutrir a tu cachorro hasta el primer año de edad.</td>
             <td>20.00</td>
             <td>25.00</td>
             <td>250</td>
             <td>Comida Perros</td>
             <td>
              <Link to={`/admin/productos/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':'Juan Perez','id':1})} className="delete"  title="Eliminar">
                 <i className="fas fa-trash-alt"></i>
               </a>
             </td>
           </tr>
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
            onChange={(e)=>setNombre(e.target.value)}
            defaultValue={nombre}
          />
          <Input
            sty="col-md-12"
            id="codigo"
            name="codigo"
            type="text"
            label="Codigo"
            onChange={(e)=>setCodigo(e.target.value)}
            defaultValue={codigo}
          />
          <Input
            sty="col-md-12"
            id="fecha_caducidad"
            name="fecha_caducidad"
            type="date"
            label="Fecha Caducidad"
            required
            onChange={(e)=>fecha_caducidad(e.target.value)}
            defaultValue={fecha_caducidad}
          />

          <Input
            sty="col-md-12"
            id="descripcion"
            name="descripcion"
            type="text"
            label="Descripción"
            required
            onChange={(e)=>setDescripcion(e.target.value)}
            defaultValue={descripcion}
          />

          <Input
            sty="col-md-12"
            id="precio_compra"
            name="precio_compra"
            type="text"
            label="Precio Compra"
            required
            onChange={(e)=>setPrecio_compra(e.target.value)}
            defaultValue={precio_compra}
          />

          <Input
            sty="col-md-12"
            id="precio_venta"
            name="precio_venta"
            type="text"
            label="Precio Venta"
            required
            onChange={(e)=>setPrecio_venta(e.target.value)}
            defaultValue={precio_venta}
          />
          <Input
            sty="col-md-12"
            id="cantidad"
            name="cantidad"
            type="text"
            label="Cantidad"
            required
            onChange={(e)=>setCantidad(e.target.value)}
            defaultValue={cantidad}
          />
          <Input
            sty="col-md-12"
            id="cod_categoria"
            name="cod_categoria"
            type="text"
            label="Categoria"
            required
            onChange={(e)=>setCod_categoria(e.target.value)}
            defaultValue={cod_categoria}
          />
          <Input
            sty="col-md-12"
            id="imagen"
            name="imagen"
            type="file"
            label="Imagen"
            required
            onChange={(e)=>setImagen(e.target.value)}
            defaultValue={imagen}
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

export default AdminProductos;
