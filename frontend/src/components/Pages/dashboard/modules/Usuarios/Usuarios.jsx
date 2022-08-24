import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import Input from "../molecules/input/Input";
import alertify from "alertifyjs";

const Usuarios=()=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [rol, setRol] = useState('');



  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleDelete=(data)=>{
    alertify.confirm('Eliminar Usuario', `¿Seguro de eliminar el usuario: ${data.name}?`,()=> { }
      , function () {
      }).set('labels', {ok:'Aceptar', cancel:'Cancelar'});
  }

  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Usuarios</h6>
           <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
             Nuevo
           </Button>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Cédula</th>
             <th scope="col">Nombre</th>
             <th scope="col">Apellido</th>
             <th scope="col">Email</th>
             <th scope="col">Dirección</th>
             <th scope="col">Celular</th>
             <th scope="col">Rol</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <th scope="row">1</th>
             <td>0250366515</td>
             <td>Juan</td>
             <td>Peres</td>
             <td>jperes@mailes.es</td>
             <td>Algun Lado</td>
             <td>0980150689</td>
             <td>Administrador</td>
             <td>
              <Link to={`/usuarios/1`} className={global.icon} title="Editar">
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
        <Modal.Title>Nuevo Usuario</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit.bind()}>
        <Modal.Body>
          <Input
            sty="col-md-12"
            id="cedula"
            name="cedula"
            type="text"
            label="Cédula"
            required
            onChange={(e)=>setCedula(e.target.value)}
            defaultValue={cedula}
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
            id="lastname"
            name="lastname"
            type="text"
            label="Apellido"
            onChange={(e)=>setApellido(e.target.value)}
            defaultValue={apellido}
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
          <Input
            sty="col-md-12"
            id="codigo_rol"
            name="codigo_rol"
            type="text"
            label="Rol"
            required
            onChange={(e)=>setRol(e.target.value)}
            defaultValue={rol}
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

export default Usuarios;
