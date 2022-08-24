import {Link} from "react-router-dom";
import {useState} from 'react'
import style from './style.module.scss'
import Input from "../../molecules/input/Input";



const FormEspecies=({data})=>{
  const [btnSubmit, setBtnSubmit] = useState(false)
  const [nombre_especie, setNombre_especie] = useState('');
  const [detalle, setDetalle] = useState('');


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
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Especie {/*data.name*/}</h6>
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
              label="Especie"
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
              required
              onChange={(e)=>setNombre_especie(e.target.value)}
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

export default FormEspecies;
