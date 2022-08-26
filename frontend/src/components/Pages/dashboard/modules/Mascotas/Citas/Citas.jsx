import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import alertify from "alertifyjs";
import {connect} from "react-redux";
import store from "../../../../../../redux/store";
import Input from "../../molecules/input/Input";
import {deleteCita, getCitas, getMascotas, postCita} from "../../../../../../redux/actionCreators";
import Select from "../../molecules/Select";
import {postCita as postCitaState} from "../../../../../../redux/reducers";

const Citas=(props)=>{
  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);
  const {match,citas,postcita,deletecita,mascotas}=props

  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tipo, setTipo] = useState('');
  const [detalle, setDetalle] = useState('');
  const [cod_mascota, setCod_mascota] = useState('');
  const [dmascotas, setDmascotas] = useState([]);


  useEffect(() => {
    store.dispatch(getCitas())
    store.dispatch(getMascotas())
  }, [match])

  useEffect(() => {
    setDmascotas([])
    mascotas?.mascotas?.map(e=>{
      const data= {
        'value':e.cod_mascota,
        'label':e.nombre
      };
      setDmascotas(
        dmascotas=>[
          ...dmascotas,
          data
        ]
      )
    })
  }, [mascotas]);

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof postcita.error!='undefined'){
      postcita.error===false?alertify.success("Se creó correctamente"):alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getCitas())
      props.postCita()
    }
  }, [postcita])

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof deletecita.error!='undefined'){
      deletecita.error===false?alertify.success("Se eliminó correctamente"):alertify.error("No se puede eliminar")
      store.dispatch(getCitas())
      props.deleteCita()
    }
  }, [deletecita])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {
      fecha:fecha,
      hora:hora,
      tipo:tipo,
      detalle:detalle,
      cod_mascota:cod_mascota
    }
    props.postCita(data)
  }

  const handleDelete=(data)=> {
    alertify.confirm('Eliminar Cita', `¿Seguro de eliminar la cita de: ${data.name}?`, () => {
        props.deleteCita(data.id)
      }
      , function () {
      }).set('labels', {ok: 'Aceptar', cancel: 'Cancelar'});
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
             <th scope="col">Mascota</th>
             <th scope="col">Fecha</th>
             <th scope="col">Hora</th>
             <th scope="col">Tipo</th>
             <th scope="col">Detalle</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           {Array.isArray(citas.citas) ? citas.citas.map((e, index) => {
             return(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>{e.nombre}</td>
                 <td>{e.fecha}</td>
                 <td>{e.hora}</td>
                 <td>{e.tipo}</td>
                 <td>{e.detalle}</td>
                 <td>
                   <Link to={`/mascotas/citas/${e.cod_cita}`} className={global.icon} title="Editar">
                     <i className="fas fa-user-edit"></i>
                   </Link>
                   <a style={{cursor:'pointer'}} onClick={()=>handleDelete({'name':e.nombre,'id':e.cod_cita})} className="delete"  title="Eliminar">
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
          <Select
            label="Mascota"
            required
            options={dmascotas}
            id="cod_mascota"
            name="cod_mascota"
            handleChange={(e)=>setCod_mascota(e.target.value)}
            defaultValue={cod_mascota}
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
  citas:state.CitasState,
  postcita:state.postCitaState,
  deletecita:state.deleteCitaState,
  mascotas:state.MascotasState,
})

const mapDispatchToProps = {
  postCita, deleteCita
}


export default connect(mapStateToProps, mapDispatchToProps)(Citas)

