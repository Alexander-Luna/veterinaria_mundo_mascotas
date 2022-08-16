import React from 'react'
import './Atencion.css'
const Atencion = () => {
  return (
    <section className="container about">
      <h2 className="subtitle">Dale a tu mascota la atención que se merece</h2>


      <div className="about__main">
        <article className="about__icons">
          <img src="https://www.dogtorscat.com/wp-content/uploads/2019/08/icn-consulta-general-home@2x.jpg" className="about__icon" />
          <h3 className="about__title">Consulta General</h3>
          <h3 className="about__title">$25</h3>
        </article>

        <article className="about__icons">
          <img src="https://www.dogtorscat.com/wp-content/uploads/2019/08/icn-consulta-especialidades-home@2x.jpg" className="about__icon" />
          <h3 className="about__title">Consulta de Especialidades</h3>
          <h3 className="about__title">$30</h3>
        </article>

        <article className="about__icons">
          <img src="https://www.dogtorscat.com/wp-content/uploads/2019/08/icn-consulta-nosturna-home@2x.jpg" className="about__icon" />
          <h3 className="about__title">Consulta Nocturna</h3>
          <h3 className="about__title">$35</h3>
        </article>

        <article className="about__icons">
          <img src="https://www.dogtorscat.com/wp-content/uploads/2019/08/icn-vacunas-home@2x.jpg" className="about__icon" />
          <h3 className="about__title">Vacunas</h3>
          <h3 className="about__title">desde $25</h3>
        </article>
      </div>
      <p className="about__paragraph">*
        Estas tarifas no incluyen costos de hospitalización, cirugías y medicinas.
        Aceptamos todas las tarjetas de crédito y débito.
      </p>
    </section>
  )
}

export default Atencion