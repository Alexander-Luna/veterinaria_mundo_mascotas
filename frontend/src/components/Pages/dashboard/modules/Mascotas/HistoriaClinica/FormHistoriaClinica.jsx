import {Link} from "react-router-dom";
import {useState} from 'react'
import style from './style.module.scss'
import Input from "../../molecules/input/Input";



const FormHistoriaClinica=({data})=>{
  const [btnSubmit, setBtnSubmit] = useState(false)
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [fecha_nacimiento, setFecha_nacimiento] = useState('');
  const [cod_especie, setCod_especie] = useState('');
  const [cedula_cliente, setCedula_cliente] = useState('');


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const form = e.target
    console.log(form)
    //props.putUser(id,data)
  }

  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Mascota {/*data.name*/}</h6>
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
              label="Código"
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
            <Input
              sty="col-md-12 col-lg-6"
              id="especie"
              name="especie"
              type="text"
              label="Especie"
              required
              onChange={(e)=>setCod_especie(e.target.value)}
              defaultValue={cod_especie}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="cliente"
              name="cliente"
              type="text"
              label="Cliente"
              required
              onChange={(e)=>setCedula_cliente(e.target.value)}
              defaultValue={cedula_cliente}
            />
            <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
            <Link to={'/mascotas/mascota'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

export default FormHistoriaClinica;
