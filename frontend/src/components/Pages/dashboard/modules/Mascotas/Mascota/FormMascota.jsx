import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import {connect} from "react-redux";
import alertify from "alertifyjs";
import store from "../../../../../../redux/store";
import Input from "../../molecules/input/Input";
import Select from "../../molecules/Select";
import {getEspecies, getMascota, putMascota} from "../../../../../../redux/actionCreators";

const FormMascota=(props)=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [fecha_nacimiento, setFecha_nacimiento] = useState('');
  const [cod_especie, setCod_especie] = useState('');

  const [despecies, setDespecies] = useState([]);

  let { id } = useParams();
  const{mascota,putmascota,especies}=props

  useEffect(() => {
    store.dispatch(getMascota(id))
    store.dispatch(getEspecies())
  }, [id])

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


  useEffect(() => {
    setCodigo(mascota?.mascota?.codigo)
    setNombre(mascota?.mascota?.nombre)
    setRaza(mascota?.mascota?.raza)
    setFecha_nacimiento(mascota?.mascota?.fecha_nacimiento)
    setCod_especie(mascota?.mascota?.cod_especie)
  }, [mascota]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      codigo:codigo,
      nombre:nombre,
      raza:raza,
      fecha_nacimiento:fecha_nacimiento,
      cod_especie:cod_especie
    }
    props.putMascota(id,data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putmascota.error!='undefined'){
      putmascota.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putMascota()
    }
  }, [putmascota])


  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar mascota {nombre}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="codigo"
              name="codigo"
              type="text"
              label="Código de identificacion"
              required
              onChange={(e)=>setCodigo(e.target.value)}
              defaultValue={codigo}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="nombre"
              name="nombre"
              type="text"
              label="Nombre"
              required
              onChange={(e)=>setNombre(e.target.value)}
              defaultValue={nombre}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="raza"
              name="raza"
              type="text"
              label="Raza"
              required
              onChange={(e)=>setRaza(e.target.value)}
              defaultValue={raza}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              type="date"
              label="Fecha Nacimiento"
              required
              onChange={(e)=>setFecha_nacimiento(e.target.value)}
              defaultValue={fecha_nacimiento}
            />
            <Select
              sty="col-md-12 col-lg-6"
              label="especie"
              required
              options={despecies}
              id="especie"
              name="especie"
              handleChange={(e)=>setCod_especie(e.target.value)}
              defaultValue={cod_especie}
            />
            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/mascotas/mascota'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

const mapStateToProps = (state) => ({
  mascota: state.MascotaState,
  putmascota: state.putMascotaState,
  especies:state.EspeciesState,
})

const mapDispatchToProps = {
  putMascota, getMascota
}

export default connect(mapStateToProps, mapDispatchToProps)(FormMascota);

