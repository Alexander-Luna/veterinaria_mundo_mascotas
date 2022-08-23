import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import Input from "../../molecules/input/Input";


const Especies=()=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);

  const [nombre_especie, setNombre_especie] = useState('');
  const [detalle, setDetalle] = useState('');


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return <>
   <div className="container-fluid">
       <div className="card-header py-3 d-flex">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Especies</h6>
           <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
             Nuevo
           </Button>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Especie</th>
             <th scope="col">Detalle</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Dalmata</td>
             <td>ALgun detalle</td>
             <td>
              <Link to={`/mascotas/especies/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}}  className={`delete ${global.icon}`}  title="Eliminar">
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
        <Modal.Title>Nueva Especie</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit.bind()}>
        <Modal.Body>
          <Input
            sty="col-md-12"
            id="nombre_especie"
            name="nombre_especie"
            type="text"
            label="Especie"
            required
            onChange={(e)=>setNombre_especie(e.target.value)}
            defaultValue={nombre_especie}
          />
          <Input
            sty="col-md-12"
            id="detalle"
            name="detalle"
            type="text"
            label="Detalle"
            required
            onChange={(e)=>setDetalle(e.target.value)}
            defaultValue={detalle}
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

export default Especies;
