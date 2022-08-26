import React, {useState} from 'react';
import '../../styles/LoginAndRegister.css'
import { useForm } from 'react-hook-form';
import mascotas from '../img/mascotas.png'
import { NavLink } from 'react-router-dom'
import Axios from "axios";
import alertify from "alertifyjs";
const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [errpass, setErrpass] = useState(false);
  const [erreg, setErreg] = useState(false);
  const [camincompl, setCamincompl] = useState(false);
  const API_URL=process.env.REACT_APP_API_URL

  const postUser = (dat = null) => {
    console.log('se registrara')
      Axios.post(`${API_URL}/api/cliente`, dat, {
        headers: {
          Accept: "application/json"
        },
      })
        .then((resp) => {
          alertify.set("notifier", "position", "bottom-rigth");
          alertify.success("Se registro correctamente")
          localStorage.clear();
          window.location.href = `/login`
        })
        .catch((err) => {
            setErreg(true)
        });
    }

  const soloNumeros=(e)=>{
   /* var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }*/
  }
  const soloLetras=(event)=> {
/*    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }*/
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setErreg(false)
    setCamincompl(false)
    setErrpass(false)
    const data= {
      cedula: e.target.cedula.value,
      nombres: e.target.nombre.value,
      apellido: e.target.apellido.value,
      email: e.target.email.value,
      direccion: e.target.direccion.value,
      celular: e.target.celular.value,
      cod_rol: 2,
      is_register: true,
      password: e.target.password.value
    };
    if(data.cedula===''){
      setCamincompl(true)
      return;
    }
    if(data.nombre===''){
      setCamincompl(true)
      return;
    }
    if(data.apellido===''){
      setCamincompl(true)
      return;
    }
    if(data.email===''){
      setCamincompl(true)
      return;
    }
    if(data.direccion===''){
      setCamincompl(true)
      return;
    }
    if(data.celular===''){
      setCamincompl(true)
      return;
    }
    if(data.password===''){
      setCamincompl(true)
      return;
    }
    if(e.target.cpassword.value==null){
      setCamincompl(true)
      return;
    }
    if(e.target.password.value!==e.target.cpassword.value){
      setErrpass(true)
      return
    }
    postUser(data)
  }
  return (
    <>
      <div class="container-form sign-up">
        <div class="welcome-back">
          <div class="message">
            <h2>Bienvenido a Veterinaria Mundo Mascotas</h2>
            <p>Si aún no tienes una cuenta por favor registrese aquí</p>
            <img src={mascotas} alt="" />
          </div>
        </div>
        <form class="formulario" onSubmit={onSubmit}>
          <h2 class="create-account">Crear Cuenta</h2>
          <div >
            <input
              autoComplete='off'
              onKeyDown={soloNumeros}
              type="text"
              {...register('cedula', { required: true })}
              placeholder="Cedula" />
            {errors.nombre?.type === 'required' && <p>El campo cedula es requerido</p>}
          </div>
          <div >
            <input
              autoComplete='off'
              onKeyDown={soloLetras}
              type="text"
              {...register('nombre', { required: true })}
              placeholder="Nombre" />
            {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
          </div>
          <div >
            <input
              autoComplete='off'
              onKeyDown={soloLetras}
              type="text"
              {...register('apellido', { required: true })}
              placeholder="Apellido" />
            {errors.apellido?.type === 'required' && <p>El campo nombre es requerido</p>}
          </div>
          <div>
            <input type="email" placeholder='E-Mail' {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>}
          </div>
          <div >
            <input
              autoComplete='off'
              onKeyDown={soloNumeros}
              type="text"
              {...register('celular', { required: true })}
              placeholder="Celular" />
            {errors.celular?.type === 'required' && <p>El campo celular es requerido</p>}
          </div>
          <div >
            <input
              type="text"
              {...register('direccion', { required: true })}
              placeholder="Dirección" />
            {errors.direccion?.type === 'required' && <p>El campo dirección es requerido</p>}
          </div>
          <div>
            <input type="password" placeholder="Contraseña"{...register('password', { required: true })} />
            {errors.Contraseña?.type === 'required' && <p>El campo es requerido</p>}
          </div>
          <div>
            <input type="password" placeholder="Confirmar Contraseña"{...register('cpassword', { required: true })} />
            {errors.Contraseña?.type === 'required' && <p>El campo es requerido</p>}
          </div>
          <div style={{color:'red'}}>
            {errpass?<div>Las contraseñas no coinciden</div>:<></>}
            {erreg?<div>Ocurrio un error al registrar</div>:<></>}
            {camincompl?<div>Todos los campos son requerido</div>:<></>}
          </div>
          <button className='envio-informacion' type='submit'>Registrarse</button>
          <div className='envia-registro'>
            <NavLink to="/login">
              <p >Iniciar Sesión</p>
            </NavLink>
          </div>
          <h3>Siguenos en</h3>
          <div class="iconos">
            <div class="border-icon">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" class='fab fa-instagram'></a>
            </div>
            <div class="border-icon">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" class='fab fa-twitter' ></a>
            </div>
            <div class="border-icon">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" class='fab fa-facebook-f' ></a>
            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default Register;
