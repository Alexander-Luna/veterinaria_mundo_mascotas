import React from 'react'
import '../Info/Info.css'

function Info(pros) {
  return (
    <div className='Info-container'>
      <div className='info'>
        <h1>{pros.titulo}</h1>
      </div>
    </div>
  )
}

export default Info