import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import Input from "../../molecules/input/Input";
import alertify from "alertifyjs";


const Mascota=()=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);

  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [fecha_nacimiento, setFecha_nacimiento] = useState('');
  const [cod_especie, setCod_especie] = useState('');
  const [cedula_cliente, setCedula_cliente] = useState('');


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleDelete=(data)=>{
    alertify.confirm('Eliminar Mascota', `¿Seguro de eliminar la mascota: ${data.name}?`,()=> { }
      , function () {
      }).set('labels', {ok:'Aceptar', cancel:'Cancelar'});
  }


  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Mascotas</h6>
           <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
             Nuevo
           </Button>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Código</th>
             <th scope="col">Nombre</th>
             <th scope="col">Raza</th>
             <th scope="col">Fecha Nacimiento</th>
             <th scope="col">Especie</th>
             <th scope="col">Cliente</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <th scope="row">1</th>
             <td>PER-001-1</td>
             <td>Toby</td>
             <td>Dalmada</td>
             <td>02/02/2022</td>
             <td>Perro</td>
             <td>Juan Peres</td>
             <td>
              <Link to={`/mascotas/mascota/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <Link to={`/mascotas/1/citas`} className={global.icon} title="Citas">
                 <i className="fas fa-notes-medical"></i>
               </Link>
               <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':'Toby','id':1})} className="delete"  title="Eliminar">
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
        <Modal.Title>Nueva Mascota</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit.bind()}>
        <Modal.Body>
          <Input
            sty="col-md-12"
            id="codigo"
            name="codigo"
            type="text"
            label="Código de identificacion"
            required
            onChange={(e)=>setCodigo(e.target.value)}
            defaultValue={codigo}
          />
          <Input
            sty="col-md-12"
            id="nombre"
            name="nombre"
            type="text"
            label="Nombre"
            required
            onChange={(e)=>setNombre(e.target.value)}
            defaultValue={nombre}
          />
          <Input
            sty="col-md-12"
            id="raza"
            name="raza"
            type="text"
            label="Raza"
            required
            onChange={(e)=>setRaza(e.target.value)}
            defaultValue={raza}
          />
          <Input
            sty="col-md-12"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            type="date"
            label="Fecha Nacimiento"
            required
            onChange={(e)=>setFecha_nacimiento(e.target.value)}
            defaultValue={fecha_nacimiento}
          />
          <Input
            sty="col-md-12"
            id="especie"
            name="especie"
            type="text"
            label="Especie"
            required
            onChange={(e)=>setCod_especie(e.target.value)}
            defaultValue={cod_especie}
          />
          <Input
            sty="col-md-12"
            id="cliente"
            name="cliente"
            type="text"
            label="Cliente"
            required
            onChange={(e)=>setCedula_cliente(e.target.value)}
            defaultValue={cedula_cliente}
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

export default Mascota;
