import React from 'react'
import '../Servicios/Formulario.css'
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
const Formulario = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='contenedor-formulario'>
      <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
        {/* <Row className="mb-2"> */}
          <div >
            {/* <label>Nombre</label> */}
            <input
              type="text"
              {...register('nombre', { required: true })}
              placeholder="Nombre" />
            {errors.nombre?.type === 'required' && <p>El compo nombre es requerido</p>}
          </div>
          <div>
            {/* <label>Apellido</label> */}
            <input type="text" {...register('apellido', { required: true })} placeholder="Apellido" />
            {errors.apellido?.type === 'required' && <p>El apellido es compo es requerido</p>}
          </div>
        {/* </Row> */}
        <div>
          {/* <label>Email</label> */}
          <input type="text" placeholder='E-Mail' {...register('email', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
        </div>
        <div>
          {/* <label >Telefono</label> */}
          <input type="text" {...register('telefono', { required: true })} placeholder="telefono" />
          {errors.telefono?.type === 'required' && <p>El compo es requerido</p>}
        </div>
        <div>
          {/* <label> Mensaje</label> */}
          <textarea className='contenedor-mensaje' {...register('mensaje', { required: true })} rows="4" cols="40" placeholder="Mensaje"></textarea>
          {errors.mensaje?.type === 'required' && <p>El compo es requerido</p>}
        </div>
        {/* <input className='envio-informacion' type="submit" value="Enviar" /> */}
        <button className='envio-informacion' type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario;
