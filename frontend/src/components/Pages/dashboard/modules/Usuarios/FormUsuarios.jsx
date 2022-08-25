import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import Input from "../molecules/input/Input";
import Select from "../molecules/Select";
import {getUsuario, putUsuario as putUsuarioState} from "../../../../../redux/reducers";
import {connect} from "react-redux";
import {putUsuario} from "../../../../../redux/actionCreators";
import store from "../../../../../redux/store";
import alertify from "alertifyjs";


const FormUsuarios=(props)=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [rol, setRol] = useState('');
  const [password, setPassword] = useState('');
  let { id } = useParams();
  const{usuario,putusuario}=props

  useEffect(() => {
    //store.dispatch(getUsuario(id))
  }, [id])

  useEffect(() => {
    setCedula(usuario?.usuario?.cedula)
    setNombre(usuario?.usuario?.nombres)
    setApellido(usuario?.usuario?.apellido)
    setEmail(usuario?.usuario?.email)
    setDireccion(usuario?.usuario?.direccion)
    setCelular(usuario?.usuario?.numero_celular)
    setRol(usuario?.usuario?.cod_rol)
  }, [usuario]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      cedula:cedula,
      nombres:nombre,
      apellido:apellido,
      email:email,
      direccion:direccion,
      celular:celular,
      cod_rol:rol,
      password:password
    }
    console.log(data)
    props.putUsuario(id,data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putusuario.error!='undefined'){
      putusuario.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putUser()
    }
  }, [putusuario])

  const rols= [
    {
      label: "Administrador",
      value: "1",
    },
    {
      label: "Vendedor/Veterinario",
      value: "2",
    },
    {
      label: "Cliente",
      value: "3",
    },
  ]

  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Usuario {nombre}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="cedula"
              name="cedula"
              type="text"
              label="Cédula"
              required
              onChange={(e)=>setCedula(e.target.value)}
              defaultValue={cedula}
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
              id="lastname"
              name="lastname"
              type="text"
              label="Apellido"
              onChange={(e)=>setApellido(e.target.value)}
              defaultValue={apellido}
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
            <Input
              sty="col-md-12  col-lg-6"
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              onChange={(e)=>setPassword(e.target.value)}
              defaultValue={password}
            />
            <Select
              label="Rol"
              required
              options={rols}
              id="cod_rol"
              name="cod_rol"
              handleChange={(e)=>setRol(e.target.value)}
              defaultValue={rol}
            />
            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/usuarios'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

const mapStateToProps = (state) => ({
  usuario: state.UsuarioState,
  putusuario: state.putUsuarioState
})

const mapDispatchToProps = {
  putUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUsuarios);

