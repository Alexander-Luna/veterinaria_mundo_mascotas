import React, {useState,useEffect} from 'react';
import '../../styles/LoginAndRegister.css'
import { useForm } from 'react-hook-form';
import mascotas from '../img/mascotas.png'
import { NavLink } from 'react-router-dom'
import Axios from "axios";
const Login = () => {
  const { register, formState: { errors }} = useForm();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
   console.log("recargo")
    if(localStorage.getItem('access-token')){
      window.location='/dashboard'
    }
  }, []);


  const handleSubmit=(e)=>{
    e.preventDefault()
    const form = e.target
    const API_URL=process.env.REACT_APP_API_URL

    const data = {
      "email":email,
      "password":password
    }

    Axios.post(`${API_URL}/api/auth`, data)
      .then(r => {
        localStorage.clear()
        localStorage.setItem('user',JSON.stringify(r.data.data.user))
        localStorage.setItem('access-token',JSON.stringify(r.data.data.access_token))
        window.location.href = '/dashboard'
      })
      .catch(er => {
        setError(true)
      })
  }

  return (
    <>
      <div className="container-form sign-up">
        <div className="welcome-back">
          <div className="message">
            <h2>Bienvenido a Veterinaria Mundo Mascotas</h2>
            <p>Si ya tienes una cuenta por favor inicia sesión</p>
            <img src={mascotas} alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit.bind()} className="formulario">
          <h2 className="create-account">Iniciar Sesión</h2>
          {error?<div >Usuario o Contraseña Incorrectos</div>:<></>}
          {/* <p className="cuenta-gratis">¿Aun no tienes una cuenta?</p> */}
          <div>
            <input  onChange={(e)=>setEmail(e.target.value)} defaultValue={email} type="email" placeholder='E-Mail' required/>
            {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
          </div>
          <div>
            <input  onChange={(e)=>setPassword(e.target.value)} defaultValue={password} type="password" placeholder="Contraseña" required />
            {errors.Contraseña?.type === 'required' && <p>El campo es requerido</p>}
          </div>
          <button className='envio-informacion' type='submit'>Iniciar Sesión</button>
          <div className='envia-registro'>
            <NavLink to="/register">
              <p >Registrarse</p>
            </NavLink>
          </div>
          <div className='olvida-password'>
            <NavLink to="/resetpassword">
              <p >¿Ha olvidado su contraseña?</p>
            </NavLink>
          </div>
          <h3>Siguenos en</h3>
          <div className="iconos">
            <div className="border-icon">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className='fab fa-instagram'></a>
            </div>
            <div className="border-icon">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className='fab fa-twitter' ></a>
            </div>
            <div className="border-icon">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className='fab fa-facebook-f' ></a>
            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default Login;
