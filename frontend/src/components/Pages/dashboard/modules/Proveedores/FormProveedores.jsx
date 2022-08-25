import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import Input from "../molecules/input/Input";
import {getProveedor, putProveedor} from "../../../../../redux/actionCreators";
import {connect} from "react-redux";
import store from "../../../../../redux/store";
import alertify from "alertifyjs";


const FormProveedores=(props)=>{
  const [btnSubmit, setBtnSubmit] = useState(false)
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState();
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [cod_proveedor, setCod_proveedor] = useState('');
  let { id } = useParams();

  const {proveedor,putproveedor}=props

  useEffect(() => {
    store.dispatch(getProveedor(id))
  }, [id]);


  useEffect(() => {
      setNombre(proveedor?.proveedor?.nombre)
    setDescripcion(proveedor?.proveedor?.descripcion)
    setEmail(proveedor?.proveedor?.email)
    setDireccion(proveedor?.proveedor?.direccion)
    setCelular(proveedor?.proveedor?.numero_celular)
    setCod_proveedor(proveedor?.proveedor?.ced_o_ruc)
  }, [proveedor]);

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putproveedor.error!='undefined'){
      putproveedor.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putProveedor()
    }
  }, [putproveedor])

  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      nombre:nombre,
      descripcion:descripcion,
      email:email,
      direccion:direccion,
      numero_celular:celular
    }
    props.putProveedor(id,data)
  }

  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Proveedor {/*data.name*/}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="cod_proveedor"
              name="cod_proveedor"
              type="text"
              label="CI/RUC"
              required
              onChange={(e)=>setCod_proveedor(e.target.value)}
              defaultValue={cod_proveedor}
              disabled
            />
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
              label="Apellido"
              onChange={(e)=>setDescripcion(e.target.value)}
              defaultValue={descripcion}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="email"
              name="email"
              type="email"
              label="Correo Electronico"
              required
              onChange={(e)=>setEmail(e.target.value)}
              defaultValue={email}
            />

            <Input
              sty="col-md-12 col-lg-6"
              id="direccion"
              name="direccion"
              type="text"
              label="Dirección"
              required
              onChange={(e)=>setDireccion(e.target.value)}
              defaultValue={direccion}
            />

            <Input
              sty="col-md-12 col-lg-6"
              id="numero_celular"
              name="numero_celular"
              type="text"
              label="Celular"
              required
              onChange={(e)=>setCelular(e.target.value)}
              defaultValue={celular}
            />
            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/proveedores'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

const mapStateToProps = (state) => ({
    proveedor:state.ProveedorState,
    putproveedor:state.putProveedorState
})

const mapDispatchToProps = {
  putProveedor,getProveedor
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProveedores);

