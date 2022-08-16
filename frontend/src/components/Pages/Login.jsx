import React from 'react';

const Login = () => {
  return (
    <div className='ed-grid'>
      <div className='l-block'></div> 
      <div className="m-to-center m-60 lg-30">
      <h1 className='center'>Veterinaria Mundo Mascota</h1>
        <form >
          <div className="form__item">
            <label htmlFor="email">
              Correo electronico
              <input type="email" id="email" placeholder="Ingrese su e-mail" required />
            </label>

          </div>
          <div className="form__item">
            <label htmlFor="email">
              Contraseni
              <input type="password" id="password" placeholder="Ingrese su contrasenia" required />
            </label>
          </div>
          <div className='form__item'>
            <input type="submit" className='button full' value="Iniciar sesion" />
          </div>
        </form>
      </div>

    </div>
  );
}

export default Login;