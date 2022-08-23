import React from 'react';
import '../../styles/LoginAndRegister.css'
import { useForm } from 'react-hook-form';
import mascotas from '../img/mascotas.png'
import { NavLink } from 'react-router-dom'
const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
      <div class="container-form sign-up">
        <div class="welcome-back">
          <div class="message">
            <h2>Bienvenido a Veterinaria Mundo Mascotas</h2>
            <p>Si ya tienes una cuenta por favor inicia sesion</p>
            <img src={mascotas} alt="" />
          </div>
        </div>
        <form class="formulario">
          <h2 class="create-account">Iniciar Sesion</h2>

          <p class="cuenta-gratis">¿Aun no tienes una cuenta?</p>
          <div>
            <input type="email" placeholder='E-Mail' {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
          </div>
          <div>
            <input type="password" placeholder="Contraseña"{...register('Contraseña', { required: true })} />
            {errors.Contraseña?.type === 'required' && <p>El compo es requerido</p>}
          </div>
          <button className='envio-informacion' type='submit'>Iniciar Sesion</button>
          <div className='envia-registro'>
            <NavLink to="/register">
              <p >Registrarse</p>
            </NavLink>
          </div>
          <h3>siguien en</h3>
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

export default Login;