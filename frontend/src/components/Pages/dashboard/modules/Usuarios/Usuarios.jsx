import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Input from "../molecules/input/Input";
import alertify from "alertifyjs";
import {deleteUsuario, getUsuarios, postUser} from "../../../../../redux/actionCreators";
import {connect} from "react-redux";
import store from "../../../../../redux/store";
import Select from "../molecules/Select";

const Usuarios=(props)=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const {usuarios,match,usuario,deleteusuario}=props

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [rol, setRol] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    store.dispatch(getUsuarios())
  }, [match])


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof usuario.error!='undefined'){
      usuario.error===false?alertify.success("Se creó correctamente"):alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getUsuarios())
      props.postUser()
    }
  }, [usuario])

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof deleteusuario.error!='undefined'){
      deleteusuario.error===false?alertify.success("Se eliminó correctamente"):alertify.error("No se puede eliminar")
      store.dispatch(getUsuarios())
      props.deleteUsuario()
    }
  }, [deleteusuario])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {
      cedula:cedula,
      nombres:nombre,
      apellido:apellido,
      email:email,
      direccion:direccion,
      celular:celular,
      cod_rol:rol,
      password:password
    }
    console.log(data)
    props.postUser(data)
  }

  const handleDelete=(data)=> {
    alertify.confirm('Eliminar Usuario', `¿Seguro de eliminar el usuario: ${data.name}?`, () => {
        props.deleteUsuario(data.id)
      }
      , function () {
      }).set('labels', {ok: 'Aceptar', cancel: 'Cancelar'});
  }
  const rols= [
    {
      label: "Administrador",
      value: "0",
    },
    {
      label: "Vendedor/Veterinario",
      value: "1",
    },
    {
      label: "Cliente",
      value: "2",
    }
  ]

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
           {Array.isArray(usuarios.usuarios) ? usuarios.usuarios.map((e, index) => {
             return(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
               <td>{e.cedula}</td>
               <td>{e.nombres}</td>
               <td>{e.apellido}</td>
               <td>{e.email}</td>
               <td>{e.direccion}</td>
               <td>{e.numero_celular}</td>
               <td>{e.cod_rol==0?'administrador':e.cod_rol==1?'Vendedor/Veterinario':'cliente'}</td>
               <td>
               <Link to={`/usuarios/${e.cod_user}`} className={global.icon} title="Editar">
               <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':e.nombres,'id':e.cod_user})} className="delete"  title="Eliminar">
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
            id="password"
            name="password"
            type="password"
            label="Contraseña"
            required
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue={password}
          />
          <Select
            label="Rol"
            required
            options={rols}
            id="cod_rol"
            name="cod_rol"
            handleChange={(e)=>setRol(e.target.value)}
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

const mapStateToProps = (state) => ({
  usuarios:state.UsuariosState,
  usuario:state.postUserState,
  deleteusuario:state.deleteUsuarioState,
})

const mapDispatchToProps = {
  postUser, deleteUsuario
}


export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)

