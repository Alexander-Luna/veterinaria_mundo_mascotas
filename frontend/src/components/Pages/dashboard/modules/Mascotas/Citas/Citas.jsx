import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import Input from "../../molecules/input/Input";
import alertify from "alertifyjs";


const Citas=()=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);

  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tipo, setTipo] = useState('');

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleDelete=(data)=>{
    alertify.confirm('Eliminar Citas', `¿Seguro de eliminar la cita: ${data.name}?`,()=> { }
      , function () {
      }).set('labels', {ok:'Aceptar', cancel:'Cancelar'});
  }


  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Citas</h6>
           <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
             Nuevo
           </Button>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Fecha</th>
             <th scope="col">Hora</th>
             <th scope="col">Tipo</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <th scope="row">1</th>
             <td>12/12/2022</td>
             <td>10:45</td>
             <td>Control</td>
             <td>
               <Link to={`/mascotas/1/citas/historia`} className={global.icon} title="Historia Clinica">
                 <i className="fas fa-notes-medical"></i>
               </Link>
               <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':'Dalmata','id':1})} className="delete"  title="Eliminar">
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
        <Modal.Title>Nueva Cita</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit.bind()}>
        <Modal.Body>
          <Input
            sty="col-md-12"
            id="fecha"
            name="fecha"
            type="date"
            label="Fecha"
            required
            onChange={(e)=>setFecha(e.target.value)}
            defaultValue={fecha}
          />
          <Input
            sty="col-md-12"
            id="hora"
            name="hora"
            type="time"
            label="Hora"
            required
            onChange={(e)=>setHora(e.target.value)}
            defaultValue={hora}
          />
          <Input
            sty="col-md-12"
            id="tipo"
            name="tipo"
            type="text"
            label="Tipo"
            required
            onChange={(e)=>setTipo(e.target.value)}
            defaultValue={tipo}
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

export default Citas;
