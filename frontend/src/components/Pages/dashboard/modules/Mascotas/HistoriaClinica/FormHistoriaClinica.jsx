import {Link} from "react-router-dom";
import {useState} from 'react'
import style from './style.module.scss'
import Input from "../../molecules/input/Input";



const FormHistoriaClinica=({data})=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [peso, setPeso] = useState('');
  const [frecuencia_cardiaca, setFrecuencia_cardiaca] = useState('');
  const [frecuencia_respiratoria, setFrecuencia_respiratoria] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [descripcion, setDescripcion] = useState('');



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
      <h6 className="col-11 m-0 font-weight-bold text-primary">Historia Clinica {/*data.name*/}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="peso"
              name="peso"
              type="text"
              label="Peso (KG)"
              required
              onChange={(e)=>setPeso(e.target.value)}
              defaultValue={peso}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="frecuencia_cardiaca"
              name="frecuencia_cardiaca"
              type="text"
              label="Frecuencia Cardiaca"
              required
              onChange={(e)=>setFrecuencia_cardiaca(e.target.value)}
              defaultValue={frecuencia_cardiaca}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="frecuencia_respiratoria"
              name="frecuencia_respiratoria"
              type="text"
              label="Frecuencia Respiratoria"
              required
              onChange={(e)=>setFrecuencia_respiratoria(e.target.value)}
              defaultValue={frecuencia_respiratoria}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="temperatura"
              name="temperatura"
              type="text"
              label="Temperatura °C"
              required
              onChange={(e)=>setTemperatura(e.target.value)}
              defaultValue={temperatura}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="descripcion"
              name="descripcion"
              type="text"
              label="Descripción"
              required
              onChange={(e)=>setDescripcion(e.target.value)}
              defaultValue={descripcion}
            />
            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/mascotas/1/citas'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

export default FormHistoriaClinica;
