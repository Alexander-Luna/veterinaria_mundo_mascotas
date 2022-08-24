import React from 'react';
import '../../styles/LoginAndRegister.css'
import { useForm } from 'react-hook-form';
import mascotas from '../img/mascotas.png'
import { NavLink } from 'react-router-dom'
const Register = () => {
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
            <p>Si aún no tienes una cuenta por favor registrese aquí</p>
            <img src={mascotas} alt="" />
          </div>
        </div>
        <form class="formulario">
          <h2 class="create-account">Crear Cuenta</h2>
          <div >
            <input
              type="text"
              {...register('nombre', { required: true })}
              placeholder="Nombre" />
            {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
          </div>
          <div >
            <input
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
          <div>
            <input type="password" placeholder="Contraseña"{...register('Contraseña', { required: true })} />
            {errors.Contraseña?.type === 'required' && <p>El campo es requerido</p>}
          </div>
          <div>
            <input type="password" placeholder="Confirmar Contraseña"{...register('Contraseña', { required: true })} />
            {errors.Contraseña?.type === 'required' && <p>El campo es requerido</p>}
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