import { React, useState } from 'react'
import { ContenedorBotones, Boton, Contenido, } from './Perfil.elements'
import InformacioPefil from './InformacioPefil'

const Perfil = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  return (
    <div>
      <ContenedorBotones>
        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Modal 1</Boton>
        <Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>Modal 2</Boton>
      </ContenedorBotones>
      {/* informacion1 */}
      <InformacioPefil
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo='Hola!'
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={'center'}
        padding='20px'
      >
        <Contenido>
          <h1>Hola Mundo</h1>
          <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
        </Contenido>
      </InformacioPefil>

      {/* informacion2 */}

      <InformacioPefil
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo='Hola2222222!'
        mostrarHeader={false}
        mostrarOverlay={false}
        posicionModal={'end'}
        padding='20px'
      >
        <Contenido>
          <h1>Hola Mundo 22</h1>
          <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
        </Contenido>
      </InformacioPefil>

    </div>
  )
}

export default Perfil