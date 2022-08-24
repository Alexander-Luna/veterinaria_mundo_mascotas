import React from 'react'
import { useLocalStorage } from './useLocalStorage'
const ProductItem = ({ data, addToCart }) => {
  let { id, name, image, descripcion, price } = data;

  const [info, setInfo] = useLocalStorage('info', '')

  return (
    <div className='card'
    >

      <img src={image} />

      <div className='card-title'>
        <h4 >{name}</h4>
      </div>

      <div className='card-details'>

        <button onClick={() => addToCart(id)}
        >Agregar</button>

        <div className='details'>
          <h4>{name}</h4>
          <p>{descripcion}</p>
          <h3>${price}.00</h3>
        </div>

      </div>
    </div>
  )
}

export default ProductItem