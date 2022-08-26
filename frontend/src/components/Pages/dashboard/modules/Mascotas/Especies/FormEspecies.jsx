import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import {connect} from "react-redux";
import alertify from "alertifyjs";
import {getEspecie, putEspecie} from "../../../../../../redux/actionCreators";
import store from "../../../../../../redux/store";
import Input from "../../molecules/input/Input";


const FormEspecies=(props)=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [nombre_especie, setNombre_especie] = useState('');
  const [detalle, setDetalle] = useState();

  let { id } = useParams();
  const{especie,putespecie}=props

  useEffect(() => {
    store.dispatch(getEspecie(id))
  }, [id])

  useEffect(() => {
    setNombre_especie(especie?.especie?.nombre_especie)
    setDetalle(especie?.especie?.detalle)
  }, [especie]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      nombre_especie:nombre_especie,
      detalle:detalle,
    }
    props.putEspecie(id,data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putespecie.error!='undefined'){
      putespecie.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putEspecie()
    }
  }, [putespecie])


  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar especie {nombre_especie}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="nombre_especie"
              name="nombre_especie"
              type="text"
              label="Nombre Especie"
              required
              onChange={(e)=>setNombre_especie(e.target.value)}
              defaultValue={nombre_especie}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="detalle"
              name="detalle"
              type="text"
              label="Detalle"
              onChange={(e)=>setDetalle(e.target.value)}
              defaultValue={detalle}
            />

            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/mascotas/especies'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

const mapStateToProps = (state) => ({
  especie: state.EspecieState,
  putespecie: state.putEspecieState
})

const mapDispatchToProps = {
  putEspecie, getEspecie
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEspecies);

