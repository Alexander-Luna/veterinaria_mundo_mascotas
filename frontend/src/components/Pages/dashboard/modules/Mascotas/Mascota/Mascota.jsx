import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import alertify from "alertifyjs";
import {connect} from "react-redux";
import store from "../../../../../../redux/store";
import Input from "../../molecules/input/Input";
import {deleteMascota, getEspecies, getMascotas, postMascota} from "../../../../../../redux/actionCreators";
import Select from "../../molecules/Select";

const Mascota=(props)=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const {match,mascotas,postmascota,deletemascota,especies}=props

  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [fecha_nacimiento, setFecha_nacimiento] = useState('');
  const [cod_especie, setCod_especie] = useState('');

  const [despecies, setDespecies] = useState([]);

  useEffect(() => {
    store.dispatch(getMascotas())
    store.dispatch(getEspecies())
  }, [match])

  useEffect(() => {
    setDespecies([])
    especies?.especies?.map(e=>{
      const data= {
        'value':e.cod_especie,
        'label':e.nombre_especie
      };
      setDespecies(
        dcategorias=>[
          ...dcategorias,
          data
        ]
      )
    })
  }, [especies]);


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof postmascota.error!='undefined'){
      postmascota.error===false?alertify.success("Se creó correctamente"):alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getMascotas())
      props.postMascota()
    }
  }, [postmascota])

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof deletemascota.error!='undefined'){
      deletemascota.error===false?alertify.success("Se eliminó correctamente"):alertify.error("No se puede eliminar")
      store.dispatch(getMascotas())
      props.deleteMascota()
    }
  }, [deletemascota])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {
      codigo:codigo,
      nombre:nombre,
      raza:raza,
      fecha_nacimiento:fecha_nacimiento,
      cod_especie:cod_especie
    }
    props.postMascota(data)
  }

  const handleDelete=(data)=> {
    alertify.confirm('Eliminar Mascota', `¿Seguro de eliminar la mascota: ${data.nombre}?`, () => {
        props.deleteMascota(data.id)
      }
      , function () {
      }).set('labels', {ok: 'Aceptar', cancel: 'Cancelar'});
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
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           {Array.isArray(mascotas.mascotas) ? mascotas.mascotas.map((e, index) => {
             return(
               <tr key={index}>
                 <td scope="row">{index+1}</td>
                 <td>{e.codigo}</td>
                 <td>{e.nombre}</td>
                 <td>{e.raza}</td>
                 <td>{e.fecha_nacimiento}</td>
                 <td>{e.especie}</td>
                 <td>
                   <Link to={`/mascotas/mascota/${e.cod_mascota}`} className={global.icon} title="Editar">
                     <i className="fas fa-user-edit"></i>
                   </Link>
                   <Link to={`/mascotas/${e.cod_mascota}/citas`} className={global.icon} title="Citas">
                     <i className="fas fa-notes-medical"></i>
                   </Link>
                   <Link to={`/mascotas/${e.cod_mascota}/historia`} className={global.icon} title="Historia Clinica">
                     <i className="fas fa-notes-medical"></i>
                   </Link>
                   <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':e.nombre,'id':e.cod_mascota})} className="delete"  title="Eliminar">
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
          <Select
            sty="col-md-12"
            label="especie"
            required
            options={despecies}
            id="especie"
            name="especie"
            handleChange={(e)=>setCod_especie(e.target.value)}
            defaultValue={cod_especie}
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
  mascotas:state.MascotasState,
  postmascota:state.postMascotaState,
  deletemascota:state.deleteMascotaState,
  especies:state.EspeciesState,
})

const mapDispatchToProps = {
  postMascota, deleteMascota
}


export default connect(mapStateToProps, mapDispatchToProps)(Mascota)

