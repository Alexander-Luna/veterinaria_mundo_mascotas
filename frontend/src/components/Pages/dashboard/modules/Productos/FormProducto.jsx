import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import Input from "../molecules/input/Input";
import {connect} from "react-redux";
import store from "../../../../../redux/store";
import alertify from "alertifyjs";
import {getCategoria, putCategoria} from "../../../../../redux/actionCreators";


const FormProducto=(props)=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState();

  let { id } = useParams();
  const{categoria,putcategoria}=props

  useEffect(() => {
    store.dispatch(getCategoria(id))
  }, [id])

  useEffect(() => {
    setNombre(categoria?.categoria?.nombre)
    setDescripcion(categoria?.categoria?.descripcion)
  }, [categoria]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      nombre:nombre,
      descripcion:descripcion,
    }
    props.putCategoria(id,data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putcategoria.error!='undefined'){
      putcategoria.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putCategoria()
    }
  }, [putcategoria])


  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Categoria {nombre}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="name"
              name="name"
              type="text"
              label="Nombre"
              required
              onChange={(e)=>setNombre(e.target.value)}
              defaultValue={nombre}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="descripcion"
              name="descripcion"
              type="text"
              label="descripcion"
              onChange={(e)=>setDescripcion(e.target.value)}
              defaultValue={descripcion}
            />

            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/categorias'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

const mapStateToProps = (state) => ({
  categoria: state.CategoriaState,
  putcategoria: state.putCategoriaState
})

const mapDispatchToProps = {
  putCategoria, getCategoria
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProducto);

