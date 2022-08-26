import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import {connect} from "react-redux";
import alertify from "alertifyjs";
import store from "../../../../../../redux/store";
import Input from "../../molecules/input/Input";
import {getCita, putCita} from "../../../../../../redux/actionCreators";


const FormCitas=(props)=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tipo, setTipo] = useState('');
  const [detalle, setDetalle] = useState('');
  const [mascota, setMascota] = useState('');

  let { id } = useParams();
  const{cita,putcita}=props

  useEffect(() => {
    store.dispatch(getCita(id))
  }, [id])

  useEffect(() => {
    setFecha(cita?.cita?.fecha)
    setHora(cita?.cita?.hora)
    setTipo(cita?.cita?.tipo)
    setDetalle(cita?.cita?.detalle)
    setMascota(cita?.cita?.nombre)
  }, [cita]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      fecha:fecha,
      hora:hora,
      tipo:tipo,
      detalle:detalle
    }
    props.putCita(id,data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putcita.error!='undefined'){
      putcita.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putCita()
    }
  }, [putcita])


  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar cita de {mascota}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
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
            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/mascotas/citas'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

const mapStateToProps = (state) => ({
  cita: state.CitaState,
  putcita: state.putCitaState
})

const mapDispatchToProps = {
  putCita, getCita
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCitas);

